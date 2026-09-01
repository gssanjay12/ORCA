import React from 'react';
import { translations, type Language } from '../i18n/translations';
import type { GeofenceState } from '../data/mockMarineData';
import {
  Play,
  Pause,
  RotateCcw,
  Shield,
  History,
  Trash2,
  Navigation,
} from 'lucide-react';

export interface AlertLogItem {
  id: string;
  timestamp: string;
  type: 'SAFE' | 'CAUTION' | 'PROHIBITED' | 'HAZARD';
  message: string;
}

interface SimulationControlPanelProps {
  currentLang: Language;
  vesselPos: [number, number];
  geofenceState: GeofenceState;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onReset: () => void;
  simSpeed: number;
  onChangeSpeed: (speed: number) => void;
  alertLogs: AlertLogItem[];
  onClearLogs: () => void;
}

export const SimulationControlPanel: React.FC<SimulationControlPanelProps> = ({
  currentLang,
  vesselPos,
  geofenceState,
  isPlaying,
  onTogglePlay,
  onReset,
  simSpeed,
  onChangeSpeed,
  alertLogs,
  onClearLogs,
}) => {
  const t = translations[currentLang];

  const getStatusColor = (type: string) => {
    switch (type) {
      case 'SAFE':
        return 'text-emerald-400 bg-emerald-500/20 border-emerald-500/40';
      case 'CAUTION':
        return 'text-amber-400 bg-amber-500/20 border-amber-500/40';
      case 'PROHIBITED':
        return 'text-red-400 bg-red-600/30 border-red-500/60 animate-pulse';
      case 'HAZARD':
        return 'text-orange-400 bg-orange-500/30 border-orange-500/60 animate-pulse';
      default:
        return 'text-cyan-300 bg-slate-900 border-slate-700';
    }
  };

  return (
    <div className="space-y-4">
      {/* Dynamic Concept Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            <Navigation className="w-4 h-4" />
          </span>
          <div>
            <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest block">
              Concept Pipeline
            </span>
            <h4 className="text-xs font-black text-slate-100">{t.geofence.conceptLabel}</h4>
          </div>
        </div>

        {/* Simulation Playback & Speed Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={onTogglePlay}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-bold text-xs shadow transition-all cursor-pointer ${
              isPlaying
                ? 'bg-amber-500 hover:bg-amber-400 text-slate-950'
                : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span>{isPlaying ? t.geofence.pauseSimulation : t.geofence.startSimulation}</span>
          </button>

          <button
            onClick={onReset}
            title="Reset vessel position to harbor"
            className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-700 transition-all cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>

          {/* Speed Switchers */}
          <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-[10px] font-bold">
            {[1, 2, 5].map((speed) => (
              <button
                key={speed}
                onClick={() => onChangeSpeed(speed)}
                className={`px-2 py-1 rounded cursor-pointer transition-all ${
                  simSpeed === speed
                    ? 'bg-cyan-500 text-slate-950 font-black'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {speed}×
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Vessel Telemetry Status Card & Alert History */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Vessel Safety Status Card (7 columns) */}
        <div className="lg:col-span-7 p-5 rounded-2xl glass-panel-accent border-cyan-500/30 space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <h3 className="text-sm font-bold text-slate-100">{t.geofence.vesselStatusTitle}</h3>
            </div>
            <span
              className={`px-3 py-1 text-xs font-black rounded-full border shadow ${getStatusColor(
                geofenceState.currentZoneType
              )}`}
            >
              {t.geofence.types[geofenceState.currentZoneType.toLowerCase() as keyof typeof t.geofence.types]}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 text-[11px] block">Current Position</span>
              <strong className="text-slate-100 font-mono text-[11px]">
                {vesselPos[0].toFixed(4)}° N, {vesselPos[1].toFixed(4)}° E
              </strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 text-[11px] block">Current Sector</span>
              <strong className="text-cyan-300 text-xs font-bold truncate block mt-0.5">
                {geofenceState.currentZoneName}
              </strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 text-[11px] block">{t.geofence.distanceToRestricted}</span>
              <strong className="text-amber-400 font-mono text-sm">
                {geofenceState.distanceToRestrictedKm} km
              </strong>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
              <span className="text-slate-400 text-[11px] block">{t.geofence.distanceToHazard}</span>
              <strong className="text-orange-400 font-mono text-sm">
                {geofenceState.distanceToHazardKm} km
              </strong>
            </div>
          </div>
        </div>

        {/* Timestamped Alert History Log Feed (5 columns) */}
        <div className="lg:col-span-5 p-5 rounded-2xl glass-panel border-cyan-500/20 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
              <History className="w-4 h-4 text-cyan-400" />
              <span>{t.geofence.alertHistory}</span>
            </div>
            {alertLogs.length > 0 && (
              <button
                onClick={onClearLogs}
                className="text-[11px] text-slate-400 hover:text-red-400 flex items-center gap-1 transition-all cursor-pointer"
              >
                <Trash2 className="w-3 h-3" />
                <span>{t.geofence.clearHistory}</span>
              </button>
            )}
          </div>

          <div className="space-y-1.5 max-h-36 overflow-y-auto pr-1 text-[11px]">
            {alertLogs.length === 0 ? (
              <div className="text-slate-500 text-center py-4 italic">No alerts logged yet. Start simulation to observe transitions.</div>
            ) : (
              alertLogs.map((log) => (
                <div
                  key={log.id}
                  className="p-2 rounded-lg bg-slate-950/80 border border-slate-850 flex items-center justify-between gap-2"
                >
                  <span className="font-mono text-slate-400 shrink-0">{log.timestamp}</span>
                  <span className="text-slate-200 font-medium truncate flex-1">{log.message}</span>
                  <span
                    className={`px-1.5 py-0.5 text-[9px] font-black rounded ${
                      log.type === 'SAFE'
                        ? 'bg-emerald-500/20 text-emerald-300'
                        : log.type === 'CAUTION'
                        ? 'bg-amber-500/20 text-amber-300'
                        : 'bg-red-500/30 text-red-300'
                    }`}
                  >
                    {log.type}
                  </span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
