'use client';

import { motion } from 'framer-motion';
import Tag from '../ui/Tag';
import { services, techStack } from '@/data/services';

export default function Services() {
  const brandingSvg = (
    <svg width="100%" height="100%" viewBox="0 0 155 81" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M82.4585 23.4502C82.4585 30.0776 87.8311 35.4502 94.4585 35.4502H97.9399C104.567 35.4502 109.94 30.0776 109.94 23.4502V12.7568C109.94 6.12942 115.313 0.756836 121.94 0.756836H142.998C149.625 0.756836 154.998 6.12942 154.998 12.7568V33.8145C154.998 40.4419 149.625 45.8145 142.998 45.8145H129.599C122.972 45.8145 117.599 51.187 117.599 57.8145V68.5078C117.599 75.1352 112.227 80.5078 105.599 80.5078H84.5415C77.9141 80.5078 72.5415 75.1352 72.5415 68.5078V57.8145C72.5415 51.187 67.1689 45.8145 60.5415 45.8145H57.0601C50.4326 45.8145 45.0601 51.187 45.0601 57.8145V68.5078C45.0601 75.1352 39.6875 80.5078 33.0601 80.5078H12.0024C5.37502 80.5078 0.00244141 75.1352 0.00244141 68.5078V47.4502C0.00244141 40.8228 5.37502 35.4502 12.0024 35.4502H25.4009C32.0283 35.4502 37.4009 30.0776 37.4009 23.4502V12.7568C37.4009 6.12942 42.7735 0.756836 49.4009 0.756836H70.4585C77.0859 0.756836 82.4585 6.12942 82.4585 12.7568V23.4502Z" fill="currentColor"/>
    </svg>
  );

  const designSvg = (
    <svg width="100%" height="100%" viewBox="0 0 121 121" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M40.9302 72.9016C40.9302 76.8915 44.1646 80.126 48.1545 80.126H73.1717C77.1616 80.126 80.396 76.8915 80.396 72.9016V48.1589C80.396 44.169 83.6304 40.9346 87.6203 40.9346H113.44C117.43 40.9346 120.665 44.169 120.665 48.1589V74.1135C120.665 78.1034 117.43 81.3379 113.44 81.3379H88.0217C84.0318 81.3379 80.7974 84.5723 80.7974 88.5622V113.305C80.7974 117.295 77.5629 120.529 73.573 120.529H47.7531C43.7633 120.529 40.5288 117.295 40.5288 113.305V88.5622C40.5288 84.5723 37.2944 81.3379 33.3045 81.3379H7.88596C3.89607 81.3379 0.661621 78.1034 0.661621 74.1135V48.1589C0.661621 44.169 3.89607 40.9346 7.88596 40.9346H33.7058C37.6957 40.9346 40.9302 44.169 40.9302 48.1589V72.9016ZM80.7974 33.7093C80.7974 37.6991 77.5629 40.9336 73.573 40.9336H47.7531C43.7633 40.9336 40.5288 37.6991 40.5288 33.7093V7.75461C40.5288 3.76472 43.7633 0.530273 47.7531 0.530273H73.573C77.5629 0.530273 80.7974 3.76472 80.7974 7.75461V33.7093Z" fill="currentColor"/>
    </svg>
  );

  const devSvg = (
    <svg width="100%" height="100%" viewBox="0 0 118 118" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M36.8757 11.8772C38.9171 13.9185 42.2268 13.9185 44.2681 11.8772L53.7469 2.3985C55.7882 0.35716 59.0979 0.357159 61.1393 2.3985L73.3036 14.5627C75.3449 16.604 78.6546 16.604 80.696 14.5627L91.4709 3.78788C93.5122 1.74654 96.8219 1.74653 98.8633 3.78788L114.212 19.1369C116.254 21.1782 116.254 24.4879 114.212 26.5292L103.436 37.3056C101.395 39.3469 101.395 42.6566 103.436 44.6979L115.601 56.863C117.643 58.9043 117.643 62.214 115.601 64.2553L106.122 73.734C104.081 75.7754 104.081 79.085 106.122 81.1264L116.469 91.4729C118.51 93.5142 118.51 96.8239 116.469 98.8652L102.232 113.102C100.191 115.144 96.8809 115.144 94.8395 113.102L79.4904 97.7532C77.449 95.7118 77.449 92.4022 79.4904 90.3608L88.9688 80.8824C91.0102 78.8411 91.0102 75.5314 88.9688 73.4901L78.6223 63.1436C76.5809 61.1023 76.5809 57.7926 78.6223 55.7513L89.3987 44.9749C91.44 42.9336 91.44 39.6239 89.3987 37.5826L80.4186 28.6026C78.3773 26.5613 75.0676 26.5613 73.0262 28.6026L62.2516 39.3771C60.2103 41.4185 56.9006 41.4185 54.8592 39.3771L44.5127 29.0307C42.4713 26.9893 39.1616 26.9893 37.1202 29.0307L27.6412 38.5096C25.5998 40.551 22.2901 40.551 20.2488 38.5096L4.89966 23.1606C2.8583 21.1193 2.8583 17.8096 4.89966 15.7683L19.137 1.53101C21.1784 -0.510336 24.4881 -0.510336 26.5294 1.53101L36.8757 11.8772Z" fill="currentColor" />
      <path d="M73.9855 59.3641C76.0268 61.4055 76.0268 64.7151 73.9855 66.7565L24.2726 116.469C22.2312 118.51 18.9215 118.51 16.8801 116.469L1.53102 101.12C-0.51034 99.0786 -0.51034 95.769 1.53102 93.7276L51.2439 44.0151C53.2853 41.9738 56.595 41.9738 58.6363 44.0151L73.9855 59.3641Z" fill="currentColor" />
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
          className="headline-wiw services"
        >
          <Tag text="our services" variant="base" />
          <h2 className="no-margins">We handle everything you need to launch and grow</h2>
        </motion.div>

        {/* 3 Service Cards */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="w-layout-grid wiw-thirds"
        >
          {/* Branding Card */}
          <div className="wrap-card-wiw">
            <div className="card-wiw opacity-100">
              <h3 className="text-large text-body-bold">Branding</h3>
              <div className="vector-wiw second w-embed">{brandingSvg}</div>
              <div className="body-medium">{services[0].description}</div>
            </div>
          </div>

          {/* Web Design Card */}
          <div className="wrap-card-wiw second">
            <div className="card-wiw second opacity-100">
              <h3 className="text-large text-body-bold">Web Design</h3>
              <div className="vector-wiw third w-embed">{designSvg}</div>
              <div className="body-medium">{services[1].description}</div>
            </div>
          </div>

          {/* Development Card */}
          <div className="wrap-card-wiw third">
            <div className="card-wiw third opacity-100">
              <h3 className="text-large text-body-bold">Development</h3>
              <div className="vector-wiw first w-embed">{devSvg}</div>
              <div className="body-medium">
                Clean, scalable builds in{' '}
                <a href="https://webflow.com/" target="_blank" rel="noopener noreferrer" className="link-text">
                  Webflow
                </a>{' '}
                that give you speed, control, and freedom to grow without technical headaches.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="wrap-tech"
        >
          <Tag text="our tech stack" variant="base" />
          <div className="master-marquee logos">
            <div className="tech-stack flex flex-wrap items-center justify-center gap-6 sm:gap-8 max-w-[740px] mx-auto py-4">
              {techStack.map((item) => (
                <img
                  key={item.name}
                  src={item.src}
                  loading="lazy"
                  alt={item.name}
                  className={`image-tech-stack ${item.name === 'GSAP' ? 'gsap' : ''} h-8 sm:h-9 object-contain`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
