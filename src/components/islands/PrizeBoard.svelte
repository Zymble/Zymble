<script lang="ts">
  /**
   * Contest leaderboard simulator: drag the prize pool, watch the split per position.
   * Honest by construction: the visitor sets the amount, and the card says it's a simulation
   * of rules each streamer defines. Money uses the success token; 1st place uses gold.
   */
  import { Tween } from 'svelte/motion';
  import { cubicOut } from 'svelte/easing';

  interface Props {
    lang: string;
    currency: string;
    pool: number;
    min: number;
    max: number;
    step: number;
    split: number[];
    labels: {
      contest: string;
      host: string;
      total: string;
      slider: string;
      you: string;
      join: string;
      joinHref: string;
      note: string;
    };
    handles: string[];
  }
  let { lang, currency, pool, min, max, step, split, labels, handles }: Props = $props();

  let value = $state(pool);
  const reduce =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const shown = new Tween(pool, { duration: reduce ? 0 : 450, easing: cubicOut });
  $effect(() => {
    shown.target = value;
  });

  const money = $derived(
    new Intl.NumberFormat(lang, { style: 'currency', currency, maximumFractionDigits: 0 }),
  );
  const top = $derived(Math.max(...split));
</script>

<div class="board">
  <div class="head">
    <span class="tag">{labels.contest}</span>
    <span class="host">{labels.host}</span>
  </div>

  <div class="pool">
    <span class="pool-label">{labels.total}</span>
    <span class="pool-value tabular">{money.format(Math.round(shown.current / step) * step)}</span>
  </div>

  <label class="slider">
    <span class="sr">{labels.slider}</span>
    <input type="range" {min} {max} {step} bind:value aria-valuetext={money.format(value)} />
    <span class="slider-hint" aria-hidden="true">{labels.slider}</span>
  </label>

  <ol class="ranks">
    {#each split as share, i (i)}
      <li class:first={i === 0}>
        <span class="pos tabular">{i + 1}</span>
        <span class="who">{handles[i]}</span>
        <span class="bar" aria-hidden="true">
          <i style:transform={`scaleX(${share / top})`}></i>
        </span>
        <span class="amt tabular">
          {money.format(Math.round((shown.current * share) / step) * step)}
        </span>
      </li>
    {/each}
    <li class="you">
      <span class="pos tabular">{split.length + 1}</span>
      <span class="who">{labels.you}</span>
      <a class="join" href={labels.joinHref}>{labels.join}</a>
    </li>
  </ol>

  <p class="note">{labels.note}</p>
</div>

<style>
  .board {
    border: 1px solid var(--cr-rule);
    border-radius: var(--cr-radius-dialog);
    background: var(--cr-surface);
    box-shadow: 0 30px 80px -30px rgb(0 0 0 / 0.6);
    overflow: hidden;
  }
  .head {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    min-height: 2.75rem;
    padding: 0 1.1rem;
    border-bottom: 1px solid var(--cr-rule);
    font-size: var(--cr-type-label-size);
    font-weight: 600;
  }
  .tag {
    padding: 0.05rem 0.45rem;
    border-radius: 2px;
    background: var(--cr-palette-gold);
    color: var(--cr-palette-navy);
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.06em;
    text-transform: uppercase;
  }
  .host {
    color: var(--cr-muted);
  }
  .pool {
    display: grid;
    gap: 0.15rem;
    padding: 1.25rem 1.1rem 0.25rem;
  }
  .pool-label {
    font-size: var(--cr-type-label-size);
    color: var(--cr-muted);
  }
  .pool-value {
    font-size: clamp(2.5rem, 7vw, 3.75rem);
    line-height: 1;
    font-weight: 800;
    letter-spacing: -0.04em;
    color: var(--cr-success);
  }
  .tabular {
    font-variant-numeric: tabular-nums;
  }
  .slider {
    display: grid;
    gap: 0.35rem;
    padding: 0.75rem 1.1rem 1rem;
  }
  .slider input {
    width: 100%;
    height: 2.75rem;
    accent-color: var(--cr-palette-orange);
    cursor: grab;
  }
  .slider-hint {
    font-size: var(--cr-type-caption-size);
    color: var(--cr-muted);
  }
  .sr {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip-path: inset(50%);
    white-space: nowrap;
  }
  .ranks {
    margin: 0;
    padding: 0;
    list-style: none;
    border-top: 1px solid var(--cr-rule);
  }
  .ranks li {
    display: grid;
    grid-template-columns: 1.75rem minmax(0, 1fr) auto;
    grid-template-areas: 'pos who amt' 'pos bar bar';
    align-items: center;
    gap: 0.35rem 0.75rem;
    padding: 0.8rem 1.1rem;
  }
  .ranks li + li {
    border-top: 1px solid var(--cr-rule);
  }
  @media (width >= 40rem) {
    .ranks li {
      grid-template-columns: 1.75rem minmax(7rem, 1fr) minmax(4rem, 1.2fr) auto;
      grid-template-areas: 'pos who bar amt';
    }
  }
  .pos {
    grid-area: pos;
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--cr-muted);
  }
  /* Gold in dark, ochre in light: both pass contrast as text. */
  .first .pos {
    color: var(--cr-warning);
  }
  .who {
    grid-area: who;
    min-width: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 650;
  }
  .bar {
    grid-area: bar;
    height: 0.4rem;
    border-radius: 2px;
    background: var(--cr-raised);
    overflow: hidden;
  }
  .bar i {
    display: block;
    height: 100%;
    background: var(--cr-success);
    transform-origin: left;
    transition: transform var(--cr-duration-enter) var(--cr-ease-standard);
  }
  .first .bar i {
    background: var(--cr-warning);
  }
  .amt {
    grid-area: amt;
    font-size: 1.15rem;
    font-weight: 800;
    color: var(--cr-success);
    text-align: right;
  }
  .you {
    background: var(--cr-raised);
  }
  .you .who {
    color: var(--cr-muted);
  }
  .join {
    grid-area: amt;
    justify-self: end;
    display: inline-flex;
    align-items: center;
    min-height: 2.5rem;
    padding: 0 0.85rem;
    border-radius: var(--cr-radius-control);
    background: var(--cr-action);
    color: var(--cr-on-action);
    font-weight: 750;
    text-decoration: none;
    white-space: nowrap;
  }
  .join:hover {
    background: var(--cr-action-hover);
  }
  @media (width >= 40rem) {
    .you .join {
      grid-column: 3 / 5;
    }
  }
  .note {
    margin: 0;
    padding: 0.75rem 1.1rem;
    border-top: 1px solid var(--cr-rule);
    font-size: var(--cr-type-caption-size);
    color: var(--cr-muted);
  }
</style>
