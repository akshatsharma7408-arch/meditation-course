'use client';
import { useState, useEffect, useRef } from 'react';

function CountUp({ end, suffix = '' }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const counted = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true;
          let current = 0;
          const step = Math.max(1, Math.floor(end / 40));
          const timer = setInterval(() => {
            current += step;
            if (current >= end) {
              current = end;
              clearInterval(timer);
            }
            setValue(current);
          }, 30);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span className="sidebar__summary-value" ref={ref}>{value}{suffix}</span>;
}

export default function Sidebar() {
  const [wishlisted, setWishlisted] = useState(false);
  const [shareLabel, setShareLabel] = useState('Share');

  const handleShare = async () => {
    const shareData = {
      title: 'The Inner Peace Meditation Journey — Foundation',
      text: 'Discover inner calm with this 28-session guided meditation course.',
      url: typeof window !== 'undefined' ? window.location.href : '',
    };
    try {
      if (typeof navigator !== 'undefined' && navigator.share) {
        await navigator.share(shareData);
      } else if (typeof navigator !== 'undefined') {
        await navigator.clipboard.writeText(window.location.href);
        setShareLabel('Link copied!');
        setTimeout(() => setShareLabel('Share'), 2000);
      }
    } catch (e) { /* user cancelled */ }
  };

  return (
    <aside className="sidebar" id="sidebarCta">
      {/* CTA Card */}
      <div className="sidebar__card sidebar__cta-card">
        <div className="sidebar__price-row">
          <span className="sidebar__price">₹1,818.99</span>
          <span className="sidebar__price-original">₹3,499</span>
        </div>
        <button className="sidebar__cta-btn">I want this!</button>
        <p className="sidebar__guarantee">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          30-day money-back guarantee
        </p>
      </div>

      {/* Summary Grid */}
      <div className="sidebar__card">
        <div className="sidebar__summary-grid">
          <div className="sidebar__summary-item">
            <svg className="sidebar__summary-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <CountUp end={28} />
            <span className="sidebar__summary-label">Guided Sessions</span>
          </div>
          <div className="sidebar__summary-item">
            <svg className="sidebar__summary-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <CountUp end={10} suffix=" min" />
            <span className="sidebar__summary-label">Per Day</span>
          </div>
          <div className="sidebar__summary-item">
            <svg className="sidebar__summary-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <CountUp end={3} />
            <span className="sidebar__summary-label">Free PDFs</span>
          </div>
          <div className="sidebar__summary-item">
            <svg className="sidebar__summary-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <span className="sidebar__summary-value">Zero</span>
            <span className="sidebar__summary-label">Experience Needed</span>
          </div>
        </div>
      </div>

      {/* Wishlist & Share */}
      <div className="sidebar__card" style={{ padding: 'var(--space-md) var(--space-xl)' }}>
        <div className="sidebar__actions">
          <button
            className="sidebar__action-btn"
            onClick={() => setWishlisted(!wishlisted)}
            style={wishlisted ? { borderColor: '#e53e3e', background: 'rgba(229,62,62,.06)' } : {}}
          >
            <svg
              viewBox="0 0 24 24"
              fill={wishlisted ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
              style={wishlisted ? { color: '#e53e3e' } : {}}
            >
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
            </svg>
            <span>{wishlisted ? 'Wishlisted' : 'Wishlist'}</span>
          </button>
          <button className="sidebar__action-btn" onClick={handleShare}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="18" cy="5" r="3" />
              <circle cx="6" cy="12" r="3" />
              <circle cx="18" cy="19" r="3" />
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
            </svg>
            <span>{shareLabel}</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
