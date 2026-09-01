import React, { useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import {
  COASTAL_LOCATIONS,
  FISHING_ZONES,
  HOURLY_FORECAST_48H,
  CYCLONE_VARUNA,
} from '../data/mockMarineData';
import {
  DownloadCloud,
  RefreshCw,
  CheckCircle2,
  Database,
  WifiOff,
  Wifi,
  FileJson,
  Calendar,
  Clock,
  HardDrive,
  Sparkles,
} from 'lucide-react';

interface MissionPackageViewProps {
  currentLang: Language;
  isOffline: boolean;
  onToggleOffline: () => void;
}

export const MissionPackageView: React.FC<MissionPackageViewProps> = ({
  currentLang,
  isOffline,
  onToggleOffline,
}) => {
  const t = translations[currentLang];
  const [isGenerating, setIsGenerating] = useState(false);
  const [syncProgress, setSyncProgress] = useState(100);
  const [syncSuccessMessage, setSyncSuccessMessage] = useState<string | null>(null);

  const handleGeneratePackage = () => {
    setIsGenerating(true);
    setSyncProgress(10);
    setSyncSuccessMessage(null);

    const interval = setInterval(() => {
      setSyncProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setSyncSuccessMessage(t.mission.packageGeneratedSuccess);
          return 100;
        }
        return prev + 25;
      });
    }, 400);
  };

  const handleDownloadJSON = () => {
    const packageData = {
      manifestVersion: '2.4.0',
      timestamp: new Date().toISOString(),
      validityHours: 48,
      location: 'Chennai Offshore Sector',
      coordinates: [13.0827, 80.2707],
      telemetry: COASTAL_LOCATIONS[0],
      fishingZones: FISHING_ZONES,
      forecast48h: HOURLY_FORECAST_48H,
      cycloneData: CYCLONE_VARUNA,
      localModelWeights: 'v4.2-orca-quantized-onnx',
    };

    const blob = new Blob([JSON.stringify(packageData, null, 2)], {
      type: 'application/json',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `orca_mission_package_chennai_${Date.now()}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const datasetList = [
    { title: t.mission.weatherForecast, size: '4.2 MB', icon: Clock },
    { title: t.mission.marineConditions, size: '12.8 MB', icon: Database },
    { title: t.mission.fishingPredictions, size: '8.4 MB', icon: Sparkles },
    { title: t.mission.hazardData, size: '1.5 MB', icon: HardDrive },
    { title: t.mission.mapData, size: '24.1 MB', icon: Database },
    { title: t.mission.modelInputs, size: '18.0 MB', icon: Sparkles },
  ];

  return (
    <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
      {/* Top Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-100 flex items-center gap-2">
            <DownloadCloud className="w-6 h-6 text-cyan-400" />
            <span>{t.mission.title}</span>
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            Pre-fetch marine models & satellite telemetry for zero-connectivity deep-sea fishing
          </p>
        </div>

        <button
          onClick={onToggleOffline}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs shadow-lg transition-all border cursor-pointer ${
            isOffline
              ? 'bg-amber-500 text-slate-950 border-amber-400 hover:bg-amber-400'
              : 'bg-slate-900 text-cyan-300 border-cyan-500/40 hover:bg-slate-850'
          }`}
        >
          {isOffline ? <WifiOff className="w-4 h-4" /> : <Wifi className="w-4 h-4" />}
          <span>{isOffline ? t.offlineMode : t.onlineMode}</span>
        </button>
      </div>

      {/* Package Status & Validity Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 rounded-xl glass-panel border-cyan-500/30 space-y-2">
          <span className="text-xs text-slate-400 font-medium block">{t.mission.status}</span>
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5 shrink-0" />
            <span>{t.mission.ready}</span>
          </div>
          <span className="text-[11px] text-slate-400 block pt-1">Cache: 68.8 MB Compressed</span>
        </div>

        <div className="p-5 rounded-xl glass-panel border-cyan-500/30 space-y-2">
          <span className="text-xs text-slate-400 font-medium block">{t.mission.validity}</span>
          <div className="flex items-center gap-2 text-cyan-300 font-black text-xl font-mono">
            <Calendar className="w-5 h-5 text-cyan-400 shrink-0" />
            <span>48 HOURS</span>
          </div>
          <span className="text-[11px] text-slate-400 block pt-1">Expires: T+48 Hours</span>
        </div>

        <div className="p-5 rounded-xl glass-panel border-cyan-500/30 space-y-2">
          <span className="text-xs text-slate-400 font-medium block">Offline AI Inference</span>
          <div className="flex items-center gap-2 text-amber-300 font-bold text-sm">
            <HardDrive className="w-5 h-5 text-amber-400 shrink-0" />
            <span>Quantized Neural Weights</span>
          </div>
          <span className="text-[11px] text-slate-400 block pt-1">Runs 100% locally in browser</span>
        </div>
      </div>

      {/* Action Buttons: Sync/Generate & Download */}
      <div className="p-6 rounded-2xl glass-panel-accent border-cyan-500/30 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-bold text-slate-100">Sync & Download Control Panel</h3>
            <p className="text-xs text-slate-400">Generate fresh offline bundle before departing port</p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleGeneratePackage}
              disabled={isGenerating}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 text-slate-950 font-bold text-xs shadow-lg transition-all cursor-pointer"
            >
              <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
              <span>{t.mission.generatePackage}</span>
            </button>

            <button
              onClick={handleDownloadJSON}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-xs shadow transition-all cursor-pointer"
            >
              <FileJson className="w-4 h-4 text-cyan-400" />
              <span>{t.mission.downloadPackage}</span>
            </button>
          </div>
        </div>

        {/* Sync Progress Bar */}
        {isGenerating && (
          <div className="space-y-1.5 pt-2">
            <div className="flex justify-between text-xs text-cyan-300 font-mono">
              <span>Syncing satellite & forecast telemetry...</span>
              <span>{syncProgress}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-900 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 transition-all duration-300"
                style={{ width: `${syncProgress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Sync Success Message Alert */}
        {syncSuccessMessage && (
          <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>{syncSuccessMessage}</span>
          </div>
        )}
      </div>

      {/* Package Included Datasets Checklist */}
      <div className="p-6 rounded-2xl glass-panel border-cyan-500/20 space-y-4">
        <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
          <Database className="w-4 h-4 text-cyan-400" />
          <span>{t.mission.contains}</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {datasetList.map((ds, idx) => {
            const Icon = ds.icon;
            return (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 flex items-center justify-between text-xs"
              >
                <div className="flex items-center gap-2.5">
                  <Icon className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-slate-200 font-medium">{ds.title}</span>
                </div>
                <span className="font-mono text-[11px] text-slate-400">{ds.size}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
