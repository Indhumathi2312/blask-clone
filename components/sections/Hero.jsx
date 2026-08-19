'use client';

import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Tag from '../ui/Tag';

export default function Hero() {
  const logos = [
    { name: 'Sf', src: 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7e07b8855f9f347dec1e_Sf%20logo.avif' },
    { name: 'OV', src: 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7e08b9f35449c9aa0809_OV%20logo.avif' },
    { name: 'Boson', src: 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7e08051e703aa08baa74_boson%20logo.avif' },
    { name: 'Select', src: 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7e075d5033c86907520b_select%20logo.avif' },
    { name: 'ACC', src: 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7e07db4081a0d2f516e0_acc%20logo.avif' },
    { name: 'GoTab', src: 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7e0701c977b6a5cbdd77_gotab%20logo.avif' },
    { name: 'Outfund', src: 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7e070a043aa00d425a5b_outfund%20logo.avif' },
    { name: 'Tenon', src: 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7e072938f204fd09b16d_tenon%20logo.avif' },
    { name: 'OBS', src: 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7e07d2d65e3b15a3b79b_obs%20logo.avif' },
    { name: 'HCP', src: 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7e07a117fdca36c9b2f3_hcp%20logo.avif' },
    { name: 'Noin', src: 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7e073d155a80fa95907f_noin%20logo.avif' },
    { name: 'Rally', src: 'https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7e07e348c37975bd5f9c_rally%20logo.avif' },
  ];

  return (
    <section className="section hero-home-b-section">
      <div className="w-layout-blockcontainer main-container w-container">
        {/* Headline block */}
        <motion.div
          initial={{ opacity: 0, filter: 'blur(12px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="headline-home-b"
        >
          <div className="heading-column engagement">
            <Tag text="design agency" variant="base" />
            <h1>
              Growth-driven <em>creative<br />partner</em> for tech companies
            </h1>
            <div className="max-width-600">
              <div className="body-medium">
                We turn complex products into clear, high-converting websites and interfaces - combining UX, design systems, and no-code development to help teams{' '}
                <span className="text-weight-semi-bold">launch faster and scale with confidence</span>.
              </div>
            </div>
          </div>
          <div className="button-wrap-centered">
            <Button href="https://calendly.com/blask-agency/discovery" text="Book an intro call" variant="main" />
          </div>
        </motion.div>

        {/* Hero Showcase Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="home_hero-grid-wrap"
        >
          <div className="w-layout-grid grid_home-hero">
            {/* Col 1 */}
            <div className="home_hero-img-main-wrap">
              <div className="home_hero-images-weap _1">
                <img src="/images/696b706442ef308da71a9fd1_Landing.avif" alt="Landing" className="image-home-hero" />
                <img src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b70645cab3396437a4950_hero%20shot.avif" alt="Hero shot" className="image-home-hero" />
                <img src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b706492109d16e32ab271_1%202035000234.avif" alt="Shot" className="image-home-hero" />
                <img src="/images/696b706484d5b4d2bd38e376_features.avif" alt="Features" className="image-home-hero" />
              </div>
            </div>

            {/* Col 2 */}
            <div className="home_hero-img-main-wrap">
              <div className="home_hero-images-weap _2">
                <img src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7065f98d514d7ef51836_hero%20shot-1.avif" alt="Hero shot 1" className="image-home-hero" />
                <img src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7064e0947c4ca48c6331_Frame%201948758407.avif" alt="Frame" className="image-home-hero" />
                <img src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7064b646a7a2194167a0_Frame%201948758411.avif" alt="Frame 2" className="image-home-hero" />
                <img src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b70655c5f7359cf09cd81_Frame%201948758410.avif" alt="Frame 3" className="image-home-hero" />
              </div>
            </div>

            {/* Col 3 */}
            <div className="home_hero-img-main-wrap">
              <div className="home_hero-images-weap _3">
                <img src="/images/696b7065ad6e8be6311e86a1_01-home.avif" alt="Home" className="image-home-hero" />
                <img src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b706678715bb92b203186_Frame%20178.avif" alt="Frame 178" className="image-home-hero" />
                <img src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b7064c71f35153c86d310_Group%201707478251.avif" alt="Group" className="image-home-hero" />
                <img src="/images/696b70659e49abe25657e3e5_Home.avif" alt="Home 2" className="image-home-hero" />
              </div>
            </div>

            {/* Col 4 */}
            <div className="home_hero-img-main-wrap">
              <div className="home_hero-images-weap _4">
                <img src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b706582c96b816a8412be_Case%20Studies.avif" alt="Case Studies" className="image-home-hero" />
                <img src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b70640918a451db9d2ce4_Accord%20Intelligence_Product%20Template.avif" alt="Accord" className="image-home-hero" />
                <img src="https://cdn.prod.website-files.com/6964e4809f9f167e5dc5f51d/696b706641662fa6f43c6df7_Frame%201948758409.avif" alt="Frame" className="image-home-hero" />
              </div>
            </div>
          </div>

          {/* Trusted Logos Grid */}
          <div className="home_hero-logos">
            <div className="hero-logos-warp">
              <div className="w-layout-grid grid_logos-home">
                {logos.map((logo) => (
                  <img
                    key={logo.name}
                    src={logo.src}
                    loading="lazy"
                    alt={`${logo.name} logo`}
                    className="image-logo-hero"
                  />
                ))}
              </div>
              <div className="home-trusted">
                <div className="label-master text">
                  <div className="label-small logos">
                    Trusted by 50+ tech companies around the world
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
