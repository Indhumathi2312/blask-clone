'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';

export default function Comparison() {
  const beforeItems = [
    "You have a great product or service, but your website or app doesn't reflect it.",
    "Leads come in, but your systems can't keep up with follow-ups.",
    "Every new feature request turns into a slow back-and-forth with developers who don't understand your business.",
    "You're stitching together tools, freelancers, and outdated code instead of one dependable system.",
  ];

  const afterItems = [
    "A website or app that clearly communicates your value — and converts.",
    "AI-powered workflows and chatbots that handle repetitive work so your team doesn't have to.",
    "A scalable product built to grow with you, not something you'll need to rebuild in a year.",
    "One accountable team handling strategy, design, and code — not five vendors pointing fingers.",
  ];

  const crossIcon = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.6865 4.35352L8.37402 7.66602L11.6875 10.9795L10.9805 11.6865L7.66699 8.37305L4.35352 11.6865L3.64648 10.9795L6.95996 7.66602L3.64746 4.35352L4.35449 3.64648L7.66699 6.95898L10.9795 3.64648L11.6865 4.35352Z" fill="currentColor"/>
    </svg>
  );

  const checkIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 16 16" fill="none">
      <path d="M13.3307 4L5.9974 11.3333L2.66406 8" stroke="currentColor" strokeOpacity="1"/>
    </svg>
  );

  return (
    <section id="services" className="section wiw-section">
      <div className="w-layout-blockcontainer main-container w-container">
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="headline-wiw"
        >
          <h2 className="no-margins">Is your digital presence keeping up with your growth?</h2>
          <div className="body-medium">
            Here's what most businesses tell us before they work with us — and what changes after.
          </div>
        </motion.div>

        <div className="w-layout-grid home-compare">
          {/* Before Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="card-plan"
          >
            <div className="plan-middle-tile">
              <div className="plan-price-tile">
                <div className="conmpare-title">
                  <div className="text-h4 body-strong">Before Working With Us</div>
                  <div>Most teams we meet are stuck here:</div>
                </div>
              </div>
            </div>
            <div className="divider-plan"></div>
            <div className="plan-bottom-tile">
              <ul role="list" className="plan-list w-list-unstyled">
                {beforeItems.map((item, idx) => (
                  <li key={idx} className="plan-list-item">
                    <div className="icon-wrap-tick">
                      <div className="icon-plan w-embed">{crossIcon}</div>
                    </div>
                    <div className="body-strong">{item}</div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* After Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="card-plan last"
          >
            <div className="plan-middle-tile">
              <div className="plan-price-tile">
                <div className="conmpare-title">
                  <div className="text-h4 body-strong">After Working with Us</div>
                  <div className="body-strong">When design, development, and automation work as one system:</div>
                </div>
              </div>
            </div>
            <div className="divider-plan"></div>
            <div className="plan-bottom-tile">
              <ul role="list" className="plan-list w-list-unstyled">
                {afterItems.map((item, idx) => (
                  <li key={idx} className="plan-list-item">
                    <div className="icon-wrap-tick">
                      <div className="icon-plan w-embed">{checkIcon}</div>
                    </div>
                    <div className="body-strong">{item}</div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="button-wrap-centered">
          <Button href="https://calendly.com/blask-agency/discovery" text="Talk to Our Team" variant="main" />
        </div>
      </div>
    </section>
  );
}
