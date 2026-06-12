const CheckIcon = () => (
  <svg
    className="learn-check"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="8 12 11 15 16 9" />
  </svg>
);

export default function LearnSection() {
  return (
    <section id="learn">
      <h2 className="section-label">What You Will Learn</h2>
      <ul className="learn-list">

        <li className="learn-item">
          <CheckIcon />
          <p>How to build a <strong>consistent daily meditation habit</strong> that actually sticks — even if you&apos;ve failed before</p>
        </li>

        <li className="learn-item">
          <CheckIcon />
          <p>Techniques to <strong>manage stress, anxiety, and overthinking</strong> with simple breathing anchors</p>
        </li>

        <li className="learn-item">
          <CheckIcon />
          <p>The <strong>body scan method</strong> used by therapists and elite athletes for deep physical relaxation</p>
        </li>

        <li className="learn-item">
          <CheckIcon />
          <p><strong>Loving-kindness (Metta) meditation</strong> to cultivate empathy and emotional resilience</p>
        </li>

        <li className="learn-item">
          <CheckIcon />
          <p>How to <strong>sit with difficult emotions</strong> without being overwhelmed — and transform your relationship with discomfort</p>
        </li>

        <li className="learn-item">
          <CheckIcon />
          <p><strong>Walking meditation</strong> and everyday mindfulness — bringing awareness beyond the cushion</p>
        </li>

        <li className="learn-item">
          <CheckIcon />
          <p>A <strong>personal practice plan</strong> so you can continue independently long after the course ends</p>
        </li>

      </ul>
    </section>
  );
}
