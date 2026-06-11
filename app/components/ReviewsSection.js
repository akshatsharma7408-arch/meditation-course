'use client';
import { useEffect, useRef } from 'react';

const StarIcon = ({ size = 14, opacity = 1 }) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={size} height={size} style={{ opacity }}>
    <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78z" />
  </svg>
);

const Stars = ({ count = 5, size = 14 }) => (
  <>{Array.from({ length: 5 }, (_, i) => <StarIcon key={i} size={size} opacity={i < count ? 1 : 0.3} />)}</>
);

const VerifiedBadge = () => (
  <span className="review-card__verified">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
    Verified
  </span>
);

const ratingBars = [
  { label: 5, width: '82%', pct: '82%' },
  { label: 4, width: '12%', pct: '12%' },
  { label: 3, width: '4%', pct: '4%' },
  { label: 2, width: '1%', pct: '1%' },
  { label: 1, width: '1%', pct: '1%' },
];

const reviews = [
  {
    initial: 'A',
    name: 'Ananya R.',
    date: 'May 12, 2026',
    stars: 5,
    style: {},
    text: <>I&apos;ve tried Headspace, Calm, and YouTube videos — nothing stuck. This course finally made meditation feel <strong>accessible and personal</strong>. The journal prompts are beautiful and the 10-minute format is perfect for a busy schedule. Can&apos;t recommend enough!</>,
  },
  {
    initial: 'M',
    name: 'Marcus T.',
    date: 'April 28, 2026',
    stars: 5,
    style: { background: '#e8e0d6', color: '#5a524a' },
    text: <>As someone who deals with severe anxiety, this course was genuinely life-changing. The &ldquo;Sitting with Difficult Emotions&rdquo; session alone was worth the entire price. <strong>The structure is gentle but effective</strong> — I&apos;m now on week 8 of daily practice.</>,
  },
  {
    initial: 'S',
    name: 'Sofia L.',
    date: 'March 15, 2026',
    stars: 4,
    style: { background: '#fdebd0', color: '#c96a18' },
    text: <>I bought this for my mom and she absolutely loved it! The walking meditation and gratitude sessions are her favourites. <strong>The bonus journal is gorgeous</strong> — she prints a fresh copy every month. Great value for the price.</>,
  },
  {
    initial: 'J',
    name: 'James K.',
    date: 'February 3, 2026',
    stars: 5,
    style: { background: '#d5f0d6', color: '#2e7d32' },
    text: <>As a sceptic turned convert — this is the real deal. <strong>No woo-woo, no incense required</strong>. Just clear, practical guidance that respects your time. The habit tracker bonus helped me stay accountable and I&apos;m now at a 60-day streak.</>,
  },
];

function RatingBar({ label, targetWidth, pct }) {
  const fillRef = useRef(null);

  useEffect(() => {
    if (!fillRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fillRef.current.style.width = targetWidth;
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(fillRef.current);
    return () => observer.disconnect();
  }, [targetWidth]);

  return (
    <div className="rating-bar">
      <div className="rating-bar__label">
        {label} <StarIcon size={14} />
      </div>
      <div className="rating-bar__track">
        <div className="rating-bar__fill" ref={fillRef} />
      </div>
      <div className="rating-bar__pct">{pct}</div>
    </div>
  );
}

export default function ReviewsSection() {
  return (
    <section className="reviews-section" id="reviews">
      <h2 className="section-label">Student Reviews</h2>

      <div className="reviews-header">
        <div className="rating-summary">
          <div className="rating-summary__number">4.8</div>
          <div className="rating-summary__stars" aria-label="4.8 out of 5">
            <Stars count={5} size={18} />
          </div>
          <div className="rating-summary__count">Based on 347 reviews</div>
        </div>

        <div className="rating-bars">
          {ratingBars.map((bar) => (
            <RatingBar key={bar.label} label={bar.label} targetWidth={bar.width} pct={bar.pct} />
          ))}
        </div>
      </div>

      <div className="reviews-grid">
        {reviews.map((r, i) => (
          <article className="review-card" key={i}>
            <div className="review-card__header">
              <div className="review-card__avatar" aria-hidden="true" style={r.style}>{r.initial}</div>
              <div className="review-card__info">
                <div className="review-card__name">
                  {r.name}
                  <VerifiedBadge />
                </div>
                <div className="review-card__date">{r.date}</div>
              </div>
            </div>
            <div className="review-card__stars">
              <Stars count={r.stars} />
            </div>
            <p className="review-card__text">{r.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
