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

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1, // Trigger as soon as 10% is visible
      rootMargin: '0px 0px -50px 0px' // Offset slightly to ensure user sees the start of animation
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Select all animation classes
    const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-up, .reveal-scale, .reveal-blur, .reveal-rotate');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [currentPage]);

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