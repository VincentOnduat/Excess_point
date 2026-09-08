<header class="hero">
  <div class="wrap hero-grid">
    <div>
      <div class="eyebrow">A comparison hub, not a broker</div>
      <h1>Know what you're comparing<br />before you compare prices.</h1>
      <p class="lede">
        Excess Point breaks down what actually differs between car, home, pet, life and travel
        policies — cover levels, exclusions, excess structures — so you know what to check before
        you click through for quotes.
      </p>
      <div class="hero-ctas">
        <a class="btn btn-primary" href="#car">Start with car insurance ↓</a>
        <a class="btn btn-ghost" href="/disclosure">How we make money</a>
      </div>
    </div>
    <div class="receipt">
      <div class="receipt-head">Example policy schedule — for illustration only</div>
      <div class="receipt-title">Comprehensive Car Cover</div>
      <div class="receipt-row"><span>Compulsory excess</span><span class="val">£150</span></div>
      <div class="receipt-row"><span>Voluntary excess</span><span class="val">£250</span></div>
      <div class="receipt-row"><span>No-claims discount</span><span class="val">4 yrs</span></div>
      <div class="receipt-row"><span>Courtesy car</span><span class="val">Included</span></div>
      <div class="receipt-row"><span>Windscreen cover</span><span class="val">£75 excess</span></div>
      <div class="receipt-note">Not a real quote — figures are illustrative so you know what to look for on yours.</div>
    </div>
  </div>
</header>

<style>
  .hero { padding: 64px 0 56px; }
  .hero-grid { display: grid; grid-template-columns: 1.25fr 1fr; gap: 56px; align-items: center; }
  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: var(--accent-strong);
    margin-bottom: 18px;
  }
  .eyebrow::before { content: ''; width: 18px; height: 1px; background: var(--accent-strong); }
  .hero h1 { font-size: clamp(2rem, 4vw, 2.9rem); font-weight: 600; letter-spacing: -0.01em; }
  .hero p.lede { font-size: 1.08rem; color: var(--text-muted); max-width: 46ch; margin: 20px 0 28px; }
  .hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }

  .receipt {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 22px 22px 18px;
    box-shadow: var(--shadow);
    transform: rotate(1.2deg);
  }
  .receipt-head { font-size: 0.68rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px; }
  .receipt-title { font-family: 'Fraunces', serif; font-weight: 600; font-size: 1.05rem; margin-bottom: 14px; }
  .receipt-row { display: flex; justify-content: space-between; gap: 12px; padding: 7px 0; border-bottom: 1px dashed var(--border); font-size: 0.86rem; }
  .receipt-row:last-of-type { border-bottom: none; }
  .receipt-row .val { font-family: 'IBM Plex Mono', monospace; font-weight: 500; }
  .receipt-note { margin-top: 14px; font-size: 0.7rem; color: var(--text-muted); font-style: italic; }

  @media (max-width: 760px) {
    .hero-grid { grid-template-columns: 1fr; gap: 36px; }
    .receipt { transform: none; }
  }
</style>
