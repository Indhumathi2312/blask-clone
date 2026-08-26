'use client';

import { motion } from 'framer-motion';
import Tag from '../ui/Tag';
import { processSteps } from '@/data/process';

export default function Process() {
  const processImage = '/images/697610399ee4eb2aee013d30_amelie-mourichon-wusOJ-2uY6w-unsplash.avif';
  const processSrcset = '/images/697610399ee4eb2aee013d30_amelie-mourichon-wusOJ-2uY6w-unsplash-p-500.avif 500w, /images/697610399ee4eb2aee013d30_amelie-mourichon-wusOJ-2uY6w-unsplash-p-800.avif 800w, /images/697610399ee4eb2aee013d30_amelie-mourichon-wusOJ-2uY6w-unsplash-p-1080.avif 1080w, /images/697610399ee4eb2aee013d30_amelie-mourichon-wusOJ-2uY6w-unsplash.avif 2400w';

  return (
    <section id="process" className="section process py-16">
      <div className="w-layout-blockcontainer main-container process w-container">
        {/* Centered Header Block */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="headline-process flex flex-col items-center text-center max-w-2xl mx-auto mb-16 gap-4"
        >
          <Tag text="Our process" variant="depth" />
          <h2 className="no-margins text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            A Clear Process, Built to Remove Guesswork
          </h2>
        </motion.div>

        {/* 2-Column Responsive Layout: Left Image + Right Timeline */}
        <div className="w-layout-grid pocess-halves grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column Image (Full-width landscape on Mobile/Tablet, Vertical tall card on Desktop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="image-wrap-timeline lg:col-span-5 h-[280px] sm:h-[360px] lg:h-full lg:min-h-[580px] w-full rounded-2xl sm:rounded-3xl overflow-hidden sticky top-24 shadow-2xl border border-white/10"
          >
            <img
              src={processImage}
              srcSet={processSrcset}
              sizes="(max-width: 479px) 100vw, (max-width: 767px) 100vw, (max-width: 991px) 100vw, 462px"
              alt="Process Wireframing & Strategy"
              className="image-cover process w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Column Process Steps List */}
          <div className="content-timeline lg:col-span-7 flex flex-col divide-y divide-white/10 border-t border-b border-white/10">
            {processSteps.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="timeline-item process py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-start"
              >
                {/* Step Title & Duration */}
                <div className="left-timeline sm:col-span-4 space-y-1">
                  <div className="label-small label-strong uppercase text-xs tracking-wider text-gray-400 font-semibold">
                    {item.duration}
                  </div>
                  <div className="text-body-bold text-lg sm:text-xl font-bold text-white">
                    {item.title}
                  </div>
                </div>

                {/* Step Description & Output */}
                <div className="right-timeline sm:col-span-8 space-y-3">
                  <div className="body-medium text-sm sm:text-base text-gray-300 leading-relaxed">
                    {item.description}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400 italic">
                    <strong className="not-italic font-bold text-white">Output: </strong>
                    {item.output}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
