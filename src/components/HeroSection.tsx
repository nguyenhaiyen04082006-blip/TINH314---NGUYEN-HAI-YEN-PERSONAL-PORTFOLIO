import React from 'react';
import { ArrowRight, Compass, Award, Anchor, Sparkles, BookOpen, Quote, Shield, GraduationCap } from 'lucide-react';
import { PROFILE_DATA, IELTS_CREDENTIALS } from '../data/portfolioData';

// Background inspired by Canva template EAGoDbccYHA: Sky Blue Dreamy Clouds
import dreamyCloudsBg from '../assets/images/dreamy_sky_blue_clouds_1791204037579.jpg';

interface HeroSectionProps {
  onExploreClick: () => void;
  onCareerClick: () => void;
  onOpenCV: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  onCareerClick,
  onOpenCV,
}) => {
  return (
    <section id="hero" className="relative min-h-[calc(100vh-4.5rem)] flex items-center justify-center overflow-hidden py-14 lg:py-20">
      {/* Background: Canva EAGoDbccYHA Inspo — Sky Blue Dreamy Clouds */}
      <div className="absolute inset-0 z-0">
        <img
          src={dreamyCloudsBg}
          alt="Dreamy sky blue clouds background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center filter brightness-100"
        />
        {/* Soft Dreamy Sky Blue & Cloud Mist Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/65 via-sky-900/50 to-slate-900/70 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-radial from-transparent via-sky-900/20 to-sky-950/60 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Top Decorative Header Row (Art Deco knot inspired by Canva design) */}
        <div className="flex items-center justify-between mb-10 pb-4 border-b border-white/15">
          <div className="flex items-center gap-3">
            {/* Custom SVG Four-Petal Art Deco Knot as seen in Canva page 1 */}
            <div className="w-10 h-10 rounded-xl bg-sky-400/20 border border-sky-300/40 flex items-center justify-center text-sky-200 shadow-sm backdrop-blur-md">
              <svg viewBox="0 0 40 40" className="w-6 h-6 stroke-sky-200 fill-none" strokeWidth="1.75">
                <circle cx="20" cy="20" r="14" strokeDasharray="3 3" opacity="0.6" />
                <path d="M20 6 C20 15, 15 20, 6 20 C15 20, 20 25, 20 34 C20 25, 25 20, 34 20 C25 20, 20 15, 20 6 Z" fill="rgba(186, 230, 253, 0.25)" />
                <circle cx="20" cy="20" r="3" fill="#bae6fd" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-sky-200 font-semibold font-mono">
                FTU Cohort 63 · English 06
              </p>
              <p className="text-xs text-sky-100/90 font-medium">
                Foreign Trade University Hanoi
              </p>
            </div>
          </div>

          {/* Unboxed Metadata (Zero-Pill Compliance) */}
          <div className="hidden sm:flex items-center gap-2.5 text-xs text-sky-200 font-medium">
            <span>Faculty of Int. Economics</span>
            <span aria-hidden="true" className="opacity-50">·</span>
            <span>IELTS 8.0</span>
            <span aria-hidden="true" className="opacity-50">·</span>
            <span>Global Supply Chain & Trade</span>
          </div>
        </div>

        {/* Expansive Hero Layout Without Portrait (Portrait Eliminated from 1st Page as Requested) */}
        <div className="space-y-10">
          {/* Main Title & Introductory Banner */}
          <div className="max-w-4xl space-y-5 text-white">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs text-sky-200 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-sky-300" />
              <span>Personal Portfolio · Academic & Professional Roadmap</span>
            </div>

            {/* High-Impact Display Name in Outfit Display: Nguyen Hai Yen */}
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-white leading-none font-sans drop-shadow-md">
              NGUYEN <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-200 via-teal-200 to-cyan-100">
                HAI YEN
              </span>
            </h1>

            {/* Exact Quote from Canva Slide 1 */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white/12 backdrop-blur-md border border-white/20 shadow-xl space-y-3">
              <p className="text-xl sm:text-2xl font-light text-white leading-relaxed font-serif italic">
                “Hello, I’m Nguyen Hai Yen — A third-year student at Foreign Trade University, majoring in International Business Economics.”
              </p>
              <p className="text-sm sm:text-base text-sky-100 leading-relaxed font-sans">
                Driven by a deep sense of patriotism, I am dedicated to mastering international logistics and global supply chain strategies to elevate Vietnamese agricultural and seafood exports to the global stage.
              </p>
            </div>
          </div>

          {/* 4-Column Bento Feature Deck (Fills the Hero Frame with Depth and Elegance) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1: IELTS Credentials */}
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-sky-300/40 transition-all text-white flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-semibold flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-sky-300" />
                  <span>IELTS Certified</span>
                </span>
                <span className="text-[10px] font-mono text-sky-200 bg-sky-500/20 px-2 py-0.5 rounded">
                  CEFR C1
                </span>
              </div>
              <div>
                <div className="text-3xl font-extrabold font-mono tabular-nums text-white">
                  {IELTS_CREDENTIALS.overall.toFixed(1)}
                  <span className="text-sm font-normal text-sky-200 ml-1 font-mono">/ 9.0</span>
                </div>
                <div className="text-xs text-sky-100 mt-1 font-mono">
                  L: 8.5 · R: 9.0 · W: 7.5 · S: 6.5
                </div>
              </div>
              <p className="text-[11px] text-sky-200/90 leading-tight pt-2 border-t border-white/10">
                Flawless academic comprehension and cross-border commercial communication.
              </p>
            </div>

            {/* Card 2: Academic Program */}
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-sky-300/40 transition-all text-white flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-semibold flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-sky-300" />
                  <span>University</span>
                </span>
                <span className="text-[10px] font-mono text-sky-200 bg-sky-500/20 px-2 py-0.5 rounded">
                  Class Eng 06
                </span>
              </div>
              <div>
                <div className="text-xl font-bold font-serif text-white">
                  FTU Hanoi
                </div>
                <div className="text-xs text-sky-100 mt-0.5">
                  Int. Business Economics
                </div>
              </div>
              <p className="text-[11px] text-sky-200/90 leading-tight pt-2 border-t border-white/10">
                Faculty of International Economics, studying multilateral tariffs & global trade policies.
              </p>
            </div>

            {/* Card 3: Strategic Career Goal */}
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-sky-300/40 transition-all text-white flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-semibold flex items-center gap-1.5">
                  <Anchor className="w-4 h-4 text-sky-300" />
                  <span>Career Ambition</span>
                </span>
                <span className="text-[10px] font-mono text-sky-200 bg-sky-500/20 px-2 py-0.5 rounded">
                  Trade & Logistics
                </span>
              </div>
              <div>
                <div className="text-xl font-bold font-serif text-white">
                  Global Supply Chain
                </div>
                <div className="text-xs text-sky-100 mt-0.5">
                  Empowering VN Farmers
                </div>
              </div>
              <p className="text-[11px] text-sky-200/90 leading-tight pt-2 border-t border-white/10">
                Expanding worldwide corridors for premium Vietnamese rice, coffee, and seafood.
              </p>
            </div>

            {/* Card 4: Life Philosophy */}
            <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 hover:border-sky-300/40 transition-all text-white flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-sky-300 font-semibold flex items-center gap-1.5">
                  <Quote className="w-4 h-4 text-sky-300" />
                  <span>Motto</span>
                </span>
                <span className="text-[10px] font-mono text-sky-200">
                  Lao Tzu
                </span>
              </div>
              <div>
                <blockquote className="text-sm font-serif italic text-white leading-snug">
                  “A journey of a thousand miles begins with a single step.”
                </blockquote>
              </div>
              <p className="text-[11px] text-sky-200/90 leading-tight pt-2 border-t border-white/10">
                Steered by accountability, honesty, strategic vision, and progressive learning.
              </p>
            </div>
          </div>

          {/* Interactive Primary CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreClick}
              className="px-7 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-sky-400 via-teal-300 to-cyan-300 hover:from-sky-300 hover:to-cyan-200 text-slate-950 shadow-lg shadow-sky-950/30 hover:shadow-sky-400/30 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Profile & Persona</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onCareerClick}
              className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/12 hover:bg-white/20 text-white border border-white/25 backdrop-blur-sm transition-all cursor-pointer flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-sky-300" />
              <span>Career Ambition & Vietnam Export</span>
            </button>

            <button
              onClick={onOpenCV}
              className="px-5 py-3.5 rounded-xl font-medium text-xs text-sky-200 hover:text-white hover:bg-white/10 border border-transparent hover:border-white/20 transition-all cursor-pointer"
            >
              Review Full Curriculum Vitae
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
