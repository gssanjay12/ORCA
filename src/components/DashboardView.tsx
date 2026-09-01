import React from 'react';
import { translations, type Language } from '../i18n/translations';
import {
  COASTAL_LOCATIONS,
  FISHING_ZONES,
  CYCLONE_VARUNA,
  MARITIME_BOUNDARIES,
  type FishingZone,
  type GeofenceState,
} from '../data/mockMarineData';
import { MarineMap } from './MarineMap';
import { SimulationControlPanel, type AlertLogItem } from './SimulationControlPanel';
import {
  Thermometer,
  Wind,
  Waves,
  Droplets,
  Compass,
  ShieldCheck,
  ShieldAlert,
  ArrowUpRight,
  Sparkles,
  Navigation,
  Clock,
  ExternalLink,
  Shield,
  MapPin,
} from 'lucide-react';

interface DashboardViewProps {
  currentLang: Language;
  onNavigateToAI: (initialQuery?: string) => void;
  onNavigateToZone: (zone: FishingZone) => void;
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

export const DashboardView: React.FC<DashboardViewProps> = ({
  currentLang,
  onNavigateToAI,
  onNavigateToZone,
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
  const recommendedZone = FISHING_ZONES[0];

  const getStatusColor = (type: string) => {
    switch (type) {
      case 'SAFE':
        return 'text-emerald-400 border-emerald-500/40 bg-emerald-500/20';
      case 'CAUTION':
        return 'text-amber-400 border-amber-500/40 bg-amber-500/20';
      case 'PROHIBITED':
        return 'text-red-400 border-red-500/60 bg-red-600/30 animate-pulse';
      case 'HAZARD':
        return 'text-orange-400 border-orange-500/60 bg-orange-500/30 animate-pulse';
      default:
        return 'text-cyan-300 border-slate-700 bg-slate-900';
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Hero Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                {t.dashboard.quickStats}
              </span>
              <span className="text-xs text-slate-400 font-mono">Synced 2 mins ago</span>
            </div>
            <h2 className="text-2xl font-black text-slate-100 tracking-wide">
              {t.dashboard.title}
            </h2>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              {t.dashboard.overview} — <strong className="text-cyan-300">Chennai Coastal Sector (Coromandel Basin)</strong>
            </p>
          </div>

          <button
            onClick={() => onNavigateToAI(t.ai.questions.q1)}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs shadow-lg shadow-cyan-500/25 transition-all hover:scale-[1.02] cursor-pointer shrink-0"
          >
            <Sparkles className="w-4 h-4 text-slate-950" />
            <span>{t.ai.title}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* VESSEL STATUS DASHBOARD CARD */}
      <div className="p-5 rounded-2xl glass-panel-accent border-cyan-500/30 space-y-3">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-2 border-b border-cyan-500/20">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <h3 className="text-sm font-black text-slate-100 uppercase tracking-wider">
              {t.geofence.vesselStatusTitle}
            </h3>
          </div>

          <span
            className={`px-3 py-1 text-xs font-black rounded-full border shadow uppercase ${getStatusColor(
              geofenceState.currentZoneType
            )}`}
          >
            Status: {t.geofence.types[geofenceState.currentZoneType.toLowerCase() as keyof typeof t.geofence.types]}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-xs">
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-slate-400 text-[11px] block">GPS Latitude</span>
            <strong className="text-slate-100 font-mono text-xs">{vesselPos[0].toFixed(4)}° N</strong>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-slate-400 text-[11px] block">GPS Longitude</span>
            <strong className="text-slate-100 font-mono text-xs">{vesselPos[1].toFixed(4)}° E</strong>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-slate-400 text-[11px] block">{t.geofence.distanceToRestricted}</span>
            <strong className="text-amber-400 font-mono text-sm">{geofenceState.distanceToRestrictedKm} km</strong>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-slate-400 text-[11px] block">{t.geofence.distanceToHazard}</span>
            <strong className="text-orange-400 font-mono text-sm">{geofenceState.distanceToHazardKm} km</strong>
          </div>

          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
            <span className="text-slate-400 text-[11px] block">Current Sector</span>
            <strong className="text-cyan-300 font-bold truncate block mt-0.5">{geofenceState.currentZoneName}</strong>
          </div>
        </div>
      </div>

      {/* 6 Marine Telemetry Metrics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
        <div className="p-4 rounded-xl glass-panel border-cyan-500/20 space-y-1 hover:border-cyan-500/40 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium">
            <span>{t.dashboard.temperature}</span>
            <Thermometer className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl font-black text-slate-100">{chennai.airTemp} °C</div>
          <div className="text-[10px] text-emerald-400 font-medium">Normal thermal range</div>
        </div>

        <div className="p-4 rounded-xl glass-panel border-cyan-500/20 space-y-1 hover:border-cyan-500/40 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium">
            <span>{t.dashboard.windSpeed}</span>
            <Wind className="w-4 h-4 text-sky-400" />
          </div>
          <div className="text-xl font-black text-slate-100">{chennai.windSpeed} km/h</div>
          <div className="text-[10px] text-cyan-300 font-medium">Direction: {chennai.windDir}</div>
        </div>

        <div className="p-4 rounded-xl glass-panel border-cyan-500/20 space-y-1 hover:border-cyan-500/40 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium">
            <span>{t.dashboard.waveHeight}</span>
            <Waves className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-xl font-black text-slate-100">{chennai.waveHeight} m</div>
          <div className="text-[10px] text-emerald-400 font-medium">Mild swell condition</div>
        </div>

        <div className="p-4 rounded-xl glass-panel border-cyan-500/20 space-y-1 hover:border-cyan-500/40 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium">
            <span>{t.dashboard.sst}</span>
            <Droplets className="w-4 h-4 text-cyan-400" />
          </div>
          <div className="text-xl font-black text-cyan-300">{chennai.sst} °C</div>
          <div className="text-[10px] text-emerald-400 font-medium">ISRO Satellite Data</div>
        </div>

        <div className="p-4 rounded-xl glass-panel border-cyan-500/20 space-y-1 hover:border-cyan-500/40 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium">
            <span>{t.border.borderSafety}</span>
            <Shield className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl font-black text-emerald-400 uppercase">{t.border.states.safe}</div>
          <div className="text-[10px] text-slate-300 font-medium">IMBL: {MARITIME_BOUNDARIES.vesselDistanceToIMBLKm} km</div>
        </div>

        <div className="p-4 rounded-xl glass-panel border-cyan-500/20 space-y-1 hover:border-cyan-500/40 transition-all">
          <div className="flex items-center justify-between text-slate-400 text-[11px] font-medium">
            <span>{t.dashboard.weatherCondition}</span>
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-sm font-bold text-emerald-300 truncate">Favorable</div>
          <div className="text-[10px] text-slate-400 truncate">Visibility: 10 km</div>
        </div>
      </div>

      {/* Main Grid: Recommended Zone Summary & Safety Overview Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-5 rounded-2xl glass-panel-accent space-y-4 border-cyan-500/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <Compass className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-200">{t.dashboard.recommendedZone}</h3>
                <p className="text-xs text-emerald-400 font-bold">{recommendedZone.name}</p>
              </div>
            </div>
            <span className="px-3 py-1 text-xs font-black bg-emerald-500 text-slate-950 rounded-full shadow-lg">
              {recommendedZone.suitabilityScore}% {t.dashboard.suitability}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
            <div>
              <span className="text-slate-400 text-[11px] block">{t.dashboard.confidence}</span>
              <strong className="text-cyan-300 font-mono text-sm">{recommendedZone.confidence}%</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[11px] block">{t.dashboard.distance}</span>
              <strong className="text-slate-200 font-mono text-sm">{recommendedZone.distanceKm} km</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[11px] block">{t.dashboard.travelTime}</span>
              <strong className="text-slate-200 font-mono text-sm">{recommendedZone.travelTimeMin} min</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[11px] block">{t.border.borderSafety}</span>
              <strong className="text-emerald-400 font-bold uppercase">{recommendedZone.borderSafety}</strong>
            </div>
            <div>
              <span className="text-slate-400 text-[11px] block">{t.dashboard.safetyRisk}</span>
              <strong className="text-emerald-400 font-bold uppercase">{recommendedZone.riskLevel}</strong>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span>Optimal Window: <strong className="text-cyan-300">{recommendedZone.bestTimeWindow}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigateToZone(recommendedZone)}
                className="px-3.5 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs border border-slate-700 transition-all cursor-pointer"
              >
                Inspect Zone Breakdown
              </button>
              <button
                onClick={() => onNavigateToAI(t.ai.questions.q5)}
                className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs transition-all shadow cursor-pointer"
              >
                <span>{t.ai.whyRecommendation}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-5 rounded-2xl glass-panel space-y-4 border-amber-500/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="p-2 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <ShieldAlert className="w-5 h-5" />
              </span>
              <div>
                <h3 className="text-sm font-bold text-slate-200">{t.dashboard.activeWarnings}</h3>
                <p className="text-xs text-amber-400 font-semibold">{t.safety.riskLevels.low}</p>
              </div>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-emerald-300">
              <div className="flex items-center gap-1.5 font-bold mb-0.5">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Geofence Status: {geofenceState.currentZoneType}</span>
              </div>
              Vessel is {geofenceState.distanceToRestrictedKm} km away from Pulicat Prohibited Defense Sector.
            </div>

            <div className="p-3 rounded-xl bg-slate-900/80 border border-amber-500/30 text-amber-200 leading-relaxed">
              <strong className="block text-amber-400 font-bold mb-0.5">
                {CYCLONE_VARUNA.name} Alert
              </strong>
              {CYCLONE_VARUNA.distanceFromCoastKm} km East-Southeast of Chennai. Moving North-East at 85 km/h. No threat to Zone A.
            </div>
          </div>
        </div>
      </div>

      {/* Simulation Controls Panel & Interactive Map Section */}
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

      <div className="space-y-3">
        <div className="flex items-center justify-between px-1">
          <h3 className="text-base font-bold text-slate-200 flex items-center gap-2">
            <Navigation className="w-4 h-4 text-cyan-400" />
            <span>{t.geofence.conceptLabel} — Interactive Map</span>
          </h3>
          <span className="text-xs text-slate-400 font-mono">
            Click Map to Reposition Vessel | Showing Geofence Polygons & Detour Routes
          </span>
        </div>

        <MarineMap
          currentLang={currentLang}
          selectedZoneId={recommendedZone.id}
          onSelectZone={onNavigateToZone}
          showRoute={true}
          vesselPos={vesselPos}
          onMapClickRelocate={onMapClickRelocate}
        />
      </div>
    </div>
  );
};
