import React, { useState } from 'react';
import { Sparkles, Award, CheckCircle2, BookOpen, Layers, Laptop, MessageSquare, RefreshCw } from 'lucide-react';
import { IELTS_CREDENTIALS } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeIeltsTab, setActiveIeltsTab] = useState<'all' | 'listening' | 'reading' | 'writing' | 'speaking'>('all');

  const ieltsBreakdown = [
    {
      skill: 'Listening',
      score: IELTS_CREDENTIALS.listening,
      description: 'Flawless comprehension of diverse international accents, rapid academic lectures, and nuance recognition.',
      keyStrengths: 'Note-taking speed, identifying implicit speaker stances, zero confusion on distractor cues.'
    },
    {
      skill: 'Reading',
      score: IELTS_CREDENTIALS.reading,
      description: 'Flawless 9.0 band mastery: swift scanning of scientific journals, international trade regulations, and dense economic reports.',
      keyStrengths: 'Dissecting complex argumentative structures, true/false/not given precision, advanced vocabulary synthesis.'
    },
    {
      skill: 'Writing',
      score: IELTS_CREDENTIALS.writing,
      description: 'Structured analysis of complex data graphs (Task 1) and balanced analytical argumentative essays (Task 2).',
      keyStrengths: 'Cohesion & coherence, rich academic collocations, clear thesis formulation, data accuracy.'
    },
    {
      skill: 'Speaking',
      score: IELTS_CREDENTIALS.speaking,
      description: 'Confident conversational fluency, spontaneous articulation on geopolitical and economic themes, and natural interactive flow.',
      keyStrengths: 'Idiomatic fluency, appropriate discourse markers, clear pronunciation with natural intonation.'
    },
  ];

  return (
    <section id="skills" className="py-20 lg:py-24 bg-white relative overflow-hidden">
      {/* Background radial sea glow */}
      <div className="absolute inset-0 bg-sea-radial pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-teal-700 mb-2">
            <span>03</span>
            <span aria-hidden="true">·</span>
            <span>Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            SKILLS AND ATTITUDES
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            A balanced integration of linguistic mastery, analytical office competencies, and a humble, collaborative growth mindset.
          </p>
        </div>

        {/* Featured Lingual Mastery Card: 8.0 IELTS Certificate */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white shadow-xl border border-teal-500/20 relative overflow-hidden">
          {/* Subtle water ripple background glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-teal-500/20">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-teal-500/20 border border-teal-400/40 text-teal-300">
                  <Award className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-teal-300 uppercase tracking-widest">
                    <span>Lingual Skill Credentials</span>
                    <span aria-hidden="true">·</span>
                    <span>Official Certification</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-serif text-white">
                    8.0 IELTS Academic Certificate
                  </h3>
                </div>
              </div>

              {/* CEFR Level Text */}
              <div className="flex items-center gap-3 text-xs sm:text-sm text-teal-200">
                <span className="font-semibold text-white">CEFR: C1 Advanced User</span>
                <span aria-hidden="true" className="opacity-40">·</span>
                <span className="text-slate-300">Certified for Global Academia & Trade</span>
              </div>
            </div>

            {/* Score Grid with Tabular Numerals */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-6">
              {/* Overall Score Highlight */}
              <div className="col-span-2 lg:col-span-1 p-5 rounded-2xl bg-gradient-to-b from-teal-500/20 to-teal-700/20 border border-teal-400/40 flex flex-col justify-between">
                <span className="text-xs uppercase tracking-wider text-teal-300 font-mono font-medium">
                  Overall Band
                </span>
                <div className="my-2">
                  <span className="text-5xl font-black font-mono tabular-nums text-white">
                    8.0
                  </span>
                  <span className="text-teal-300 text-sm ml-1 font-mono">/ 9.0</span>
                </div>
                <span className="text-[11px] text-teal-200 leading-tight">
                  Top 2% of global test-takers worldwide
                </span>
              </div>

              {/* Individual sub-skills */}
              {ieltsBreakdown.map((item) => (
                <div
                  key={item.skill}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-teal-400/40 transition-colors flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between text-xs text-teal-200">
                    <span className="font-medium">{item.skill}</span>
                    <span className="text-lg font-bold font-mono tabular-nums text-white">
                      {item.score.toFixed(1)}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="mt-3 w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-teal-400 to-cyan-300 h-full rounded-full"
                      style={{ width: `${(item.score / 9.0) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid: Soft Skills, Technical Skills, Attitude */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1: Soft Skills */}
          <div className="p-6 sm:p-7 rounded-2xl bg-teal-50/40 border border-teal-100 hover:border-teal-200 transition-all shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100/80 text-teal-700 flex items-center justify-center">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Soft Skills
              </h3>
              <p className="text-xs text-slate-500">
                Interpersonal and organizational capabilities honed through high-paced university projects.
              </p>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="p-3 rounded-xl bg-white border border-teal-100/80">
                <div className="font-semibold text-slate-900">Adaptability Skill</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Swiftly navigating dynamic project scopes, changing deadlines, and multicultural teamwork.
                </div>
              </li>
              <li className="p-3 rounded-xl bg-white border border-teal-100/80">
                <div className="font-semibold text-slate-900">Communication Skill</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Articulating technical economic models and trade policies clearly to diverse audiences.
                </div>
              </li>
              <li className="p-3 rounded-xl bg-white border border-teal-100/80">
                <div className="font-semibold text-slate-900">Collaborative Skill</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Synthesizing distinct viewpoints into unified team consensus and shared ownership.
                </div>
              </li>
            </ul>

            <div className="text-[11px] text-teal-800 font-medium pt-2">
              Proactively tested across 10+ university team cases
            </div>
          </div>

          {/* Pillar 2: Technical Skills */}
          <div className="p-6 sm:p-7 rounded-2xl bg-sky-50/40 border border-sky-100 hover:border-sky-200 transition-all shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100/80 text-sky-700 flex items-center justify-center">
                <Laptop className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Technical Skills
              </h3>
              <p className="text-xs text-slate-500">
                Essential office information tools, trade analysis software, and quantitative modeling.
              </p>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="p-3 rounded-xl bg-white border border-sky-100/80">
                <div className="font-semibold text-slate-900">Basic Office Information Skills</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Advanced spreadsheet formulas (VLOOKUP, XLOOKUP, Pivot Tables) for trade tariff modeling.
                </div>
              </li>
              <li className="p-3 rounded-xl bg-white border border-sky-100/80">
                <div className="font-semibold text-slate-900">Professional Presentation Design</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Structuring executive slide decks in PowerPoint and Canva with crisp visual communication.
                </div>
              </li>
              <li className="p-3 rounded-xl bg-white border border-sky-100/80">
                <div className="font-semibold text-slate-900">Trade Documentation & Data</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Drafting commercial invoices, packing lists, bill of lading checks, and Incoterms contracts.
                </div>
              </li>
            </ul>

            <div className="text-[11px] text-sky-800 font-medium pt-2">
              Proficient in Microsoft Office 365, Google Workspace & Canva
            </div>
          </div>

          {/* Pillar 3: Attitude & Growth Mindset */}
          <div className="p-6 sm:p-7 rounded-2xl bg-cyan-50/40 border border-cyan-100 hover:border-cyan-200 transition-all shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-100/80 text-cyan-800 flex items-center justify-center">
                <RefreshCw className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                Attitudes & Mindset
              </h3>
              <p className="text-xs text-slate-500">
                The non-negotiable mental tenets that guide my work ethics and interpersonal conduct.
              </p>
            </div>

            <ul className="space-y-3 text-sm">
              <li className="p-3 rounded-xl bg-white border border-cyan-100/80">
                <div className="font-semibold text-slate-900">Progressive Spirit</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Continuously seeking self-improvement, constructive criticism, and expanding professional boundaries.
                </div>
              </li>
              <li className="p-3 rounded-xl bg-white border border-cyan-100/80">
                <div className="font-semibold text-slate-900">Respect & Active Listening</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  “I respect and willingly listen as well as learn from others” — honoring diverse perspectives.
                </div>
              </li>
              <li className="p-3 rounded-xl bg-white border border-cyan-100/80">
                <div className="font-semibold text-slate-900">Humility & Lifelong Learning</div>
                <div className="text-xs text-slate-600 mt-0.5">
                  Treating every mentor, professor, and peer encounter as a masterclass in professional growth.
                </div>
              </li>
            </ul>

            <div className="text-[11px] text-cyan-800 font-medium pt-2">
              Grounded in accountability and intellectual honesty
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
