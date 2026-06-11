'use client';
import { useState, useRef, useEffect } from 'react';

const ChevronIcon = () => (
  <svg className="accordion__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const seriesData = [
  {
    num: 1,
    title: 'Series 1 — Arriving',
    count: '7 sessions',
    items: [
      'Welcome & Setting Your Intention',
      'The Breath as an Anchor — your first guided sit',
      'Posture, Comfort & Creating Your Space',
      'Wandering Minds Are Normal — letting go of judgement',
      'Body Scan Basics — tuning into sensation',
      'Counting Breaths — building gentle focus',
      'Reflection & Journal Prompt: "What brought me here?"',
    ],
  },
  {
    num: 2,
    title: 'Series 2 — Settling In',
    count: '7 sessions',
    items: [
      'Open Awareness — widening the lens',
      'Working with Restlessness & Impatience',
      'Noting Technique — labelling thoughts gently',
      'Guided Relaxation for Better Sleep',
      'Introduction to Loving-Kindness (Metta)',
      'Meditation for Stressful Days — the 5-minute reset',
      'Reflection & Journal Prompt: "What am I noticing?"',
    ],
  },
  {
    num: 3,
    title: 'Series 3 — Deepening',
    count: '7 sessions',
    items: [
      'Sitting with Difficult Emotions',
      'Compassion Meditation — extending kindness inward',
      'Walking Meditation — mindfulness in motion',
      'Sound Awareness — using ambient noise as a teacher',
      'Visualisation Practice — the mountain meditation',
      'Gratitude Sit — rewiring your attention',
      'Reflection & Journal Prompt: "Where do I feel it?"',
    ],
  },
  {
    num: 4,
    title: 'Series 4 — Sustaining',
    count: '7 sessions',
    items: [
      'Building a Habit that Sticks — the science of routines',
      'Meditating with Others — the power of shared practice',
      'Silent Sit — 10 minutes with minimal guidance',
      'Self-Inquiry — "Who is the one meditating?"',
      'Integrating Mindfulness into Daily Life',
      'Your Personal Practice Plan — creating independence',
      'Closing Ceremony & Final Journal Prompt',
    ],
  },
];

function AccordionItem({ series, isOpen, onToggle }) {
  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.style.maxHeight = isOpen ? bodyRef.current.scrollHeight + 'px' : '0';
    }
  }, [isOpen]);

  return (
    <div className={`accordion__item${isOpen ? ' open' : ''}`}>
      <button className="accordion__trigger" aria-expanded={isOpen} onClick={onToggle}>
        <span className="accordion__trigger-left">
          <span className="accordion__series-num">{series.num}</span>
          {series.title}
        </span>
        <span className="accordion__session-count">{series.count}</span>
        <ChevronIcon />
      </button>
      <div className="accordion__body" ref={bodyRef}>
        <div className="accordion__body-inner">
          <ul>
            {series.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="curriculum">
      <h2 className="section-label">What&apos;s Inside</h2>
      <div className="accordion">
        {seriesData.map((series, i) => (
          <AccordionItem
            key={i}
            series={series}
            isOpen={openIndex === i}
            onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
          />
        ))}
      </div>
    </section>
  );
}
