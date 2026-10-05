import React from 'react';
import { ChevronLeft, ChevronRight, Layers, LayoutList } from 'lucide-react';

interface PageViewControlsProps {
  currentPageIndex: number;
  totalPages: number;
  pageTitles: { id: string; title: string }[];
  onSelectPage: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  viewMode: 'pages' | 'scroll';
  onToggleViewMode: () => void;
}

export const PageViewControls: React.FC<PageViewControlsProps> = ({
  currentPageIndex,
  totalPages,
  pageTitles,
  onSelectPage,
  onNext,
  onPrev,
  viewMode,
  onToggleViewMode,
}) => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 max-w-md w-[92%] sm:w-auto">
      <div className="bg-slate-900/90 text-white backdrop-blur-xl border border-teal-500/30 rounded-2xl shadow-2xl px-4 py-2.5 flex items-center justify-between gap-3">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          disabled={currentPageIndex === 0}
          aria-label="Previous Page"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Current Page Pill / Quick Jump */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5">
          {pageTitles.map((p, idx) => {
            const isActive = currentPageIndex === idx;
            return (
              <button
                key={p.id}
                onClick={() => onSelectPage(idx)}
                className={`transition-all px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  isActive
                    ? 'bg-teal-500 text-white font-semibold shadow-xs'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                title={`Jump to Page ${idx + 1}: ${p.title}`}
              >
                <span className="font-mono text-[10px] opacity-80">{`0${idx + 1}`}</span>
                <span className="hidden md:inline">{p.title}</span>
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          disabled={currentPageIndex === totalPages - 1}
          aria-label="Next Page"
          className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:hover:bg-transparent transition-colors cursor-pointer"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="h-4 w-px bg-slate-700 mx-0.5 hidden sm:block" />

        {/* View Mode Toggle */}
        <button
          onClick={onToggleViewMode}
          className="hidden sm:flex items-center gap-1 text-[11px] text-teal-300 hover:text-teal-200 transition-colors cursor-pointer px-2 py-1 rounded-md hover:bg-white/5"
          title={viewMode === 'pages' ? 'Switch to Continuous Scroll' : 'Switch to Slide Presentation'}
        >
          {viewMode === 'pages' ? (
            <>
              <LayoutList className="w-3.5 h-3.5" />
              <span>All</span>
            </>
          ) : (
            <>
              <Layers className="w-3.5 h-3.5" />
              <span>Slides</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
