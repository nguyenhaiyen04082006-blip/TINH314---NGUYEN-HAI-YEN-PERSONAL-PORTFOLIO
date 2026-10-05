import React, { useState } from 'react';
import { Menu, X, FileText, Send, Waves } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface NavbarProps {
  activePage: string;
  onNavigate: (pageId: string) => void;
  onOpenCV: () => void;
  viewMode: 'pages' | 'scroll';
  onToggleViewMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  onNavigate,
  onOpenCV,
  viewMode,
  onToggleViewMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'career', label: 'Career Vision' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass-nav transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-4">
        {/* Zone 1: Single text element wordmark in display face (Compliant with Top Bar Contract) */}
        <button
          onClick={() => handleNavClick('hero')}
          className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 hover:text-teal-700 transition-colors flex items-center gap-2 text-left cursor-pointer group"
        >
          <span className="p-1.5 rounded-lg bg-teal-500/10 text-teal-700 group-hover:bg-teal-500/20 transition-colors">
            <Waves className="w-5 h-5 text-teal-600" />
          </span>
          <span className="font-serif tracking-normal text-slate-900 group-hover:text-teal-800 transition-colors">
            {PROFILE_DATA.name}
          </span>
        </button>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-600">
          {navLinks.map((link) => {
            const isActive = activePage === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors whitespace-nowrap cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-teal-700 font-semibold'
                    : 'text-slate-600 hover:text-teal-600'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-teal-600 rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onToggleViewMode}
            title="Toggle between presentation slides mode and scrollable page mode"
            className="px-3 py-1.5 text-xs font-medium text-teal-800 bg-teal-50 hover:bg-teal-100 rounded-lg transition-colors border border-teal-200 cursor-pointer whitespace-nowrap"
          >
            {viewMode === 'pages' ? 'Full Page View' : 'Slide Mode'}
          </button>

          <button
            onClick={onOpenCV}
            className="px-3.5 py-2 text-xs font-semibold text-teal-800 bg-teal-50 hover:bg-teal-100 border border-teal-200/80 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-xs"
          >
            <FileText className="w-3.5 h-3.5 text-teal-600" />
            <span>View CV</span>
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="px-4 py-2 text-xs font-semibold text-white bg-teal-700 hover:bg-teal-800 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Contact</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenCV}
            className="p-2 text-xs font-medium text-teal-800 bg-teal-50 rounded-lg"
            title="View CV"
          >
            <FileText className="w-4 h-4 text-teal-700" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-700 hover:text-teal-700 hover:bg-teal-50/50 rounded-lg transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-teal-100 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 shadow-xl">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-teal-600 text-white'
                      : 'text-slate-700 hover:bg-teal-50 hover:text-teal-700'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-3 mt-2 border-t border-teal-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  onToggleViewMode();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-xs font-medium text-teal-800 bg-teal-50 rounded-lg"
              >
                Switch to {viewMode === 'pages' ? 'Full Page View' : 'Slide Mode'}
              </button>
              <button
                onClick={() => {
                  onOpenCV();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-xs font-semibold text-slate-800 hover:bg-slate-100 rounded-lg flex items-center gap-2"
              >
                <FileText className="w-4 h-4 text-teal-600" />
                View Detailed Resume / CV
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
