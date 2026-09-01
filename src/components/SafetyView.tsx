import React from 'react';
import { translations, type Language } from '../i18n/translations';
import { CYCLONE_VARUNA, COASTAL_LOCATIONS, MARITIME_BOUNDARIES, type GeofenceState } from '../data/mockMarineData';
import { MarineMap } from './MarineMap';
import { SimulationControlPanel, type AlertLogItem } from './SimulationControlPanel';
import {
  ShieldAlert,
  ShieldCheck,
  Wind,
  Waves,
  CloudRain,
  Eye,
  Compass,
  AlertTriangle,
  Radio,
  Sliders,
  Shield,
  Info,
} from 'lucide-react';

interface SafetyViewProps {
  currentLang: Language;
  safetyBubbleRadiusKm: number;
  onSafetyBubbleRadiusChange: (radius: number) => void;
  vesselPos: [number, number];
  geofenceState: GeofenceState;
  isPlayingSim: boolean;
  onTogglePlaySim: () => void;
  onResetSim: () => void;
  simSpeed: number;
  onChangeSimSpeed: (speed: number) => void;
  alertLogs: AlertLogItem[];
  onClearAlertLogs: () => void;
  onMapClickRelocate: (lat: number, lng: number) => void;
}

export const SafetyView: React.FC<SafetyViewProps> = ({
  currentLang,
  safetyBubbleRadiusKm,
  onSafetyBubbleRadiusChange,
  vesselPos,
  geofenceState,
  isPlayingSim,
  onTogglePlaySim,
  onResetSim,
  simSpeed,
  onChangeSimSpeed,
  alertLogs,
  onClearAlertLogs,
  onMapClickRelocate,
}) => {
  const t = translations[currentLang];
  const chennai = COASTAL_LOCATIONS[0];

  const isHazardIntersecting =
    CYCLONE_VARUNA.distanceFromCoastKm <= safetyBubbleRadiusKm + CYCLONE_VARUNA.dangerRadiusKm;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Hero Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950/40 to-slate-900 border border-amber-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-100 flex items-center gap-2">
            <ShieldAlert className="w-6 h-6 text-amber-400" />
            <span>{t.geofence.title}</span>
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Real-time Point-in-Polygon Detection & Proximity Alerting — {t.geofence.conceptLabel}
          </p>
        </div>

        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold">
          <Radio className="w-4 h-4 text-amber-400 animate-pulse" />
          <span>Coastal Warning & Geofence Engine Active</span>
        </div>
      </div>

      {/* Simulation Controls Panel */}
      <SimulationControlPanel
        currentLang={currentLang}
        vesselPos={vesselPos}
        geofenceState={geofenceState}
        isPlaying={isPlayingSim}
        onTogglePlay={onTogglePlaySim}
        onReset={onResetSim}
        simSpeed={simSpeed}
        onChangeSpeed={onChangeSimSpeed}
        alertLogs={alertLogs}
        onClearLogs={onClearAlertLogs}
      />

      {/* Hazard Overlap Alert Banner if radius enlarged */}
      {isHazardIntersecting && (
        <div className="p-4 rounded-xl bg-red-600/20 border-2 border-red-500 text-red-200 flex items-center gap-3 animate-bounce">
          <AlertTriangle className="w-6 h-6 text-red-400 shrink-0" />
          <div className="text-xs font-bold">
            <strong className="block text-red-300 text-sm">{t.safety.hazardAlert}</strong>
            Cyclonic Storm VARUNA danger radius ({CYCLONE_VARUNA.dangerRadiusKm} km) overlaps with your configured {safetyBubbleRadiusKm} km safety bubble radius!
          </div>
        </div>
      )}

      {/* MARITIME BORDER & GEOFENCE PROTECTION CARD */}
      <div className="p-6 rounded-2xl glass-panel-accent border-cyan-500/30 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <span className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
              <Shield className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-base font-black text-slate-100">{t.border.title}</h3>
              <p className="text-xs text-cyan-300">{t.border.subtitle}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-xs font-black bg-emerald-500 text-slate-950 rounded-full shadow">
              {t.border.states.safe} ({MARITIME_BOUNDARIES.vesselDistanceToIMBLKm} km to IMBL)
            </span>
          </div>
        </div>

        {/* 3 Alert State Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-xs space-y-1">
            <div className="flex items-center justify-between font-extrabold text-emerald-400">
              <span>🟢 {t.border.states.safe}</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <p className="text-slate-300 text-[11px]">Far from boundary lines & prohibited defense areas.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-xs space-y-1">
            <div className="flex items-center justify-between font-extrabold text-amber-400">
              <span>🟡 {t.border.states.caution}</span>
              <AlertTriangle className="w-4 h-4" />
            </div>
            <p className="text-slate-300 text-[11px]">Approaching within 15 km of International Boundary.</p>
          </div>

          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/40 text-xs space-y-1">
            <div className="flex items-center justify-between font-extrabold text-red-400">
              <span>🔴 {t.border.states.restricted}</span>
              <ShieldAlert className="w-4 h-4" />
            </div>
            <p className="text-slate-300 text-[11px]">Overlaps naval prohibited zone or crosses IMBL line.</p>
          </div>
        </div>

        {/* Proximity Alert Banner Text */}
        <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 text-xs space-y-1.5 text-slate-200">
          <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <span>{t.border.proximityAlertTitle}</span>
          </div>
          <p className="text-slate-300">{t.border.proximityAlertText}</p>

          {currentLang === 'ta' && (
            <p className="text-cyan-300 font-semibold pt-1">
              "எல்லைப் பகுதியை நெருங்குகிறீர்கள். பாதுகாப்பான தூரத்தைப் பராமரிக்கவும்."
            </p>
          )}

          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 pt-2 border-t border-slate-800">
            <Info className="w-3.5 h-3.5 text-slate-500" />
            <span>{t.border.disclaimer}</span>
          </div>
        </div>
      </div>

      {/* Risk Matrix Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl glass-panel-accent border-emerald-500/30 flex flex-col justify-between space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              {t.safety.overallRisk}
            </span>
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
          </div>

          <div className="space-y-1">
            <div className="text-3xl font-black text-emerald-400 tracking-wide">
              {t.safety.riskLevels.low}
            </div>
            <p className="text-xs text-slate-300">
              Safe operating parameters for coastal sectors up to 25 km offshore until 14:00 hours.
            </p>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-[11px] text-slate-300">
            <strong className="text-cyan-300 block mb-0.5">Forecasted Shift:</strong>
            Wind speed expected to increase after 14:00. Wave conditions remain manageable before that period.
          </div>
        </div>

        <div className="lg:col-span-2 p-6 rounded-2xl glass-panel border-cyan-500/20 space-y-4">
          <h3 className="text-sm font-bold text-slate-200">
            Marine Hazard Sub-Factor Risk Matrix
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>{t.safety.factors.wind}</span>
                <Wind className="w-3.5 h-3.5 text-sky-400" />
              </div>
              <div className="font-bold text-slate-100">{chennai.windSpeed} km/h</div>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase">Low Risk</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>{t.safety.factors.waves}</span>
                <Waves className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <div className="font-bold text-slate-100">{chennai.waveHeight} m</div>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase">Low Risk</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>{t.safety.factors.rain}</span>
                <CloudRain className="w-3.5 h-3.5 text-cyan-400" />
              </div>
              <div className="font-bold text-slate-100">18% Probability</div>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase">Low Risk</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>{t.safety.factors.current}</span>
                <Compass className="w-3.5 h-3.5 text-teal-400" />
              </div>
              <div className="font-bold text-slate-100">{chennai.currentSpeed} kn</div>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase">Low Risk</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-amber-500/40 space-y-1 text-xs">
              <div className="flex items-center justify-between text-amber-400 text-[11px]">
                <span>{t.safety.factors.cyclone}</span>
                <ShieldAlert className="w-3.5 h-3.5 text-amber-400" />
              </div>
              <div className="font-bold text-amber-300">{CYCLONE_VARUNA.distanceFromCoastKm} km</div>
              <span className="text-[10px] text-amber-400 font-semibold uppercase">Moderate Caution</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1 text-xs">
              <div className="flex items-center justify-between text-slate-400 text-[11px]">
                <span>{t.safety.factors.visibility}</span>
                <Eye className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div className="font-bold text-slate-100">{chennai.visibility} km</div>
              <span className="text-[10px] text-emerald-400 font-semibold uppercase">Optimal</span>
            </div>
          </div>
        </div>
      </div>

      {/* Personal Safety Bubble Configurator */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl glass-panel border-cyan-500/30 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-cyan-400" />
              <span>{t.safety.safetyBubble}</span>
            </h3>
            <span className="px-3 py-1 font-mono font-bold text-xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-lg">
              {safetyBubbleRadiusKm} km
            </span>
          </div>

          <p className="text-xs text-slate-300">
            Define a perimeter around your vessel. ORCA will trigger an alert if any hazard or cyclone trajectory crosses your safety zone.
          </p>

          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs text-slate-400">
              <span>10 km</span>
              <span>20 km (Default)</span>
              <span>50 km</span>
            </div>
            <input
              type="range"
              min="10"
              max="50"
              step="5"
              value={safetyBubbleRadiusKm}
              onChange={(e) => onSafetyBubbleRadiusChange(Number(e.target.value))}
              className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-cyan-500"
            />
          </div>
        </div>

        <div className="p-6 rounded-2xl glass-panel border-red-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-red-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>{CYCLONE_VARUNA.name}</span>
            </h3>
            <span className="px-2.5 py-0.5 text-[10px] font-black bg-red-600/30 text-red-300 border border-red-500/50 rounded-full animate-pulse">
              ACTIVE STORM
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 pt-1">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Wind Intensity</span>
              <strong className="text-red-400 font-bold text-sm">{CYCLONE_VARUNA.windSpeedKmh} km/h</strong>
            </div>
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 block text-[11px]">Danger Zone Radius</span>
              <strong className="text-amber-400 font-bold text-sm">{CYCLONE_VARUNA.dangerRadiusKm} km</strong>
            </div>
          </div>

          <p className="text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800">
            {CYCLONE_VARUNA.status}
          </p>
        </div>
      </div>

      {/* Map displaying Geofences & Safety Bubble */}
      <div className="space-y-2">
        <h3 className="text-sm font-bold text-slate-200">
          Geofenced Spatial Hazard Map — Polygons, Restricted Defense Sectors & Vessel Position
        </h3>
        <MarineMap
          currentLang={currentLang}
          safetyBubbleRadiusKm={safetyBubbleRadiusKm}
          showRoute={true}
          vesselPos={vesselPos}
          onMapClickRelocate={onMapClickRelocate}
        />
      </div>
    </div>
  );
};
