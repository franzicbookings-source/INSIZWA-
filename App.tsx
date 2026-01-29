
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { AboutPage } from './pages/AboutPage';
import { ProgramsPage } from './pages/ProgramsPage';
import { EventsPage } from './pages/EventsPage';
import { InvolvedPage } from './pages/InvolvedPage';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          // Once animated, we can stop observing it
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Watch all elements with reveal classes
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]); // Re-run when page changes

  // Smooth scroll to top on page change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'programs':
        return <ProgramsPage />;
      case 'events':
        return <EventsPage />;
      case 'involved':
        return <InvolvedPage />;
      default:
        return <Home onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="flex-grow pt-20">
        {renderPage()}
      </main>

      <Footer />
    </div>
  );
};

export default App;
