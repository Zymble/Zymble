<script lang="ts">
  /**
   * Per-view campaign calculator: views ÷ 1,000 × the rate the streamer set.
   * Pure arithmetic on the visitor's inputs; the card says rates are set per campaign.
   */
  interface Props {
    lang: string;
    currency: string;
    labels: { views: string; rate: string; result: string; note: string };
    rateMin: number;
    rateMax: number;
    rateStep: number;
    rate: number;
  }
  let { lang, currency, labels, rateMin, rateMax, rateStep, rate: rate0 }: Props = $props();

  const viewSteps = [10_000, 25_000, 50_000, 100_000, 250_000, 500_000, 1_000_000];
  let vi = $state(4);
  let rate = $state(rate0);
  const views = $derived(viewSteps[vi] ?? 250_000);
  const money = $derived(
    new Intl.NumberFormat(lang, { style: 'currency', currency, maximumFractionDigits: 2 }),
  );
  const compact = $derived(new Intl.NumberFormat(lang, { notation: 'compact' }));
  const total = $derived((views / 1000) * rate);
</script>

<div class="calc">
  <label class="row">
    <span class="k">{labels.views}</span>
    <span class="v tabular">{compact.format(views)}</span>
    <input
      type="range"
      min="0"
      max={viewSteps.length - 1}
      step="1"
      bind:value={vi}
      aria-valuetext={compact.format(views)}
    />
  </label>
  <label class="row">
    <span class="k">{labels.rate}</span>
    <span class="v tabular">{money.format(rate)}</span>
    <input
      type="range"
      min={rateMin}
      max={rateMax}
      step={rateStep}
      bind:value={rate}
      aria-valuetext={money.format(rate)}
    />
  </label>
  <div class="result" aria-live="polite">
    <span class="k">{labels.result}</span>
    <span class="total tabular">{money.format(total)}</span>
  </div>
  <p class="note">{labels.note}</p>
</div>

<style>
  .calc {
    display: grid;
    gap: 1rem;
  }
  .row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.25rem 1rem;
    align-items: baseline;
  }
  .row input {
    grid-column: 1 / -1;
    width: 100%;
    height: 2.5rem;
    accent-color: var(--cr-palette-orange);
  }
  .k {
    font-size: var(--cr-type-label-size);
    color: var(--cr-muted);
  }
  .v {
    font-weight: 750;
  }
  .tabular {
    font-variant-numeric: tabular-nums;
  }
  .result {
    display: grid;
    gap: 0.1rem;
    padding-top: 0.75rem;
    border-top: 1px solid var(--cr-rule);
  }
  .total {
    font-size: clamp(2rem, 5vw, 2.75rem);
    line-height: 1;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: var(--cr-success);
  }
  .note {
    margin: 0;
    font-size: var(--cr-type-caption-size);
    color: var(--cr-muted);
  }
</style>
