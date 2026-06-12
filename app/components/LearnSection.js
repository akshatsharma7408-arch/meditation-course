const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    style={{ width: 22, height: 22, color: 'var(--clr-accent)', flexShrink: 0, marginTop: 2 }}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="8 12 11 15 16 9" />
  </svg>
);

const items = [
  { bold: 'Consistent daily meditation habit', rest: ' that actually sticks — even if you\'ve failed before' },
  { bold: 'Manage stress, anxiety & overthinking', rest: ' with simple breathing anchors you can use anywhere' },
  { bold: 'The body scan method', rest: ' used by therapists and elite athletes for deep physical relaxation' },
  { bold: 'Loving-kindness (Metta) meditation', rest: ' to cultivate empathy and lasting emotional resilience' },
  { bold: 'Sit with difficult emotions', rest: ' without being overwhelmed — and transform your relationship with discomfort' },
  { bold: 'Walking meditation & everyday mindfulness', rest: ' bringing awareness far beyond the cushion' },
  { bold: 'Your personal practice plan', rest: ' so you can continue independently long after the course ends' },
];

const itemStyle = {
  display: 'grid',
  gridTemplateColumns: '26px 1fr',
  gap: '0.75rem',
  alignItems: 'start',
  padding: '0.875rem 1rem',
  background: 'var(--clr-bg-card)',
  border: '1px solid var(--clr-border)',
  borderRadius: 'var(--radius-md)',
};

const textStyle = {
  fontSize: '1rem',
  lineHeight: 1.7,
  color: 'var(--clr-text-body)',
  margin: 0,
  wordBreak: 'break-word',
  minWidth: 0,
};

const boldStyle = {
  color: 'var(--clr-text-primary)',
  fontWeight: 600,
};

export default function LearnSection() {
  return (
    <section id="learn">
      <h2 className="section-label">What You Will Learn</h2>
      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {items.map((item, i) => (
          <li key={i} style={itemStyle}>
            <CheckIcon />
            <p style={textStyle}>
              <strong style={boldStyle}>{item.bold}</strong>
              {item.rest}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
