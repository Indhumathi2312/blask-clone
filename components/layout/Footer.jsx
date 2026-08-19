'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const linkedinIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none">
      <g clipPath="url(#clip0_linkedin)">
        <path d="M13.2807 13.281H11.0582V9.80031C11.0582 8.97029 11.0434 7.90183 9.90225 7.90183C8.74467 7.90183 8.56758 8.80616 8.56758 9.73988V13.2808H6.34507V6.12306H8.47871V7.10123H8.50858C8.94365 6.35735 9.75257 5.91305 10.6137 5.945C12.8664 5.945 13.2817 7.42672 13.2817 9.35438L13.2807 13.281ZM3.83727 5.14464C3.12495 5.14478 2.5474 4.56739 2.54726 3.85508C2.54713 3.14273 3.1245 2.56517 3.83678 2.56503C4.54911 2.56489 5.12665 3.14228 5.12679 3.85459C5.12692 4.56694 4.54959 5.14454 3.83727 5.14464ZM4.94852 13.281H2.72369V6.12306H4.94852V13.281ZM14.3887 0.501033H1.60686C1.00277 0.494207 0.50738 0.978113 0.5 1.58222V14.4176C0.507137 15.022 1.00246 15.5064 1.60686 15.4999H14.3887C14.9944 15.5075 15.4916 15.0231 15.5 14.4176V1.58132C15.4914 0.976 14.994 0.492128 14.3887 0.500097V0.501033Z" fill="currentColor" />
      </g>
      <defs>
        <clipPath id="clip0_linkedin">
          <rect width="16" height="16" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );

  const twitterXIcon = (
    <svg width="100%" height="100%" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.91992 6L20.582 27.375L6.23047 44H9.41016L21.9863 29.4219L31.9863 44H44L28.6816 21.6699L42.1992 6H39.0293L27.2754 19.6172L17.9336 6H5.91992ZM9.7168 8H16.8809L40.2031 42H33.0391L9.7168 8Z" fill="currentColor"/>
    </svg>
  );

  return (
    <footer className="footer bg-[#080808] text-white pt-16 pb-12 border-t border-white/10">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="content-footer space-y-12">
          {/* Top Section Grid */}
          <div className="w-layout-grid footer-halves grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            {/* Left Column: Logo & Subtitle */}
            <div className="footer-left md:col-span-8 space-y-4">
              <div className="footer-top space-y-3">
                <div className="heading-footer">
                  <Link href="/" aria-current="page" className="brand-footer inline-block">
                    <img
                      src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/69b1d6fd288150b22d1af0f2_logo%20white.svg"
                      loading="lazy"
                      alt="Blask Logo"
                      className="image-logo h-8 sm:h-9 object-contain"
                    />
                  </Link>
                </div>
                <p className="text-large text-gray-300 text-sm sm:text-base md:text-lg max-w-md leading-relaxed">
                  Growth-driven creative partner for tech startups
                </p>
              </div>
            </div>

            {/* Right Column: Company Links */}
            <div className="footer-right md:col-span-4 flex md:justify-end">
              <div className="footer-column space-y-3">
                <div className="label-small label-medium text-xs font-semibold uppercase tracking-wider text-gray-400">
                  Company
                </div>
                <div className="footer-links-column flex flex-col space-y-2 text-sm sm:text-base">
                  <Link href="/#services" className="footer-link text-gray-300 hover:text-white transition-colors duration-200">
                    Services
                  </Link>
                  <Link href="/#work" className="footer-link text-gray-300 hover:text-white transition-colors duration-200">
                    Work
                  </Link>
                  <Link href="/#process" className="footer-link text-gray-300 hover:text-white transition-colors duration-200">
                    Process
                  </Link>
                  <Link href="/#services" className="footer-link text-gray-300 hover:text-white transition-colors duration-200">
                    User Research
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar Section */}
          <div className="footer-bottom-wrap pt-8 border-t border-white/10">
            <div className="footer-legal-tile flex flex-row items-center justify-between gap-4 flex-wrap">
              {/* Left Social Icons */}
              <div className="footer-social-wrap flex items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/patryk-baranowski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link w-5 h-5 text-gray-400 hover:text-white transition-opacity duration-200"
                  aria-label="LinkedIn"
                >
                  <div className="icon-social w-full h-full">
                    {linkedinIcon}
                  </div>
                </a>
                <a
                  href="https://x.com/pat_baranowski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link w-5 h-5 text-gray-400 hover:text-white transition-opacity duration-200"
                  aria-label="X (Twitter)"
                >
                  <div className="icon-social w-full h-full">
                    {twitterXIcon}
                  </div>
                </a>
              </div>

              {/* Right Copyright Notice */}
              <div className="label-small label-medium text-xs font-mono text-gray-400 tracking-wider uppercase">
                © {currentYear} BLASK. ALL RIGHTS RESERVED.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
