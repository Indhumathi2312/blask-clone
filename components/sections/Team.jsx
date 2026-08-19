'use client';

import { motion } from 'framer-motion';
import Tag from '../ui/Tag';
import Button from '../ui/Button';

export default function Team() {
  const patrykImage = 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/69e4c9cb76f6c190aff2a799_IMG_1838%201.avif';
  const patrykSrcset = 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/69e4c9cb76f6c190aff2a799_IMG_1838%201-p-500.avif 500w, https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/69e4c9cb76f6c190aff2a799_IMG_1838%201.avif 1000w';

  const jacekImage = '/images/69e65fc34e6c205531badfa4_IMG_2357.avif';
  const jacekSrcset = '/images/69e65fc34e6c205531badfa4_IMG_2357-p-500.avif 500w, /images/69e65fc34e6c205531badfa4_IMG_2357.avif 1000w';

  return (
    <section id="services" className="section wiw-section py-16 sm:py-24">
      <div className="w-layout-blockcontainer main-container w-container">
        <div className="w-layout-grid column-halves grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, filter: 'blur(12px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="content-column lg:col-span-6 flex flex-col justify-between space-y-6"
          >
            <div className="headline-column space-y-4">
              <Tag text="About us" variant="base" />
              <div className="heading-column space-y-4">
                <h2 className="text-h3 no-margins text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
                  People behind Blask
                </h2>
                <div className="body-medium text-sm sm:text-base text-gray-300 leading-relaxed space-y-4">
                  <p>
                    We've been on your side of the table. Before starting Blask, we worked in sales, marketing, and operations - across startups and large corporations. We saw the same problem everywhere: companies investing in growth while their website quietly worked against them.
                  </p>
                  <p>
                    Around 2019, we've independently started building websites and conversion-focused experiences for tech companies.
                  </p>
                  <p>
                    In 2024, we joined forces, combining our backgrounds in{' '}
                    <strong className="text-white font-bold">business</strong>,{' '}
                    <strong className="text-white font-bold">marketing</strong>,{' '}
                    <strong className="text-white font-bold">design</strong>, and{' '}
                    <strong className="text-white font-bold">development</strong> into one studio with a single focus: making sure your website is never the weakest link in your growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                href="https://calendly.com/blask-agency/discovery"
                text="Get in touch"
                variant="secondary"
              />
            </div>
          </motion.div>

          {/* Right Team Cards Column (2-Column Grid on Mobile, Tablet & Desktop) */}
          <div className="w-layout-grid team-grid home lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 items-stretch">
            {/* Patryk Baranowski Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card-team is-about relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4.5] sm:aspect-[3/4.2] border border-white/10 shadow-2xl group"
            >
              <img
                src={patrykImage}
                srcSet={patrykSrcset}
                sizes="(max-width: 479px) 48vw, (max-width: 767px) 49vw, (max-width: 991px) 356px, 462px"
                alt="Patryk Baranowski"
                className="image-cover w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="text-wrap-team text-align-right absolute bottom-0 right-0 bg-[#080808]/90 backdrop-blur-md pt-3 pb-2 px-4 rounded-tl-2xl border-t border-l border-white/10 text-right space-y-0.5">
                <div className="text-small text-body-bold font-bold text-white text-xs sm:text-sm">
                  Patryk Baranowski
                </div>
                <div className="text-small body-medium text-[11px] sm:text-xs text-gray-400">
                  Co-Founder<br />
                  <em className="text-gray-300 not-italic">shape &amp; feel</em>
                </div>
              </div>
            </motion.div>

            {/* Jacek Bączkowski Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card-team is-about relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4.5] sm:aspect-[3/4.2] border border-white/10 shadow-2xl group"
            >
              <img
                src={jacekImage}
                srcSet={jacekSrcset}
                sizes="(max-width: 479px) 48vw, (max-width: 767px) 49vw, (max-width: 991px) 356px, 462px"
                alt="Jacek Bączkowski"
                className="image-cover w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="text-wrap-team text-align-right absolute bottom-0 right-0 bg-[#080808]/90 backdrop-blur-md pt-3 pb-2 px-4 rounded-tl-2xl border-t border-l border-white/10 text-right space-y-0.5">
                <div className="text-small text-body-bold font-bold text-white text-xs sm:text-sm">
                  Jacek Bączkowski
                </div>
                <div className="text-small body-medium text-[11px] sm:text-xs text-gray-400">
                  Co-Founder<br />
                  <em className="text-gray-300 not-italic">systems &amp; flow</em>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
