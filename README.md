# 🚀 Blask Agency — Next.js 14 Web Application

A production-ready, pixel-perfect recreate of the **Blask Agency** website built with **Next.js 14 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **Swiper**.

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Tech Stack](#-tech-stack)
- [Key Features](#-key-features)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
- [Available Scripts](#-available-scripts)
- [Responsive Design Breakpoints](#-responsive-design-breakpoints)
- [Static Export](#-static-export)

---

## 🌟 Overview

This project converts the Webflow agency website (`blask.agency`) into a high-performance Next.js 14 App Router application written entirely in pure JavaScript/JSX (**No TypeScript**). 

It features smooth entrance animations, responsive grid layouts, custom carousels, video lightbox overlays, local asset optimization, and a floating call-to-action meeting widget.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, Pure JavaScript / JSX)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Webflow CSS Core System
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Carousel**: [Swiper 11](https://swiperjs.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom Webflow SVG Vector Icons
- **Fonts**: Google Fonts (`Ubuntu` & `Inter`)

---

## ✨ Key Features

### 1. 🎯 Navbar & Mobile Drawer
- Fixed glassmorphism header with logo and navigation links (`Services`, `Work`, `Process`, `User Research`).
- Slide-out mobile navigation drawer with animated hamburger menu toggle.

### 2. ⚡ Hero Section
- Dynamic headline with dual-arrow sliding CTA button (`Book an intro call`).
- Interactive 4-column screenshot showcase and 12-partner brand marquee ticker.

### 3. ⚖️ Before vs. After Comparison
- Visual comparison cards showcasing website performance and conversion improvements.

### 4. 🛠️ Services & Tech Stack
- 3 core service highlight cards (*Branding*, *Web Design*, *Development*).
- Centered **OUR TECH STACK** badge with a 10-icon tech logo grid (Figma, Webflow, Relume, GSAP, Midjourney, WordPress, Framer, Slack, Google Meet, Illustrator).

### 5. 📁 Selected Work / Case Studies
- Featured case study showcase (`GoTab`, `EssayGrader`, `Accord`, `Trireme`) with metrics and result tags.

### 6. 💬 Client Success Stories (Testimonials)
- Full-bleed portrait cards carousel powered by Swiper.
- Centered `<` `>` slide navigation controls.
- Integrated Vimeo video lightbox modal overlay for video testimonials.

### 7. 🔄 Our Process
- Responsive 2-column wireframing photo + 4-step process timeline layout (`Discovery & Strategy`, `Brand & Design`, `Development`, `Launch & Handover`).
- Adapts seamlessly across Desktop, Tablet, and Mobile.

### 8. 👥 People Behind Blask (Team / About Us)
- Team introduction text with bold domain callouts.
- Founder profile cards (*Patryk Baranowski* & *Jacek Bączkowski*) with bottom-right corner overlay badges.

### 9. 📣 CTA Section
- Full-width call-to-action section with a warm floral gradient backdrop asset (`CTA B.webp`) and backdrop blur overlay.

### 10. 📞 Scroll-Aware Meeting Widget
- Floating bottom pill container featuring glowing diamond icon (`favicon2.png`), **"Free 30-minute intro call"** label, and **"Book now →"** CTA button.
- Automatically triggers when scrolling down the page.

### 11. 🦶 Footer
- White Blask logo, tagline, company links column, LinkedIn & X (Twitter) social icons, and copyright notice.

---

## 📁 Project Architecture

```
blask-clone/
├── app/
│   ├── globals.css         # Combined Tailwind & Webflow CSS directives
│   ├── layout.jsx          # Root layout with font preloading & metadata
│   └── page.jsx            # Main page assembling all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx      # Fixed Header & Mobile Navigation Drawer
│   │   └── Footer.jsx      # Footer with social links & copyright
│   ├── sections/
│   │   ├── Hero.jsx        # Hero section & partner marquee
│   │   ├── Comparison.jsx  # Before vs After cards
│   │   ├── Services.jsx    # Services & Tech Stack grid
│   │   ├── Work.jsx        # Case studies grid
│   │   ├── Testimonials.jsx# Swiper carousel & Vimeo lightbox
│   │   ├── Process.jsx     # 4-step process timeline
│   │   ├── Team.jsx        # Founder profile cards
│   │   └── CtaSection.jsx  # Bottom call-to-action
│   └── ui/
│       ├── Button.jsx      # Dual-arrow CTA button
│       ├── MeetingWidget.jsx # Scroll-aware floating widget
│       └── Tag.jsx         # Section category badge
├── data/
│   ├── caseStudies.js      # Case studies data
│   ├── navigation.js       # Navigation links
│   ├── process.js          # Process timeline steps
│   ├── services.js         # Services & 10 tech logos
│   ├── team.js             # Team members & bio
│   └── testimonials.js     # Testimonials data & Vimeo URLs
├── public/
│   └── images/             # Optimized local image assets (.avif, .webp, .svg)
├── jsconfig.json           # Import path alias (@/*)
├── next.config.js          # Next.js static export config
├── postcss.config.js       # PostCSS plugins
├── tailwind.config.js      # Tailwind CSS custom tokens & colors
└── package.json            # Project dependencies & scripts
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js**: v18.17.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. Clone or navigate to the project directory:
   ```bash
   cd "c:\Users\D E L L\Desktop\Job Task\Indhu\blask-clone"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:3000` in your browser.

---

## 📜 Available Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `dev` | `npm run dev` | Starts local Next.js development server at `http://localhost:3000` |
| `build` | `npm run build` | Builds optimized production bundle and generates static export in `out/` |
| `start` | `npm run start` | Starts Next.js production server |
| `lint` | `npm run lint` | Runs Next.js ESLint check |

---

## 📱 Responsive Design Breakpoints

- **Mobile (`< 640px`)**: Single-column layout with 2-column tech stack grid & stacked process steps.
- **Tablet (`640px - 1024px`)**: Expanded grids with landscape process hero photo and full-width card sliders.
- **Desktop (`>= 1024px`)**: Multi-column desktop grid with sticky process photo and centered tech stack row.

---

## 📦 Static Export

This project is pre-configured for static export (`output: 'export'` in `next.config.js`). Running `npm run build` compiles the application into static HTML/CSS/JS files inside the `out/` directory, ready to be deployed to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

---

## 📄 License

Created for demonstration and portfolio development. All rights reserved by **Blask Agency**.