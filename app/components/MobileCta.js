'use client';

export default function MobileCta() {
  const scrollToSidebar = () => {
    const el = document.getElementById('sidebarCta');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="mobile-cta-bar">
      <div className="mobile-cta-bar__inner">
        <div>
          <span className="mobile-cta-bar__price">₹1,818.99</span>
          <span className="mobile-cta-bar__price-original">₹3,499</span>
        </div>
        <button className="mobile-cta-bar__btn" onClick={scrollToSidebar}>
          I want this!
        </button>
      </div>
    </div>
  );
}
