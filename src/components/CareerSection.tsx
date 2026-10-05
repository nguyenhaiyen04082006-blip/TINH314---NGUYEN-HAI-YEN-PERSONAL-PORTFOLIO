import React, { useState } from 'react';
import { Compass, Shield, Globe2, Ship, MapPin, ArrowRight, CheckCircle, TrendingUp, Anchor } from 'lucide-react';
import { VIETNAM_EXPORTS, CAREER_ROADMAP, AgriculturalExport } from '../data/portfolioData';

// Generated image of container ship sailing on turquoise sea
import maritimeImage from '../assets/images/maritime_trade_logistics_1791201314448.jpg';

export const CareerSection: React.FC = () => {
  const [selectedCommodity, setSelectedCommodity] = useState<AgriculturalExport>(VIETNAM_EXPORTS[0]);
  const [filterCategory, setFilterCategory] = useState<'all' | 'Agricultural' | 'Seafood'>('all');

  const filteredExports = filterCategory === 'all'
    ? VIETNAM_EXPORTS
    : VIETNAM_EXPORTS.filter(item => item.category === filterCategory);

  return (
    <section id="career" className="py-20 lg:py-24 bg-gradient-to-b from-white via-teal-50/40 to-sky-50/50 relative overflow-hidden">
      {/* Background Decorative Sea Flow */}
      <div className="absolute top-1/3 left-0 w-full h-96 bg-gradient-to-r from-teal-500/5 via-sky-500/5 to-cyan-500/5 -skew-y-3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-teal-700 mb-2">
            <span>04</span>
            <span aria-hidden="true">·</span>
            <span>Vision & Mission</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            CAREER GOAL
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            From patriotic roots to global supply chain leadership: empowering Vietnamese farmers and advancing national trade connectivity.
          </p>
        </div>

        {/* Story Feature: The Military Heritage & The Power of Trade */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Left Column: Authentic Personal Narrative (Exact Canva Text) */}
          <div className="lg:col-span-7 flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white border border-teal-100/90 shadow-sm space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-teal-50 text-teal-700 border border-teal-200/60">
                  <Shield className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-teal-800 font-semibold">
                    Origins & Purpose
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
                    Patriotism Grounded in Economic Power
                  </h3>
                </div>
              </div>

              {/* Exact Prose from Canva Slide */}
              <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
                <p className="p-4 rounded-2xl bg-teal-50/50 border-l-4 border-teal-600 text-slate-800 italic">
                  “My parents are both serving in the Vietnam People’s Army, so since I was just a little kid, my dad told me numerous historic stories of our country to educate me about patriotism. Thus, when I grow up, I want to make a contribution to my country.”
                </p>

                <p>
                  “One of the factors that determine the power of a nation is its economy. A prosperous economy leads to a prosperous country, and as the twenty-first century rolls out, enhancing connectivity and collaboration for mutual growth among countries has become more important than ever before. <span className="font-semibold text-teal-900">That is the reason why trades matter.</span>”
                </p>

                <p>
                  “Regarding Vietnam, thanks to strategic geographical location, Vietnam has a huge advantage in agricultural and seafood exports. Vietnam is among the world’s top exporters of rice, coffee, pepper, cashew nuts, shrimps and pangasius fish. But, I know that in my country, there are still so many potential products with high quality that could be exported worldwide.”
                </p>

                <p className="font-medium text-slate-900">
                  “As a result, my ambition is to work in the field of <span className="text-teal-700 font-bold">Logistics and Supply Chain Management</span> to help Vietnamese farmers export more and more kinds of products to every corner of the world.”
                </p>

                <p className="text-xs sm:text-sm text-teal-800 bg-teal-50 px-4 py-2.5 rounded-xl font-medium">
                  “After graduating from FTU, I aspire to devote to this field for 2-3 years before persuing my master’s degree abroad to enhance my expertise.”
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Core Specialization: Agri-Logistics & Cold Chain</span>
              <span className="font-mono text-teal-700 font-semibold">FTU · K63</span>
            </div>
          </div>

          {/* Right Column: Maritime Logistics Visual & Fast Strategic Facts */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="rounded-3xl overflow-hidden border border-teal-200/80 shadow-md relative group flex-1 min-h-[260px]">
              <img
                src={maritimeImage}
                alt="Modern container cargo vessel sailing on turquoise sea"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent p-6 flex flex-col justify-end text-white">
                <div className="flex items-center gap-2 text-xs font-mono text-teal-300 uppercase tracking-widest mb-1">
                  <Ship className="w-4 h-4 text-teal-300" />
                  <span>Maritime & Intermodal Corridors</span>
                </div>
                <h4 className="text-lg font-bold text-white font-serif">
                  Connecting Vietnam’s Produce to Global Ports
                </h4>
                <p className="text-xs text-slate-200 mt-1">
                  From deep-water hubs like Cai Mep - Thi Vai and Lach Huyen directly into transpacific and European freight routes.
                </p>
              </div>
            </div>

            {/* Quick Strategic Pillars */}
            <div className="p-6 rounded-3xl bg-white border border-teal-100 shadow-xs space-y-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
                Why Logistics & Trade Matter
              </h4>
              <div className="space-y-2.5 text-xs text-slate-600">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-800">Direct Farmer Empowerment:</strong> Cutting out redundant middlemen to increase rural profit margins.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-800">Cold Chain Integrity:</strong> Preserving post-harvest freshness from field to overseas supermarket shelves.
                  </span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-800">Geopolitical Resilience:</strong> Diversifying maritime transit lanes to safeguard national economic security.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Vietnam Agri-Export Commodities Showcase */}
        <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-white border border-teal-100 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-teal-700 uppercase tracking-wider font-semibold">
                <Globe2 className="w-4 h-4" />
                <span>National Agricultural & Seafood Landscape</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                Vietnam's Strategic Export Strengths
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Commodities highlighted in my career vision where advanced logistics can deliver transformative impact.
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-xl">
              <button
                onClick={() => setFilterCategory('all')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  filterCategory === 'all'
                    ? 'bg-white text-teal-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                All Sectors
              </button>
              <button
                onClick={() => setFilterCategory('Agricultural')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  filterCategory === 'Agricultural'
                    ? 'bg-white text-teal-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Agri-Crops
              </button>
              <button
                onClick={() => setFilterCategory('Seafood')}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors cursor-pointer ${
                  filterCategory === 'Seafood'
                    ? 'bg-white text-teal-900 shadow-xs font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Seafood & Aquaculture
              </button>
            </div>
          </div>

          {/* Commodities Horizontal Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredExports.map((item) => {
              const isSelected = selectedCommodity.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedCommodity(item)}
                  className={`p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-teal-50/70 border-teal-500 shadow-sm ring-2 ring-teal-500/20'
                      : 'bg-white hover:bg-slate-50/80 border-slate-200/80'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono text-teal-700 font-semibold">{item.category}</span>
                      <span className="text-[11px] text-slate-500 font-medium">{item.globalRank}</span>
                    </div>
                    <h4 className="text-base font-bold text-slate-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-slate-500 italic">
                      {item.vietnameseName} · {item.regions}
                    </p>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed pt-1">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-teal-700 font-medium">
                    <span>Logistics Requirement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Commodity Deep-Dive Drawer */}
          <div className="p-5 sm:p-6 rounded-2xl bg-teal-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-inner">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-teal-300">
                Supply Chain Focus · {selectedCommodity.name}
              </span>
              <h4 className="text-xl font-bold font-serif text-white">
                {selectedCommodity.vietnameseName} ({selectedCommodity.regions})
              </h4>
              <p className="text-xs sm:text-sm text-teal-100 max-w-2xl leading-relaxed">
                <span className="font-semibold text-white">Supply Chain Challenge:</span> {selectedCommodity.logisticsNeed}
              </p>
            </div>
            <div className="shrink-0 p-3 rounded-xl bg-white/10 border border-white/20 text-center">
              <div className="text-xs text-teal-200">Global Standing</div>
              <div className="text-sm font-bold text-white mt-0.5">{selectedCommodity.globalRank}</div>
            </div>
          </div>
        </div>

        {/* 4-Step Strategic Career Roadmap */}
        <div className="space-y-8">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-teal-700 font-semibold">
              Implementation Timeline
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-1">
              Four-Phase Career Roadmap
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Translating youthful ambition into concrete academic milestones, frontline logistics devotion, master's studies abroad, and systemic national impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {CAREER_ROADMAP.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-white border border-teal-100/90 hover:border-teal-300 transition-all shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-black font-mono text-teal-600">
                      {step.step}
                    </span>
                    <span className="text-[11px] font-mono font-medium text-slate-400">
                      {step.timing}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900">
                    {step.phase}
                  </h4>

                  <p className="text-xs font-semibold text-teal-800">
                    {step.institution}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.objective}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <span className="text-[10px] uppercase tracking-wider font-mono text-slate-400 block mb-1">
                    Key Competencies
                  </span>
                  <p className="text-[11px] text-slate-700 font-medium">
                    {step.skillsGained}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
