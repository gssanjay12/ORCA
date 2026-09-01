import React, { useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { FISHING_ZONES, type FishingZone } from '../data/mockMarineData';
import { MarineMap } from './MarineMap';
import {
  Compass,
  Sliders,
  Sparkles,
  ArrowRight,
  Shield,
  AlertTriangle,
} from 'lucide-react';

interface FishingZonesViewProps {
  currentLang: Language;
  onNavigateToAI: (query?: string) => void;
  selectedZone?: FishingZone;
  onSelectZone?: (zone: FishingZone) => void;
}

export const FishingZonesView: React.FC<FishingZonesViewProps> = ({
  currentLang,
  onNavigateToAI: _onNavigateToAI,
  selectedZone: propSelectedZone,
  onSelectZone: propOnSelectZone,
}) => {
  const t = translations[currentLang];
  const [internalZone, setInternalZone] = useState<FishingZone>(FISHING_ZONES[0]);

  const activeZone = propSelectedZone || internalZone;

  const handleSelect = (z: FishingZone) => {
    setInternalZone(z);
    if (propOnSelectZone) propOnSelectZone(z);
  };

  const getScoreColor = (score: number, isRestricted?: boolean) => {
    if (isRestricted) return 'text-red-400';
    return score >= 80 ? 'text-emerald-400' : score >= 50 ? 'text-amber-400' : 'text-red-400';
  };

  const getBgScoreColor = (score: number, isRestricted?: boolean) => {
    if (isRestricted) return 'bg-red-600';
    return score >= 80 ? 'bg-emerald-500' : score >= 50 ? 'bg-amber-500' : 'bg-red-500';
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-100 flex items-center gap-2">
            <Compass className="w-6 h-6 text-cyan-400" />
            <span>{t.zones.title}</span>
          </h2>
          <p className="text-xs text-slate-300 mt-1">{t.zones.subtitle}</p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-950 border border-emerald-500/40 text-xs font-bold text-emerald-300">
          <Sparkles className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>ISRO Satellite & Border Safety Integrated</span>
        </div>
      </div>

      {/* Main Grid: Zone Selector Cards List + Factor Breakdown Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Side: 4 Fishing Zones Cards List (5 columns) */}
        <div className="lg:col-span-5 space-y-3">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
            Select Fishing Sector:
          </span>

          {FISHING_ZONES.map((zone) => {
            const isSelected = zone.id === activeZone.id;
            return (
              <div
                key={zone.id}
                onClick={() => handleSelect(zone)}
                className={`p-4 rounded-xl cursor-pointer transition-all border shadow-lg ${
                  isSelected
                    ? 'glass-panel-accent border-cyan-400/80 shadow-cyan-500/10'
                    : 'glass-panel border-slate-800 hover:border-cyan-500/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-3 h-3 rounded-full ${getBgScoreColor(
                        zone.suitabilityScore,
                        zone.isRestrictedExcluded
                      )}`}
                    ></span>
                    <h3 className="text-sm font-bold text-slate-100">{zone.name}</h3>
                  </div>
                  <span
                    className={`text-sm font-black ${getScoreColor(
                      zone.suitabilityScore,
                      zone.isRestrictedExcluded
                    )}`}
                  >
                    {zone.isRestrictedExcluded ? 'EXCLUDED' : `${zone.suitabilityScore}%`}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 mt-2 pt-2 border-t border-slate-800">
                  <span>Dist: <strong>{zone.distanceKm} km</strong></span>
                  <span>Border Safety: <strong className="uppercase text-emerald-400">{zone.borderSafety}</strong></span>
                  <span className="capitalize font-bold text-slate-300">Risk: {zone.riskLevel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Side: Selected Zone Detailed Factor Breakdown (7 columns) */}
        <div className="lg:col-span-7 p-6 rounded-2xl glass-panel-accent border-cyan-500/30 space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
            <div>
              <span className="text-xs text-cyan-400 font-bold uppercase tracking-wider">
                Sector Analysis Breakdown
              </span>
              <h3 className="text-lg font-black text-slate-100">{activeZone.name}</h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block">{t.zones.suitabilityScore}</span>
              <span
                className={`text-2xl font-black ${getScoreColor(
                  activeZone.suitabilityScore,
                  activeZone.isRestrictedExcluded
                )}`}
              >
                {activeZone.isRestrictedExcluded ? 'RESTRICTED' : `${activeZone.suitabilityScore}%`}
              </span>
            </div>
          </div>

          {/* RESTRICTED ZONE EXCLUSION BANNER */}
          {activeZone.isRestrictedExcluded ? (
            <div className="p-4 rounded-xl bg-red-950/90 border-2 border-red-500 text-red-200 space-y-1 text-xs">
              <div className="flex items-center gap-2 font-bold text-red-400 text-sm">
                <AlertTriangle className="w-5 h-5 text-red-400 shrink-0" />
                <span>{t.border.zoneRestrictedTitle}</span>
              </div>
              <p className="text-red-200">{t.border.zoneRestrictedText}</p>
            </div>
          ) : (
            <>
              {/* Border Safety Status Row */}
              <div className="p-3.5 rounded-xl bg-slate-900 border border-emerald-500/30 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-200 font-bold">
                  <Shield className="w-4 h-4 text-emerald-400" />
                  <span>{t.border.borderSafety}: <strong className="text-emerald-400 uppercase">{activeZone.borderSafety}</strong></span>
                </div>
                <span className="text-slate-400 font-mono">Distance to IMBL: {activeZone.borderDistanceKm} km</span>
              </div>

              {/* Factor Score Bars */}
              <div className="space-y-3 text-xs">
                <h4 className="font-bold text-slate-300 flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-cyan-400" />
                  <span>{t.zones.factorsTitle}</span>
                </h4>

                {/* SST Factor */}
                <div className="space-y-1">
                  <div className="flex justify-between text-slate-300 font-medium">
                    <span>{t.zones.tempGradient}</span>
                    <span className="font-mono font-bold text-cyan-300">{activeZone.factors.sst}%</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                      style={{ width: `${activeZone.factors.sst}%` }}
                    ></div>
                  </div>
                </div>

                {/* Chlorophyll Factor */}
                <div className="space-y-1">
                  <div className="flex justify-between text-slate-300 font-medium">
                    <span>{t.zones.chlorophyll}</span>
                    <span className="font-mono font-bold text-emerald-300">
                      {activeZone.factors.chlorophyll}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"
                      style={{ width: `${activeZone.factors.chlorophyll}%` }}
                    ></div>
                  </div>
                </div>

                {/* Ocean Current Factor */}
                <div className="space-y-1">
                  <div className="flex justify-between text-slate-300 font-medium">
                    <span>{t.zones.oceanCurrent}</span>
                    <span className="font-mono font-bold text-sky-300">
                      {activeZone.factors.current}%
                    </span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-sky-500 to-blue-400 rounded-full"
                      style={{ width: `${activeZone.factors.current}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Optimized Route Summary */}
          <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between">
              <span className="font-bold text-cyan-300 flex items-center gap-1.5">
                <ArrowRight className="w-4 h-4" />
                <span>Optimized Navigation Route</span>
              </span>
              <span className="font-mono text-slate-400">Chennai Harbor ➔ {activeZone.name}</span>
            </div>
            <div className="grid grid-cols-3 gap-2 text-slate-300 text-center">
              <div className="p-2 rounded-lg bg-slate-900">
                <span className="text-[10px] text-slate-400 block">Distance</span>
                <strong className="text-cyan-300">{activeZone.distanceKm} km</strong>
              </div>
              <div className="p-2 rounded-lg bg-slate-900">
                <span className="text-[10px] text-slate-400 block">Est. Time</span>
                <strong className="text-slate-200">{activeZone.travelTimeMin} min</strong>
              </div>
              <div className="p-2 rounded-lg bg-slate-900">
                <span className="text-[10px] text-slate-400 block">Border Status</span>
                <strong className="text-emerald-400 uppercase">{activeZone.borderSafety}</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Map view for Fishing Zones */}
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-slate-200">
          Spatial Distribution Map — PFZ Zones & Restricted Maritime Boundaries
        </h3>
        <MarineMap
          currentLang={currentLang}
          selectedZoneId={activeZone.id}
          onSelectZone={handleSelect}
          showRoute={true}
        />
      </div>
    </div>
  );
};
