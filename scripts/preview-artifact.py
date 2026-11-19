"""Usage: python3 scripts/preview-artifact.py .vercel/output/static <out-dir>

Turn the static build into a claude.ai artifact preview (3 locales on one artifact).
index.html = pt-br as a fragment (the host adds the document skeleton);
en.html / es.html = full documents. Internal paths become relative."""
import re, shutil, sys
from pathlib import Path

src = Path(sys.argv[1]); out = Path(sys.argv[2])
if out.exists(): shutil.rmtree(out)
(out / 'assets').mkdir(parents=True); (out / 'brand').mkdir(); (out / 'media').mkdir()
for f in (src / '_astro').iterdir(): shutil.copy(f, out / 'assets' / f.name)
for n in ['horizontal-light.svg', 'horizontal-dark.svg']: shutil.copy(src / 'brand' / n, out / 'brand' / n)
for n in ['night-stage.mp4']: shutil.copy(src / 'media' / n, out / 'media' / n)

PAGES = {'/pt-br/': 'index.html', '/': 'en.html', '/es/': 'es.html'}
NOTE = {'pt-br': 'Prévia: a lista de espera entra na próxima etapa.',
        'en': 'Preview: the waitlist comes in the next step.',
        'es': 'Vista previa: la lista de espera llega en el siguiente paso.'}

def rewrite(html, loc):
    # assets
    html = re.sub(r'(["(])/(_astro|brand|media)/', r'\1\2/', html)
    html = html.replace('component-url="_astro/', 'component-url="./assets/').replace('renderer-url="_astro/', 'renderer-url="./assets/')
    html = html.replace('_astro/', 'assets/')  # '_' prefix is reserved by the artifact host
    html = re.sub(r'<track[^>]*\.vtt[^>]*>', '', html)  # .vtt is not a served type
    # drop head links that point at files we don't publish
    html = re.sub(r'<link rel="(icon|apple-touch-icon|manifest|sitemap|canonical|alternate)"[^>]*>', '', html)
    # locale homes -> the three published pages; every other internal page -> #
    def href(m):
        url = m.group(1)
        if url in PAGES: return f'href="{PAGES[url]}"'
        if url.startswith('#') or url.startswith('_astro/'): return m.group(0)
        return 'href="#"'
    html = re.sub(r'href="(/[^"]*|#[^"]*)"', href, html)
    html = re.sub(r'action="/[^"]*"', 'action="#"', html)
    # respect a theme the host already set on <html>
    html = html.replace("document.documentElement.dataset.theme = dark ? 'dark' : 'light';",
                        "if (!document.documentElement.dataset.theme) document.documentElement.dataset.theme = dark ? 'dark' : 'light';")
    # forms have nowhere to go in a preview
    html = html.replace('</body>', f'''<script>document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{{e.preventDefault();let p=f.querySelector('.preview-note');if(!p){{p=document.createElement('p');p.className='preview-note';p.setAttribute('role','status');p.style.cssText='margin-top:.5rem;font-weight:600;color:var(--cr-selected)';f.append(p);}}p.textContent={NOTE[loc]!r};}}));</script></body>''')
    return html

for path, name in PAGES.items():
    loc = {'/pt-br/': 'pt-br', '/': 'en', '/es/': 'es'}[path]
    html = rewrite((src / path.strip('/') / 'index.html').read_text() if path != '/' else (src / 'index.html').read_text(), loc)
    if name == 'index.html':
        head = re.search(r'<head>(.*)</head>', html, re.S).group(1)
        body_m = re.search(r'<body([^>]*)>(.*)</body>', html, re.S)
        body_cls = re.search(r'class="([^"]*)"', body_m.group(1)).group(1)
        keep = ''.join(re.findall(r'<title>.*?</title>|<meta name="description"[^>]*>|<script[^>]*>.*?</script>|<style[^>]*>.*?</style>|<link rel="preload"[^>]*>', head, re.S))
        # The title must come first (first 8KB is scanned for it)
        title = re.search(r'<title>.*?</title>', keep, re.S).group(0)
        keep = keep.replace(title, '')
        title = '<title>ClipyRush</title>'
        frag = (title + '\n<style>body{background:var(--cr-bg);color:var(--cr-text)}</style>\n' + keep +
                f'\n<div class="{body_cls}">{body_m.group(2)}</div>')
        (out / name).write_text(frag)
    else:
        (out / name).write_text(html)
print('ok', sorted(p.name for p in out.rglob('*') if p.is_file()))
