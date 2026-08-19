'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Tag from '../ui/Tag';
import Button from '../ui/Button';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  const playSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
    </svg>
  );

  return (
    <section id="testimonials" className="section testimonials-home py-16 relative">
      <div className="w-layout-blockcontainer main-container w-container">
        {/* Centered Header Block */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="headline-testimonials-home-a flex flex-col items-center text-center gap-4 mb-12"
        >
          <Tag text="client success stories" variant="depth" />
          <h2 className="no-margins text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Hear from those who have worked with us
          </h2>
          <div className="pt-2">
            <Button href="https://calendly.com/blask-agency/discovery" text="Book an intro call" variant="main" />
          </div>
        </motion.div>

        {/* Full-Bleed Portrait Cards Slider */}
        <div className="team-slider_component relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1.2}
            spaceBetween={20}
            loop={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            navigation={{
              nextEl: '.team-slider_btn_element.is-next',
              prevEl: '.team-slider_btn_element.is-prev',
            }}
            breakpoints={{
              480: { slidesPerView: 1.8, spaceBetween: 20 },
              768: { slidesPerView: 2.5, spaceBetween: 24 },
              1024: { slidesPerView: 3.2, spaceBetween: 24 },
              1280: { slidesPerView: 3.8, spaceBetween: 24 },
            }}
            className="pb-6"
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id} className="h-full">
                <div className="team-slider_card_wrap h-[460px] sm:h-[500px] relative rounded-2xl overflow-hidden group cursor-pointer border border-white/10 shadow-2xl">
                  <div
                    className="team-slider_card_content w-full h-full flex flex-col justify-between p-6 relative z-10"
                    onClick={() => item.videoUrl && setActiveVideo(item.videoUrl)}
                  >
                    {/* Top Company Logo */}
                    <div className="w-full flex justify-center items-center h-10">
                      <img
                        src={item.companyLogo}
                        alt={`${item.author} company logo`}
                        className="team-slider-company-logo max-h-7 object-contain"
                      />
                    </div>

                    {/* Background Avatar Image */}
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="team-slider_card-image absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="team-slider-gradient-overlay absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>

                    {/* Center Play Button for Video Card */}
                    {item.videoUrl && (
                      <div className="play-btn absolute inset-0 m-auto w-12 h-12 text-white flex items-center justify-center z-20 group-hover:scale-110 transition-transform">
                        {playSvg}
                      </div>
                    )}

                    {/* Bottom Quote & Author Details */}
                    <div className="team-slider-lower-quote relative z-20 space-y-3 text-left">
                      <p className="team-slider_card_bio text-white text-xs sm:text-sm font-normal leading-relaxed drop-shadow-md">
                        {item.quote}
                      </p>
                      <div className="team-slider-position-wrap pt-1">
                        <div className="team-slider_card_bio font-bold text-white text-sm sm:text-base">
                          {item.author}
                        </div>
                        <div className="text-xs text-gray-300 font-medium opacity-90">
                          {item.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Centered Controls Below Cards */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button className="team-slider_btn_element is-prev w-12 h-12 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="team-slider_btn_element is-next w-12 h-12 rounded-xl bg-[#121212] border border-white/10 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 shadow-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Vimeo Video Lightbox Modal */}
      {activeVideo && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-black border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 text-white bg-black/60 hover:bg-black border border-white/20 rounded-lg p-2.5 z-20 transition-colors"
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="aspect-video w-full">
              <iframe
                src={activeVideo}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
