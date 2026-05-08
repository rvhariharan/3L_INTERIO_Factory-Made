import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import PageHeader from './components/PageHeader';
import { ViewType } from './types';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services'));
const WhyChooseUs = lazy(() => import('./components/WhyChooseUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Partners = lazy(() => import('./components/Partners'));
const Projects = lazy(() => import('./components/Projects'));
const Founder = lazy(() => import('./components/Founder'));
const SEOSection = lazy(() => import('./components/SEOSection'));
const CTA = lazy(() => import('./components/CTA'));
const CoreValues = lazy(() => import('./components/CoreValues'));
const Process = lazy(() => import('./components/Process'));
const ServicesDetailed = lazy(() => import('./components/ServicesDetailed'));
const OurMaterial = lazy(() => import('./components/OurMaterial'));
const Comparison = lazy(() => import('./components/Comparison'));
const QualityStandards = lazy(() => import('./components/QualityStandards'));
const ProjectsGallery = lazy(() => import('./components/ProjectsGallery'));
const ContactPage = lazy(() => import('./components/ContactPage'));

const LoadingFallback = () => (
  <div className="flex flex-col items-center justify-center min-h-[60vh]">
    <div className="w-16 h-16 border-4 border-gray-200 border-t-[#FFC107] border-l-black rounded-full animate-spin mb-4"></div>
    <p className="text-gray-900 font-bold uppercase tracking-wider text-sm">Loading...</p>
  </div>
);

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleNavigate = (view: ViewType, sectionId?: string) => {
    setCurrentView(view);

    // If navigating to a specific section on the home page
    if (view === 'home' && sectionId && sectionId !== 'home') {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header currentView={currentView} onNavigate={handleNavigate} />

      <main>
        <Suspense fallback={<LoadingFallback />}>
          {currentView === 'home' && (
            <>
              <Hero />
              <Services />
              {/* WhyChooseUs moved to dedicated page for streamlined home */}
              <Projects />
              <Partners />
              <SEOSection />
              <CTA />
            </>
          )}

          {currentView === 'about' && (
            <>
              <PageHeader
                title="Our Legacy"
                subtitle="Engineering Artistry"
                backgroundImage="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop"
              />
              <About />
              <CoreValues />
              <Founder />
              <CTA />
            </>
          )}

          {currentView === 'services' && (
            <>
              <PageHeader
                title="Our Expertise"
                subtitle="Tailored to Perfection"
                backgroundImage="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
              />
              <ServicesDetailed />
              <OurMaterial />
              <Process />
              <CTA />
            </>
          )}

          {currentView === 'why-us' && (
            <>
              <PageHeader
                title="Why Choose Us"
                subtitle="The Engineering Advantage"
                backgroundImage="/img/Carpenter_Cutting_Wood_.jpg"
                bgPosition="bottom"
              />
              <WhyChooseUs />
              <Comparison />
              <QualityStandards />
              <CTA />
            </>
          )}

          {currentView === 'projects' && (
            <>
              <PageHeader
                title="Our Portfolio"
                subtitle="Executed with Precision"
                backgroundImage="/img/Carpenter_Cutting_Wood_.jpg"
                bgPosition="bottom"
              />
              <ProjectsGallery />
              <CTA />
            </>
          )}

          {currentView === 'contact' && (
            <>
              <PageHeader
                title="Contact Us"
                subtitle="Get In Touch"
                backgroundImage="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
              />
              <ContactPage />
            </>
          )}
        </Suspense>
      </main>

      <Footer currentView={currentView} onNavigate={handleNavigate} />
      <ChatWidget />
    </div>
  );
}

export default App;