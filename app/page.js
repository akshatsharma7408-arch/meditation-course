'use client';

import { useRef } from 'react';
import useReveal from './components/useReveal';
import StickyNav from './components/StickyNav';
import HeroSection from './components/HeroSection';
import Introduction from './components/Introduction';
import Accordion from './components/Accordion';
import LearnSection from './components/LearnSection';
import BonusCards from './components/BonusCards';
import Sidebar from './components/Sidebar';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';
import MobileCta from './components/MobileCta';

export default function Home() {
  const heroRef = useRef(null);
  useReveal(); // Initialize reveal animations

  return (
    <>
      <StickyNav heroRef={heroRef} />
      
      <main>
        <HeroSection ref={heroRef} />

        <div className="page-body">
          <div className="main-content">
            <div className="reveal">
              <Introduction />
            </div>

            <div className="reveal reveal-delay-1">
              <Accordion />
            </div>

            <div className="reveal reveal-delay-2">
              <LearnSection />
            </div>

            <div className="reveal">
              <BonusCards />
            </div>
          </div>

          <div className="reveal reveal-delay-3">
            <Sidebar />
          </div>
        </div>

        <div className="reveal">
          <ReviewsSection />
        </div>
      </main>

      <Footer />
      <MobileCta />
    </>
  );
}
