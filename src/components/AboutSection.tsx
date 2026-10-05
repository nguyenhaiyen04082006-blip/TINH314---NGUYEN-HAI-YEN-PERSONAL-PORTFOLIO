import React from 'react';
import { User, Quote, CheckCircle, HeartHandshake, Compass, GraduationCap } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface AboutSectionProps {
  onNextSection?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNextSection }) => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-gradient-to-b from-teal-50/50 via-sky-50/30 to-white relative overflow-hidden">
      {/* Decorative Sea-Breeze Atmospheric Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-200/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Natural Editorial Title */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-teal-700 mb-2">
            <span>02</span>
            <span aria-hidden="true">·</span>
            <span>Profile & Persona</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            ABOUT ME
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A comprehensive look at my identity, academic focus at Foreign Trade University, core values, and life philosophy.
          </p>
        </div>

        {/* 2-Column Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Academic Credentials & Quote */}
          <div className="lg:col-span-5 space-y-6">
            {/* Academic Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-teal-100 shadow-sm space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-serif">
                    Academic Identity
                  </h3>
                  <p className="text-xs text-slate-500">Foreign Trade University</p>
                </div>
              </div>

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-xs font-mono uppercase tracking-wider text-teal-800 font-medium">
                    Full Name
                  </dt>
                  <dd className="text-base font-semibold text-slate-900 mt-0.5">
                    {PROFILE_DATA.name}
                  </dd>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-teal-800 font-medium">
                      Class Group
                    </dt>
                    <dd className="text-sm font-semibold text-slate-800 mt-0.5">
                      {PROFILE_DATA.classGroup}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-xs font-mono uppercase tracking-wider text-teal-800 font-medium">
                      Cohort
                    </dt>
                    <dd className="text-sm font-semibold text-slate-800 mt-0.5">
                      {PROFILE_DATA.cohort}
                    </dd>
                  </div>
                </div>

                <div>
                  <dt className="text-xs font-mono uppercase tracking-wider text-teal-800 font-medium">
                    Major / Specialization
                  </dt>
                  <dd className="text-sm font-semibold text-teal-900 mt-0.5">
                    {PROFILE_DATA.major}
                  </dd>
                  <p className="text-xs text-slate-500 mt-1">
                    Faculty of International Economics, specializing in macro-trade structures, multilateral tariffs, and cross-border commercial flows.
                  </p>
                </div>
              </dl>
            </div>

            {/* Exact Favourite Quote Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-teal-900 to-slate-900 text-white shadow-md relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 text-teal-400/10 pointer-events-none">
                <Quote className="w-36 h-36" />
              </div>
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono text-teal-300 uppercase tracking-widest">
                  <Quote className="w-4 h-4 text-teal-400" />
                  <span>Favourite Quote</span>
                </div>
                <blockquote className="text-xl sm:text-2xl font-serif italic text-teal-50 leading-relaxed">
                  “{PROFILE_DATA.favouriteQuote}”
                </blockquote>
                <div className="pt-2 border-t border-teal-500/30 flex items-center justify-between text-xs text-teal-200">
                  <span className="font-semibold">{PROFILE_DATA.quoteAuthor}</span>
                  <span className="text-[11px] opacity-80">Guiding Philosophy</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Self-Assessment vs Others' Assessment */}
          <div className="lg:col-span-7 space-y-6">
            {/* Comparative Assessment Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white border border-teal-100 shadow-sm space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Dual-Perspective Character Blueprint
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  How I steer my own principles versus how peers and teammates perceive my presence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Self-Assessment */}
                <div className="p-5 rounded-xl bg-teal-50/60 border border-teal-200/70 space-y-3">
                  <div className="flex items-center gap-2 text-teal-800 font-semibold text-sm">
                    <CheckCircle className="w-4 h-4 text-teal-600" />
                    <span>Self-Assessment</span>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    Internal standards & personal compass:
                  </p>
                  <ul className="space-y-2 text-sm">
                    {PROFILE_DATA.selfAssessment.map((trait, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-600" />
                        <span className="font-medium">{trait}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 pt-2 border-t border-teal-200/50 leading-relaxed">
                    Committed to taking ownership of every project, analyzing bottlenecks strategically, and operating with transparent honesty.
                  </p>
                </div>

                {/* Others' Assessment */}
                <div className="p-5 rounded-xl bg-sky-50/60 border border-sky-200/70 space-y-3">
                  <div className="flex items-center gap-2 text-sky-800 font-semibold text-sm">
                    <HeartHandshake className="w-4 h-4 text-sky-600" />
                    <span>Others’ Assessment</span>
                  </div>
                  <p className="text-xs text-slate-600 italic">
                    How mentors and team members view me:
                  </p>
                  <ul className="space-y-2 text-sm">
                    {PROFILE_DATA.peerAssessment.map((trait, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                        <span className="font-medium">{trait}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs text-slate-500 pt-2 border-t border-sky-200/50 leading-relaxed">
                    Always ready to uplift teammates during high-pressure exam seasons, share academic resources, and foster calm collaboration.
                  </p>
                </div>
              </div>

              {/* Personal Synthesis Narrative */}
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200/70 space-y-2 text-sm text-slate-700 leading-relaxed">
                <h4 className="font-semibold text-slate-900 flex items-center gap-2 text-sm">
                  <Compass className="w-4 h-4 text-teal-600" />
                  <span>My Journey & Worldview</span>
                </h4>
                <p>
                  Growing up in a dedicated military household taught me that discipline is freedom. At Foreign Trade University, I channel this ethic into analyzing how global supply chains can become more inclusive and sustainable.
                </p>
                <p className="text-xs text-slate-500">
                  Whether leading academic debate sessions, researching global trade corridors, or studying cargo shipping lanes, I strive to embody the timeless wisdom that every grand milestone is constructed through consistent daily effort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
