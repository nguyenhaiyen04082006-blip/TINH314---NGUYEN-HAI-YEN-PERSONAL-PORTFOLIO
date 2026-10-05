/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { SkillsSection } from './components/SkillsSection';
import { CareerSection } from './components/CareerSection';
import { ContactSection } from './components/ContactSection';
import { PageViewControls } from './components/PageViewControls';
import { CVModal } from './components/CVModal';
import { Footer } from './components/Footer';

const PAGE_LIST = [
  { id: 'hero', title: 'Home' },
  { id: 'about', title: 'About Me' },
  { id: 'skills', title: 'Skills & IELTS' },
  { id: 'career', title: 'Career Vision' },
  { id: 'contact', title: 'Contact' },
];

export default function App() {
  const [currentPageIndex, setCurrentPageIndex] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'pages' | 'scroll'>('scroll');
  const [isCVModalOpen, setIsCVModalOpen] = useState<boolean>(false);

  const activePageId = PAGE_LIST[currentPageIndex]?.id || 'hero';

  // Keyboard navigation for slide/pages mode (Left/Right Arrow)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isCVModalOpen) return;
      if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        setCurrentPageIndex((prev) => Math.min(prev + 1, PAGE_LIST.length - 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCVModalOpen]);

  const handleNavigate = (pageId: string) => {
    const index = PAGE_LIST.findIndex((p) => p.id === pageId);
    if (index !== -1) {
      setCurrentPageIndex(index);
      if (viewMode === 'scroll') {
        const el = document.getElementById(pageId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  const handleNextPage = () => {
    if (currentPageIndex < PAGE_LIST.length - 1) {
      const nextIndex = currentPageIndex + 1;
      setCurrentPageIndex(nextIndex);
      if (viewMode === 'scroll') {
        const el = document.getElementById(PAGE_LIST[nextIndex].id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handlePrevPage = () => {
    if (currentPageIndex > 0) {
      const prevIndex = currentPageIndex - 1;
      setCurrentPageIndex(prevIndex);
      if (viewMode === 'scroll') {
        const el = document.getElementById(PAGE_LIST[prevIndex].id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleToggleViewMode = () => {
    setViewMode((prev) => (prev === 'pages' ? 'scroll' : 'pages'));
  };

  return (
    <div className="min-h-screen bg-[#f3f9fb] text-[#0f2942] flex flex-col font-sans selection:bg-teal-500/20 selection:text-teal-950">
      {/* Top Bar Navigation (3-Zone Contract) */}
      <Navbar
        activePage={activePageId}
        onNavigate={handleNavigate}
        onOpenCV={() => setIsCVModalOpen(true)}
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
      />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {viewMode === 'pages' ? (
          /* Slide / Page-by-Page Mode (Directly navigating the 6 Canva pages) */
          <div className="relative min-h-[calc(100vh-4.5rem)] flex flex-col justify-between">
            {/* Top Slide Page Header Indicator */}
            <div className="bg-teal-900/5 border-b border-teal-500/10 px-4 py-2 flex items-center justify-between text-xs text-teal-800 max-w-7xl mx-auto w-full">
              <span className="font-mono font-medium">
                Canva Presentation Page {currentPageIndex + 1} of {PAGE_LIST.length}:{' '}
                <strong>{PAGE_LIST[currentPageIndex].title}</strong>
              </span>
              <span className="hidden sm:inline text-slate-500">
                Use ← / → arrow keys or the controller below to navigate
              </span>
            </div>

            <div className="flex-1">
              {currentPageIndex === 0 && (
                <HeroSection
                  onExploreClick={() => setCurrentPageIndex(1)}
                  onCareerClick={() => setCurrentPageIndex(3)}
                  onOpenCV={() => setIsCVModalOpen(true)}
                />
              )}
              {currentPageIndex === 1 && (
                <AboutSection onNextSection={handleNextPage} />
              )}
              {currentPageIndex === 2 && <SkillsSection />}
              {currentPageIndex === 3 && <CareerSection />}
              {currentPageIndex === 4 && (
                <ContactSection onOpenCV={() => setIsCVModalOpen(true)} />
              )}
            </div>
          </div>
        ) : (
          /* Full Continuous Scroll Mode */
          <div className="space-y-0">
            <HeroSection
              onExploreClick={() => handleNavigate('about')}
              onCareerClick={() => handleNavigate('career')}
              onOpenCV={() => setIsCVModalOpen(true)}
            />
            <AboutSection onNextSection={() => handleNavigate('skills')} />
            <SkillsSection />
            <CareerSection />
            <ContactSection onOpenCV={() => setIsCVModalOpen(true)} />
          </div>
        )}
      </main>

      {/* Presentation Page View Controls Floating Toolbar */}
      <PageViewControls
        currentPageIndex={currentPageIndex}
        totalPages={PAGE_LIST.length}
        pageTitles={PAGE_LIST}
        onSelectPage={(index) => {
          setCurrentPageIndex(index);
          if (viewMode === 'scroll') {
            const el = document.getElementById(PAGE_LIST[index].id);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        onNext={handleNextPage}
        onPrev={handlePrevPage}
        viewMode={viewMode}
        onToggleViewMode={handleToggleViewMode}
      />

      {/* Editorial Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCV={() => setIsCVModalOpen(true)}
      />

      {/* Curriculum Vitae Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
      />
    </div>
  );
}
