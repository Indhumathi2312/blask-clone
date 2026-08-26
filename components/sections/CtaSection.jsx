'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function CtaSection() {
  return (
    <section className="section cta-b-section relative overflow-hidden py-24 sm:py-32">
      <div className="w-layout-blockcontainer main-container w-container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="master-cta-b flex flex-col items-center text-center max-w-2xl mx-auto gap-6 sm:gap-8"
        >
          <div className="headline-cta-b space-y-4">
            <h2 className="text-h1 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Ready to build something that actually works for your business?
            </h2>
            <div className="body-strong text-sm sm:text-base md:text-lg text-white/90 font-medium max-w-xl mx-auto">
              Get a strategy call, a clear plan, and a team that ships. No lengthy proposals — just a conversation about what you need.
            </div>
          </div>

          <div className="button-wrap-centered pt-2">
            <Button
              href="https://calendly.com/blask-agency/discovery"
              text="Book a Free Consultation"
              variant="main"
            />
          </div>
        </motion.div>
      </div>

      <div className="overlay-blur absolute inset-0 bg-black/30 backdrop-blur-md z-0 pointer-events-none"></div>
    </section>
  );
}
