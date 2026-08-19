import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Comparison from '@/components/sections/Comparison';
import Services from '@/components/sections/Services';
import Work from '@/components/sections/Work';
import Testimonials from '@/components/sections/Testimonials';
import Process from '@/components/sections/Process';
import Team from '@/components/sections/Team';
import CtaSection from '@/components/sections/CtaSection';
import MeetingWidget from '@/components/ui/MeetingWidget';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white overflow-x-hidden relative">
      <Navbar />
      <div className="homepage-b">
        <Hero />
        <Comparison />
        <Services />
        <Work />
        <Testimonials />
        <Process />
        <Team />
        <CtaSection />
      </div>
      <Footer />
      <MeetingWidget />
    </main>
  );
}
