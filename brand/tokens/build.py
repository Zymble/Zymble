"""Regenerate CSS variables and a Tailwind CSS v4 theme from tokens.json."""
from pathlib import Path
import json
ROOT = Path(__file__).resolve().parent
tokens = json.loads((ROOT / 'tokens.json').read_text())
def dimension(obj):
    return f"{obj['value']:g}{obj['unit']}"
def color(obj):
    r, g, b = [round(c * 255) for c in obj['components']]
    if obj.get('alpha', 1) != 1:
        return f"rgb({r} {g} {b} / {obj['alpha']:g})"
    return f'#{r:02X}{g:02X}{b:02X}'
def alias(value):
    return 'var(--cr-' + value[1:-1].replace('.', '-') + ')'
def css_value(kind, value):
    if isinstance(value, str) and value.startswith('{'):
        return alias(value)
    if kind == 'color':
        return color(value)
    if kind in ('dimension', 'duration'):
        return dimension(value)
    if kind == 'fontFamily':
        return ', '.join(value)
    if kind == 'cubicBezier':
        return 'cubic-bezier(' + ', '.join(map(str, value)) + ')'
    if kind == 'shadow':
        pieces = [dimension(value[key]) for key in ('offsetX', 'offsetY', 'blur', 'spread')]
        return ' '.join(pieces + [color(value['color'])])
    return str(value)
def variable(name, val):
    return f'  --cr-{name}: {val};'
def themed(name):
    return '\n'.join(variable(role, alias(t['$value'])) for role, t in tokens['theme'][name].items())
base = []
for group, values in tokens.items():
    if group.startswith('$') or group == 'theme':
        continue
    for name, token in values.items():
        kind, value = token['$type'], token['$value']
        key = group + '-' + name
        if kind == 'typography':
            for ext, prop, typ in [('size','fontSize','dimension'),('tracking','letterSpacing','dimension'),('weight','fontWeight','fontWeight'),('line','lineHeight','number'),('family','fontFamily','fontFamily')]:
                base.append(variable(key+'-'+ext, css_value(typ, value[prop])))
        else:
            base.append(variable(key, css_value(kind, value)))
css = [':root {', *base, '}', ':root, [data-theme="light"] {', '  color-scheme: light;', themed('light'), '}', '[data-theme="dark"] {', '  color-scheme: dark;', themed('dark'), '}', '@media (prefers-color-scheme: dark) {', '  :root:not([data-theme]) {', '    color-scheme: dark;', themed('dark'), '  }', '}']
(ROOT/'variables.css').write_text('\n'.join(css)+'\n')
tw = ['/* After @import "tailwindcss" and variables.css. */', '@theme inline {']
for role in tokens['theme']['light']:
    tw.append(f'  --color-cr-{role}: var(--cr-{role});')
for group, namespace in [('radius','radius'),('space','spacing'),('family','font'),('weight','font-weight'),('shadow','shadow'),('ease','ease')]:
    for key in tokens[group]:
        tw.append(f'  --{namespace}-cr-{key}: var(--cr-{group}-{key});')
for name in tokens['type']:
    for suffix, role in [('', 'size'),('--line-height','line'),('--letter-spacing','tracking'),('--font-weight','weight')]:
        tw.append(f'  --text-cr-{name}{suffix}: var(--cr-type-{name}-{role});')
tw.extend(['}', '@theme {'])
for key, token in tokens['breakpoint'].items():
    tw.append(f"  --breakpoint-{key}: {dimension(token['$value'])};")
tw.append('}')
(ROOT/'tailwind-theme.css').write_text('\n'.join(tw)+'\n')
