<script lang="ts">
  /**
   * In/Out demo: the AI suggests clips on a 4-minute stretch of a stream; the visitor
   * picks one and adjusts In/Out by dragging or with the keyboard (WAI-ARIA slider).
   * Sample data only. Nothing leaves the browser.
   */
  interface Clip {
    title: string;
    why: string;
  }
  interface Props {
    clips: Clip[];
    inLabel: string;
    outLabel: string;
    duration: string;
    save: string;
    saved: string;
    hint: string;
    aiLabel: string;
    youLabel: string;
  }
  let { clips, inLabel, outLabel, duration, save, saved, hint, aiLabel, youLabel }: Props =
    $props();

  const WINDOW = 240; // seconds shown
  const OFFSET = 2 * 3600 + 10 * 60; // window starts at 2:10:00 into the stream
  const MIN_LEN = 3;
  const MAX_LEN = 90;
  const suggestions = [
    { in: 38, out: 66 },
    { in: 112, out: 139 },
    { in: 182, out: 221 },
  ];

  let selected = $state(0);
  let cuts = $state(suggestions.map((s) => ({ ...s })));
  let savedIndex = $state<number | null>(null);
  let track: HTMLDivElement | undefined = $state();
  let dragging = $state<'in' | 'out' | null>(null);

  const cut = $derived(cuts[selected]!);
  const ai = $derived(suggestions[selected]!);
  const len = $derived(cut.out - cut.in);

  // Deterministic waveform with peaks where the suggestions are.
  const bars = Array.from({ length: 96 }, (_, i) => {
    const t = (i / 96) * WINDOW;
    const peak = suggestions.some((s) => t >= s.in && t <= s.out) ? 0.35 : 0;
    return Math.min(
      1,
      0.22 + 0.25 * Math.abs(Math.sin(i * 1.3)) + 0.1 * Math.abs(Math.sin(i * 0.37)) + peak,
    );
  });

  const pct = (s: number) => `${(s / WINDOW) * 100}%`;
  function tc(s: number) {
    const total = Math.round(OFFSET + s);
    const h = Math.floor(total / 3600);
    const m = Math.floor((total % 3600) / 60);
    const sec = total % 60;
    return `${h}:${String(m).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  }
  const mmss = (s: number) =>
    `${Math.floor(s / 60)}:${String(Math.round(s % 60)).padStart(2, '0')}`;

  function setEdge(edge: 'in' | 'out', value: number) {
    const c = cuts[selected]!;
    const v = Math.round(value);
    if (edge === 'in') c.in = Math.max(0, Math.min(v, c.out - MIN_LEN), c.out - MAX_LEN);
    else c.out = Math.min(WINDOW, Math.max(v, c.in + MIN_LEN), c.in + MAX_LEN);
    savedIndex = null;
  }

  function onKey(edge: 'in' | 'out', e: KeyboardEvent) {
    const step = e.shiftKey ? 5 : 1;
    const current = edge === 'in' ? cut.in : cut.out;
    const map: Record<string, number> = {
      ArrowLeft: current - step,
      ArrowDown: current - step,
      ArrowRight: current + step,
      ArrowUp: current + step,
      PageDown: current - 10,
      PageUp: current + 10,
      Home: edge === 'in' ? 0 : cut.in + MIN_LEN,
      End: edge === 'in' ? cut.out - MIN_LEN : WINDOW,
    };
    const next = map[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setEdge(edge, next);
  }

  function secondsAt(clientX: number) {
    if (!track) return 0;
    const r = track.getBoundingClientRect();
    return ((clientX - r.left) / r.width) * WINDOW;
  }

  function startDrag(edge: 'in' | 'out', e: PointerEvent) {
    dragging = edge;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    (e.currentTarget as HTMLElement).focus();
  }
  function moveDrag(e: PointerEvent) {
    if (dragging) setEdge(dragging, secondsAt(e.clientX));
  }
  function endDrag() {
    dragging = null;
  }

  function choose(i: number) {
    selected = i;
    savedIndex = null;
  }
</script>

<div class="inout">
  <ul class="clips" aria-label={hint}>
    {#each clips as clip, i (i)}
      <li>
        <button type="button" class="clip" aria-pressed={selected === i} onclick={() => choose(i)}>
          <span class="clip-title">{clip.title}</span>
          <span class="clip-why">{clip.why} · {mmss(cuts[i]!.out - cuts[i]!.in)}</span>
        </button>
      </li>
    {/each}
  </ul>

  <div class="editor">
    <div class="times">
      <span><b>{inLabel}</b> <span class="tc">{tc(cut.in)}</span></span>
      <span class="len">{duration}: <b class="tc">{mmss(len)}</b></span>
      <span><b>{outLabel}</b> <span class="tc">{tc(cut.out)}</span></span>
    </div>

    <div class="track" bind:this={track}>
      <div class="bars" aria-hidden="true">
        {#each bars as h, i (i)}
          <span style:height={`${h * 100}%`}></span>
        {/each}
      </div>
      {#each suggestions as s, i (i)}
        {#if i !== selected}
          <span
            class="ghost"
            style:left={pct(s.in)}
            style:width={pct(s.out - s.in)}
            aria-hidden="true"
          ></span>
        {/if}
      {/each}
      <span class="ai" style:left={pct(ai.in)} style:width={pct(ai.out - ai.in)} aria-hidden="true"
      ></span>
      <span class="range" style:left={pct(cut.in)} style:width={pct(len)} aria-hidden="true"></span>

      <span
        class="handle h-in"
        class:active={dragging === 'in'}
        style:left={pct(cut.in)}
        role="slider"
        tabindex="0"
        aria-label={`${inLabel}: ${clips[selected]?.title}`}
        aria-valuemin={0}
        aria-valuemax={cut.out - MIN_LEN}
        aria-valuenow={cut.in}
        aria-valuetext={tc(cut.in)}
        onkeydown={(e) => onKey('in', e)}
        onpointerdown={(e) => startDrag('in', e)}
        onpointermove={moveDrag}
        onpointerup={endDrag}
        onpointercancel={endDrag}
      >
        <span>{inLabel}</span>
      </span>
      <span
        class="handle h-out"
        class:active={dragging === 'out'}
        style:left={pct(cut.out)}
        role="slider"
        tabindex="0"
        aria-label={`${outLabel}: ${clips[selected]?.title}`}
        aria-valuemin={cut.in + MIN_LEN}
        aria-valuemax={WINDOW}
        aria-valuenow={cut.out}
        aria-valuetext={tc(cut.out)}
        onkeydown={(e) => onKey('out', e)}
        onpointerdown={(e) => startDrag('out', e)}
        onpointermove={moveDrag}
        onpointerup={endDrag}
        onpointercancel={endDrag}
      >
        <span>{outLabel}</span>
      </span>
    </div>

    <div class="legend" aria-hidden="true">
      <span><i class="sw sw-ai"></i>{aiLabel}</span>
      <span><i class="sw sw-you"></i>{youLabel}</span>
    </div>

    <div class="actions">
      <button type="button" class="cr-btn" onclick={() => (savedIndex = selected)}>{save}</button>
      <p class="status" role="status">
        {#if savedIndex === selected}
          <span class="ok">✓ {saved} · {tc(cut.in)} – {tc(cut.out)}</span>
        {/if}
      </p>
    </div>
    <p class="hint">{hint}</p>
  </div>
</div>

<style>
  .inout {
    display: grid;
    gap: 1rem;
  }
  @media (width >= 64rem) {
    .inout {
      grid-template-columns: 16rem 1fr;
      gap: 1.5rem;
    }
  }
  .clips {
    display: grid;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  @media (width < 64rem) {
    /* A swipeable strip on small screens instead of three squeezed columns. */
    .clips {
      grid-auto-flow: column;
      grid-auto-columns: minmax(10.5rem, 1fr);
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding-bottom: 0.25rem;
    }
    .clips li {
      scroll-snap-align: start;
    }
  }
  .clip {
    display: grid;
    width: 100%;
    min-height: 44px;
    gap: 0.15rem;
    padding: 0.75rem 0.9rem;
    text-align: left;
    border: 1px solid var(--cr-rule);
    border-radius: var(--cr-radius-panel);
    background: var(--cr-surface);
    color: var(--cr-text);
    cursor: pointer;
    transition: border-color var(--cr-duration-fast) var(--cr-ease-standard);
  }
  .clip:hover {
    border-color: var(--cr-edge);
  }
  .clip[aria-pressed='true'] {
    border-color: var(--cr-palette-orange);
    box-shadow: inset 4px 0 0 var(--cr-palette-orange);
  }
  .clip-title {
    font-weight: 700;
  }
  .clip-why {
    font-size: var(--cr-type-caption-size);
    color: var(--cr-muted);
    font-variant-numeric: tabular-nums;
  }
  .editor {
    padding: 1rem;
    border: 1px solid var(--cr-rule);
    border-radius: var(--cr-radius-dialog);
    background: var(--cr-surface);
  }
  .times {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.5rem;
    font-size: var(--cr-type-time-size);
  }
  .tc {
    font-variant-numeric: tabular-nums;
  }
  .len {
    color: var(--cr-muted);
  }
  .track {
    position: relative;
    height: 5.5rem;
    margin: 1rem 0.6rem 0.5rem;
    border-radius: var(--cr-radius-control);
    background: var(--cr-raised);
    touch-action: none;
  }
  .bars {
    position: absolute;
    inset: 0.6rem 0.2rem;
    display: flex;
    align-items: center;
    gap: 2px;
  }
  .bars span {
    flex: 1;
    border-radius: 2px;
    background: var(--cr-edge);
    opacity: 0.7;
  }
  .ghost,
  .ai,
  .range {
    position: absolute;
    top: 0;
    bottom: 0;
  }
  .ghost {
    background: color-mix(in srgb, var(--cr-palette-orange) 12%, transparent);
  }
  .ai {
    border: 2px dashed var(--cr-playhead);
    border-radius: 4px;
  }
  .range {
    background: color-mix(in srgb, var(--cr-palette-orange) 28%, transparent);
    border-block: 3px solid var(--cr-palette-orange);
  }
  .handle {
    position: absolute;
    top: -0.35rem;
    bottom: -0.35rem;
    width: 1.5rem;
    margin-left: -0.75rem;
    display: grid;
    place-items: center;
    cursor: ew-resize;
    touch-action: none;
    outline-offset: 2px;
  }
  .handle > span {
    display: grid;
    place-items: center;
    width: 0.9rem;
    height: 100%;
    border-radius: 4px;
    background: var(--cr-palette-orange);
    color: var(--cr-palette-navy);
    font-size: 0.6rem;
    font-weight: 800;
    writing-mode: vertical-rl;
    transition: transform var(--cr-duration-fast) var(--cr-ease-standard);
  }
  .handle:hover > span,
  .handle.active > span {
    transform: scaleX(1.25);
  }
  .handle:focus-visible {
    outline: 3px solid var(--cr-focus);
    border-radius: 6px;
  }
  .legend {
    display: flex;
    gap: 1rem;
    margin-top: 0.75rem;
    font-size: var(--cr-type-caption-size);
    color: var(--cr-muted);
  }
  .legend span {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
  }
  .sw {
    display: inline-block;
    width: 1.25rem;
    height: 0.7rem;
    border-radius: 3px;
  }
  .sw-ai {
    border: 2px dashed var(--cr-playhead);
  }
  .sw-you {
    background: color-mix(in srgb, var(--cr-palette-orange) 28%, transparent);
    border-block: 2px solid var(--cr-palette-orange);
  }
  .actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.75rem 1rem;
    margin-top: 1rem;
  }
  .status {
    margin: 0;
    min-height: 1.5em;
    font-weight: 600;
  }
  .ok {
    color: var(--cr-success);
    font-variant-numeric: tabular-nums;
  }
  .hint {
    margin: 0.75rem 0 0;
    font-size: var(--cr-type-caption-size);
    color: var(--cr-muted);
  }
</style>
