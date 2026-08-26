'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Tag from '../ui/Tag';
import { caseStudies } from '@/data/caseStudies';

export default function Work() {
  return (
    <section id="work" className="section wrok">
      <div className="w-layout-blockcontainer main-container w-container">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="headline-wiw"
        >
          <Tag text="Our work" variant="base" />
          <h2 className="no-margins">Digital Products Built to Move the Needle</h2>
        </motion.div>

        <div id="pages" className="wrap-sales-pages">
          <div className="single-sales-pages">
            <div className="w-layout-grid grid-work">
              {caseStudies.map((cs, idx) => (
                <motion.div
                  key={cs.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={cs.href} className="case-study-card w-inline-block">
                    <div className="image-wrap-cs-home">
                      {cs.image && (
                        <img
                          src={cs.image}
                          srcSet={cs.srcset}
                          sizes="(max-width: 479px) 57vw, (max-width: 767px) 49vw, (max-width: 991px) 356px, 462px"
                          alt={cs.title}
                          className="image-sales-page"
                        />
                      )}
                      {cs.bgSvg && (
                        <div className="z-index-1">
                          <img src={cs.bgSvg} alt="" className="image-sales-page" />
                        </div>
                      )}

                      {/* Case Study Metrics Pills */}
                      <div className="cs-results-wrapper">
                        {cs.results.map((res, resIdx) => (
                          <div key={resIdx} className="text-cs-results">
                            {res}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-wrap-cs-home">
                      <h3 className="heading-cs-home">{cs.title}</h3>
                      <div className="text-small body-subtle cs-results">
                        {cs.tags.join('   |   ')}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="button-wrap-centered pt-12 flex justify-center">
          <a
            href="https://calendly.com/blask-agency/discovery"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl bg-white text-black font-semibold text-base hover:bg-gray-200 transition-colors shadow-lg"
          >
            See Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
