import React from 'react';
import { translations, type Language } from '../i18n/translations';
import {
  Network,
  Bot,
  CloudSun,
  Waves,
  Compass,
  ShieldAlert,
  Layers,
  Sparkles,
  ArrowDown,
  Database,
  Satellite,
  Radio,
  History,
} from 'lucide-react';

interface ArchitectureViewProps {
  currentLang: Language;
}

export const ArchitectureView: React.FC<ArchitectureViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const agentCards = [
    { title: t.architecture.weatherAgent, icon: CloudSun, color: 'text-sky-400', border: 'border-sky-500/30', desc: '48h Wind, Wave & Rain Grid' },
    { title: t.architecture.marineAgent, icon: Waves, color: 'text-blue-400', border: 'border-blue-500/30', desc: 'SST & Currents Telemetry' },
    { title: t.architecture.fishingAgent, icon: Compass, color: 'text-emerald-400', border: 'border-emerald-500/30', desc: 'PFZ Chlorophyll Suitability' },
    { title: t.architecture.safetyAgent, icon: ShieldAlert, color: 'text-amber-400', border: 'border-amber-500/30', desc: 'Cyclone Path & Hazard Matrix' },
  ];

  const dataSources = [
    { title: 'ISRO / Oceansat Satellite', desc: 'Sea Surface Temp & Chlorophyll Imagery', icon: Satellite, tag: 'Satellite' },
    { title: 'IMD Coastal Telemetry', desc: 'Radar Weather & Cyclone Warnings', icon: Radio, tag: 'Weather' },
    { title: 'INCOIS Ocean Forecast', desc: 'High-Res Wave & Current Models', icon: Waves, tag: 'Marine' },
    { title: 'PFZ Satellite Bulletins', desc: 'Potential Fishing Zone Maps', icon: Compass, tag: 'PFZ' },
    { title: 'Marine Vessel Datasets', desc: 'Real-time Coast Telemetry Sensors', icon: Database, tag: 'Sensors' },
    { title: 'Historical Catch Yields', desc: 'Seasonal Catch Probability Maps', icon: History, tag: 'Analytics' },
  ];

  return (
    <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 shadow-2xl">
        <h2 className="text-xl font-black text-slate-100 flex items-center gap-2">
          <Network className="w-6 h-6 text-cyan-400" />
          <span>{t.architecture.title}</span>
        </h2>
        <p className="text-xs text-slate-300 mt-1">{t.architecture.subtitle}</p>
      </div>

      {/* Multi-Agent Flowchart Node Animation */}
      <div className="p-6 rounded-2xl glass-panel-accent border-cyan-500/30 space-y-6 text-center">
        {/* Node 1: User Query */}
        <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 border border-cyan-400 text-xs font-bold text-cyan-300 shadow-lg animate-pulse">
          <span>{t.architecture.userQuery} ("Where should I fish tomorrow?")</span>
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-cyan-400 animate-bounce" />
        </div>

        {/* Node 2: ORCA AI Coordinator */}
        <div className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-slate-950 font-black text-sm shadow-xl border border-white/40">
          <Bot className="w-5 h-5 text-slate-950" />
          <span>{t.architecture.orcaCoordinator}</span>
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-cyan-400 animate-bounce" />
        </div>

        {/* Node 3: 4 Specialized Domain Agents Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-left">
          {agentCards.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <div
                key={i}
                className={`p-4 rounded-xl bg-slate-900/90 border ${agent.border} space-y-1.5 shadow-md hover:scale-[1.02] transition-all`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${agent.color}`} />
                  <span className="font-bold text-xs text-slate-100">{agent.title}</span>
                </div>
                <p className="text-[11px] text-slate-400 leading-tight">{agent.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-cyan-400 animate-bounce" />
        </div>

        {/* Node 4: Data Fusion Layer */}
        <div className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-slate-900 border border-emerald-500/50 text-emerald-300 font-bold text-xs shadow-lg">
          <Layers className="w-5 h-5 text-emerald-400" />
          <span>{t.architecture.dataFusion}</span>
        </div>

        <div className="flex justify-center">
          <ArrowDown className="w-5 h-5 text-cyan-400 animate-bounce" />
        </div>

        {/* Node 5: Recommendation Engine */}
        <div className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 font-black text-sm shadow-xl">
          <Sparkles className="w-5 h-5 text-slate-950" />
          <span>{t.architecture.engine} ➔ Recommended Fishing Zone & Safety Explanation</span>
        </div>
      </div>

      {/* Data Fusion Sources Grid */}
      <div className="space-y-3">
        <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan-400" />
          <span>{t.architecture.dataSources}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {dataSources.map((ds, i) => {
            const Icon = ds.icon;
            return (
              <div
                key={i}
                className="p-4 rounded-xl glass-panel border-cyan-500/20 space-y-1.5 hover:border-cyan-500/40 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-xs text-slate-100">
                    <Icon className="w-4 h-4 text-cyan-400" />
                    <span>{ds.title}</span>
                  </div>
                  <span className="px-2 py-0.5 text-[9px] font-black bg-cyan-950 text-cyan-300 rounded border border-cyan-500/30">
                    {ds.tag}
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">{ds.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
