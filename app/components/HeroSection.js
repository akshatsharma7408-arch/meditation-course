'use client';
import { useState, useEffect, useCallback, forwardRef } from 'react';

const slides = [
  { bg: '/hero-bg.png', pos: 'center 35%' },
  { bg: '/hero-bg.png', pos: 'center 60%' },
  { bg: '/hero-bg.png', pos: 'left 40%' },
];

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const HeroSection = forwardRef(function HeroSection(props, ref) {
  const [current, setCurrent] = useState(0);

  const goTo = useCallback((idx) => setCurrent(idx), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" ref={ref}>
      <div className="hero__carousel">
        {slides.map((s, i) => (
          <div
            key={i}
            className={`hero__slide${i === current ? ' active' : ''}`}
            style={{ backgroundImage: `url(${s.bg})`, backgroundPosition: s.pos }}
          />
        ))}
      </div>
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__overline">A Guided Meditation Course · Level 1</p>
        <h1 className="hero__title">
          The Inner Peace<br />Meditation <em>Journey</em>
        </h1>
        <p className="hero__subtitle">
          A carefully crafted 28-session programme that gently guides you from your very first
          breath of awareness to a lasting daily practice — in just 10 minutes a day.
        </p>

        <div className="hero__benefits">
          <div className="hero__benefit"><CheckIcon /> 28 Guided Sessions</div>
          <div className="hero__benefit"><CheckIcon /> 10 Minutes a Day</div>
          <div className="hero__benefit"><CheckIcon /> Built-in Journal</div>
        </div>

        <div className="hero__tags">
          <span className="hero__tag">For Complete Beginners</span>
          <span className="hero__tag">$19 · One-Time</span>
        </div>

        <div className="hero__dots" aria-label="Carousel navigation">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`hero__dot${i === current ? ' active' : ''}`}
              aria-label={`Slide ${i + 1}`}
              onClick={() => goTo(i)}
            />
          ))}
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
        Scroll
      </div>
    </section>
  );
});

export default HeroSection;
