'use client';

import { useState, useEffect } from 'react';

export default function MeetingWidget() {
  const [isVisible, setIsVisible] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    setIsReady(true);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setIsVisible(scrollPercent >= 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div
      className={`cta-meeting-widget ${isReady ? 'widget-ready' : ''} ${
        isVisible ? 'is-visible' : ''
      }`}
    >
      <img
        src="/images/69b8731870166879c4e346ce_favicon2.png"
        loading="lazy"
        width="46"
        alt="Blask Icon"
        className="icon-call"
      />
      <div className="intro-call-par">Free 30-minute consultation</div>
      <a
        href="https://calendly.com/blask-agency/discovery"
        target="_blank"
        rel="noopener noreferrer"
        className="cta-main w-inline-block"
      >
        <div className="button-text-mask">
          <div className="button-text">Book now</div>
        </div>
        <div className="button-icon-wrap right">
          <div className="icon-button w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none">
              <path d="M3.33337 8.00016H12.6667M12.6667 8.00016L8.00004 3.3335M12.6667 8.00016L8.00004 12.6668" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="icon-button w-embed">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none">
              <path d="M3.33337 8.00016H12.6667M12.6667 8.00016L8.00004 3.3335M12.6667 8.00016L8.00004 12.6668" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="button-bg"></div>
      </a>
    </div>
  );
}
