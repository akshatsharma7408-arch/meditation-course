export default function BonusCards() {
  return (
    <section id="bonuses">
      <h2 className="section-label">What You Get — Free</h2>
      <div className="bonus-grid">

        <div className="bonus-card">
          <img src="/bonus-book.png" alt="Meditation Journal PDF" className="bonus-card__img" />
          <div className="bonus-card__body">
            <span className="bonus-card__badge">Free Bonus</span>
            <h3 className="bonus-card__title">The Inner Peace Journal</h3>
            <p className="bonus-card__desc">A beautifully designed 30-page printable journal with guided prompts for every session.</p>
          </div>
        </div>

        <div className="bonus-card">
          <div className="bonus-card__img" style={{ background: 'linear-gradient(135deg, #fdebd0 0%, #f5d5b0 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#e07c24" strokeWidth="1.5" strokeLinecap="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="16" y1="13" x2="8" y2="13" />
              <line x1="16" y1="17" x2="8" y2="17" />
              <polyline points="10 9 9 9 8 9" />
            </svg>
          </div>
          <div className="bonus-card__body">
            <span className="bonus-card__badge">Free Bonus</span>
            <h3 className="bonus-card__title">Quick-Start Cheat Sheet</h3>
            <p className="bonus-card__desc">A single-page reference card summarising every technique so you never feel lost.</p>
          </div>
        </div>

        <div className="bonus-card">
          <div className="bonus-card__img" style={{ background: 'linear-gradient(135deg, #e8e0d6 0%, #d5cec4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#7a7062" strokeWidth="1.5" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6v6l4 2" />
            </svg>
          </div>
          <div className="bonus-card__body">
            <span className="bonus-card__badge">Free Bonus</span>
            <h3 className="bonus-card__title">Habit Tracker Template</h3>
            <p className="bonus-card__desc">A 90-day printable tracker to maintain momentum and celebrate streaks.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
