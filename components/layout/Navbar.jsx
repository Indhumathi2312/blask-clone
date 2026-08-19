'use client';

import { useState } from 'react';
import Link from 'next/link';
import Button from '../ui/Button';
import { mainNavLinks, mobileCategories } from '@/data/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <div className="nav_fixed">
      <div nav-static="" data-wf--navbar--variant="dark" className="master-navigation">
        <div
          role="banner"
          className="navbar w-nav"
          data-collapse="none"
          data-animation="default"
          data-duration="400"
        >
          <div className="nav-top-bg left"></div>
          <div className="nav-top-bg right"></div>

          <div className="nav-container">
            <div className="left-nav">
              {/* Mobile Menu Button */}
              <div
                className="menu-button w-nav-button cursor-pointer"
                onClick={toggleMobileMenu}
                aria-label="Toggle navigation menu"
              >
                {!mobileMenuOpen ? (
                  <div className="menu-button-inner open">
                    <div className="icon-menu w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6L10 6M2 9H10M2 3L10 3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                ) : (
                  <div className="menu-button-inner close">
                    <div className="icon-menu w-embed">
                      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 24 24" fill="none">
                        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                )}
              </div>

              {/* Brand Logo */}
              <Link href="/" className="brand-navbar w-nav-brand w--current">
                <img
                  src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/69b1d6fd78d33dfda27ab366_logo%20black%20v1.svg"
                  loading="lazy"
                  alt="Blask Logo"
                  className="image-logo"
                />
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <nav role="navigation" className={`nav-menu w-nav-menu ${mobileMenuOpen ? 'block' : ''}`}>
              <div className="wrap-nav-links">
                {mainNavLinks.map((link) => (
                  <a key={link.label} href={link.href} className="nav-link w-inline-block">
                    <div>{link.label}</div>
                  </a>
                ))}
              </div>

              {/* Mobile Menu Panel */}
              {mobileMenuOpen && (
                <div className="mobile-menu block">
                  <div className="wrap-mobile-menu">
                    <div className="mobile-nav-top-tile">
                      {mobileCategories.map((cat, idx) => (
                        <div key={idx}>
                          <div className="divider-dark-16"></div>
                          {cat.items ? (
                            <div className="nav-column-item-mobile">
                              <div className="mobile-links-wrap">
                                {cat.items.map((item, itemIdx) => (
                                  <span key={item.label} className="inline-flex items-center">
                                    <Link
                                      href={item.href}
                                      onClick={() => setMobileMenuOpen(false)}
                                      className={`text-large ${item.isCurrent ? 'w--current' : ''}`}
                                    >
                                      {item.label}
                                    </Link>
                                    {itemIdx < cat.items.length - 1 && <div className="text-large mx-1">·</div>}
                                  </span>
                                ))}
                              </div>
                              <div className="text-small body-medium">{cat.desc}</div>
                            </div>
                          ) : (
                            <Link
                              href={cat.single.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="nav-column-item-mobile w-inline-block"
                            >
                              <div className="mobile-links-wrap">
                                <div className="text-large">{cat.single.label}</div>
                              </div>
                              <div className="text-small body-medium">{cat.desc}</div>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mobile-nav-bottom-tile">
                      <div className="byq-cta">
                        <div className="button-wrap-nav">
                          <a
                            href="https://www.byq.supply/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cta-small w-inline-block"
                          >
                            <div className="button-text-mask button-2">
                              <div className="button-text">Visit BYQ.supply</div>
                            </div>
                            <div className="button-bg"></div>
                          </a>
                        </div>
                        <div className="overlay-byq-cta"></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </nav>

            {/* Header CTA Button */}
            <Button
              href="https://calendly.com/blask-agency/discovery"
              text="Book a call"
              variant="small"
            />
          </div>
        </div>

        <div className="nav-blur left"></div>
        <div className="nav-blur right"></div>
        <div className="nav-blur mobile"></div>
      </div>
    </div>
  );
}
