"""Usage: python3 scripts/preview-artifact.py .vercel/output/static <out-dir>

Turns the static build into a private claude.ai artifact preview with every page navigable:
- index.html = pt-br home as a fragment (the artifact host adds the document skeleton);
- every other page = a full document with a flat name (/pt-br/clippers/ -> pt-br-clippers.html);
- internal links point at those files; assets move from _astro/ to assets/ ('_' is reserved);
- the waitlist API is stubbed (no network): the form shows its success state plus a preview note.
"""
import re
import shutil
import sys
from pathlib import Path

src = Path(sys.argv[1])
out = Path(sys.argv[2])
if out.exists():
    shutil.rmtree(out)
(out / 'assets').mkdir(parents=True)
(out / 'brand').mkdir()
(out / 'media').mkdir()
for f in (src / '_astro').iterdir():
    shutil.copy(f, out / 'assets' / f.name)
for n in ['horizontal-light.svg', 'horizontal-dark.svg']:
    shutil.copy(src / 'brand' / n, out / 'brand' / n)
shutil.copy(src / 'media' / 'night-stage.mp4', out / 'media' / 'night-stage.mp4')

ENTRY = '/pt-br/'


def flat(url_path: str) -> str:
    """'/pt-br/clippers/' -> 'pt-br-clippers.html'; entry page -> 'index.html'; '/' -> 'en.html'."""
    if url_path == ENTRY:
        return 'index.html'
    if url_path == '/':
        return 'en.html'
    return url_path.strip('/').replace('/', '-') + '.html'


pages = {}
for f in src.rglob('index.html'):
    rel = '/' + str(f.parent.relative_to(src)).replace('.', '').strip('/')
    url_path = '/' if rel == '/' else rel + '/'
    pages[url_path] = f

NOTE = {
    'pt-BR': 'Prévia: nenhum e-mail foi enviado.',
    'en': 'Preview: no email was sent.',
    'es': 'Vista previa: no se envió ningún correo.',
}

STUB = """<script>
(() => {
  const real = window.fetch.bind(window);
  window.fetch = (input, init) => String(input).includes('/api/waitlist')
    ? Promise.resolve(new Response('{"ok":true,"preview":true}', { status: 200, headers: { 'Content-Type': 'application/json' } }))
    : real(input, init);
  new MutationObserver(() => {
    document.querySelectorAll('[data-waitlist-success]:not([hidden]):not([data-noted])').forEach((el) => {
      el.setAttribute('data-noted', '');
      const p = document.createElement('p');
      p.style.cssText = 'margin-top:.5rem;font-weight:600;color:var(--cr-selected)';
      p.textContent = __NOTE__;
      el.append(p);
    });
  }).observe(document.documentElement, { subtree: true, attributes: true, attributeFilter: ['hidden'] });
})();
</script>"""


def rewrite(html: str, lang: str) -> str:
    html = re.sub(r'(["(])/(_astro|brand|media)/', r'\1\2/', html)
    html = html.replace('_astro/', 'assets/')
    html = html.replace('component-url="assets/', 'component-url="./assets/').replace(
        'renderer-url="assets/', 'renderer-url="./assets/'
    )
    html = re.sub(r'<track[^>]*\.vtt[^>]*>', '', html)  # .vtt is not a served type
    html = re.sub(
        r'<link rel="(icon|apple-touch-icon|manifest|sitemap|canonical|alternate)"[^>]*>', '', html
    )

    def href(m):
        url, frag = m.group(1), m.group(2) or ''
        if url in pages:
            return f'href="{flat(url)}{frag}"'
        return 'href="#"'

    html = re.sub(r'href="(/[^"#]*)(#[^"]*)?"', href, html)
    html = html.replace(
        "document.documentElement.dataset.theme = dark ? 'dark' : 'light';",
        "if (!document.documentElement.dataset.theme) document.documentElement.dataset.theme = dark ? 'dark' : 'light';",
    )
    stub = STUB.replace('__NOTE__', repr(NOTE.get(lang, NOTE['en'])))
    return html.replace('<head>', '<head>' + stub, 1)


for url_path, f in pages.items():
    html = f.read_text()
    lang = re.search(r'<html lang="([^"]+)"', html).group(1)
    html = rewrite(html, lang)
    name = flat(url_path)
    if name == 'index.html':
        head = re.search(r'<head>(.*)</head>', html, re.S).group(1)
        body_m = re.search(r'<body([^>]*)>(.*)</body>', html, re.S)
        body_cls = re.search(r'class="([^"]*)"', body_m.group(1)).group(1)
        keep = ''.join(
            re.findall(
                r'<title>.*?</title>|<meta name="description"[^>]*>|<script[^>]*>.*?</script>|<style[^>]*>.*?</style>|<link rel="preload"[^>]*>',
                head,
                re.S,
            )
        )
        keep = re.sub(r'<title>.*?</title>', '', keep, flags=re.S)
        frag = (
            '<title>ClipyRush</title>\n<style>body{background:var(--cr-bg);color:var(--cr-text)}</style>\n'
            + keep
            + f'\n<div class="{body_cls}">{body_m.group(2)}</div>'
        )
        (out / name).write_text(frag)
    else:
        (out / name).write_text(html)

print('ok', len(pages), 'pages')
