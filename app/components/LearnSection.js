const items = [
  {
    bold: 'Consistent daily meditation habit',
    rest: 'that actually sticks — even if you\'ve failed before',
  },
  {
    bold: 'Manage stress, anxiety & overthinking',
    rest: 'with simple breathing anchors you can use anywhere',
  },
  {
    bold: 'The body scan method',
    rest: 'used by therapists and elite athletes for deep physical relaxation',
  },
  {
    bold: 'Loving-kindness (Metta) meditation',
    rest: 'to cultivate empathy and lasting emotional resilience',
  },
  {
    bold: 'Sit with difficult emotions',
    rest: 'without being overwhelmed — transform your relationship with discomfort',
  },
  {
    bold: 'Walking meditation & everyday mindfulness',
    rest: 'bringing awareness far beyond the cushion',
  },
  {
    bold: 'Your personal practice plan',
    rest: 'so you can continue independently long after the course ends',
  },
];

const CheckIcon = () => (
  <svg
    className="learn-card__icon"
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
    <section id="learn" className="learn-section">
      <h2 className="section-label">What You Will Learn</h2>
      <ul className="learn-grid" role="list">
        {items.map((item, i) => (
          <li key={i} className="learn-card">
            <CheckIcon />
            <div className="learn-card__text">
              <strong className="learn-card__bold">{item.bold}</strong>
              <span className="learn-card__rest"> {item.rest}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
