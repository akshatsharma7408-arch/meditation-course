'use client';
import { useState, useEffect, useRef } from 'react';

const StarIcon = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78z" />
  </svg>
);

export default function StickyNav({ heroRef }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!heroRef?.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: '-60px 0px 0px 0px' }
    );
    observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [heroRef]);

  const scrollToSidebar = () => {
    const el = document.getElementById('sidebarCta');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <nav className={`sticky-nav${visible ? ' is-visible' : ''}`} aria-label="Primary">
      <div className="sticky-nav__inner">
        <span className="sticky-nav__title">The Inner Peace Meditation Journey</span>
        <div className="sticky-nav__meta">
          <div className="sticky-nav__stars" aria-label="4.8 out of 5 stars">
            <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
            <span>4.8</span>
          </div>
          <span className="sticky-nav__price">₹1,818.99</span>
          <button className="sticky-nav__cta" onClick={scrollToSidebar}>I want this!</button>
        </div>
      </div>
    </nav>
  );
}
