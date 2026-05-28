import { useEffect, useRef } from 'react';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CoreTechSection } from './components/CoreTechSection';
import { PipelineSection } from './components/PipelineSection';
import { TeamSection } from './components/TeamSection';
import { AlphaPlanSection } from './components/AlphaPlanSection';

export default function App() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom > 0;
        if (isVisible) {
          section.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={scrollContainerRef}
      className="min-h-screen bg-gradient-to-b from-[#0a0a0f] via-[#0f0f19] to-[#0a0a0f] text-foreground overflow-x-hidden"
    >
      {/* Animated background grid */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(124,58,237,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.05)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none" />

      <HeroSection />
      <AboutSection />
      <CoreTechSection />
      <PipelineSection />
      <TeamSection />
      <AlphaPlanSection />
    </div>
  );
}