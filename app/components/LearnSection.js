const LearnIcon = () => (
  <svg className="learn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
    <path d="M8 12l3 3 5-6" />
  </svg>
);

const items = [
  <>How to build a <strong>consistent daily meditation habit</strong> that actually sticks — even if you&apos;ve failed before</>,
  <>Techniques to <strong>manage stress, anxiety, and overthinking</strong> with simple breathing anchors</>,
  <>The <strong>body scan method</strong> used by therapists and elite athletes for deep physical relaxation</>,
  <><strong>Loving-kindness (Metta) meditation</strong> to cultivate empathy and emotional resilience</>,
  <>How to <strong>sit with difficult emotions</strong> without being overwhelmed — and transform your relationship with discomfort</>,
  <><strong>Walking meditation</strong> and everyday mindfulness — bringing awareness beyond the cushion</>,
  <>A <strong>personal practice plan</strong> so you can continue independently long after the course ends</>,
];

export default function LearnSection() {
  return (
    <section id="learn">
      <h2 className="section-label">What You Will Learn</h2>
      <ul className="learn-list">
        {items.map((item, i) => (
          <li key={i}>
            <LearnIcon />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
