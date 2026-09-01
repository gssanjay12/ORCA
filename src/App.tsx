import { useState, useEffect, useRef } from 'react';
import { translations, type Language } from './i18n/translations';
import { Header } from './components/Header';
import { Sidebar, type NavTab } from './components/Sidebar';
import { DashboardView } from './components/DashboardView';
import { AIAssistantView } from './components/AIAssistantView';
import { WeatherView } from './components/WeatherView';
import { FishingZonesView } from './components/FishingZonesView';
import { SafetyView } from './components/SafetyView';
import { MissionPackageView } from './components/MissionPackageView';
import { ArchitectureView } from './components/ArchitectureView';
import {
  FISHING_ZONES,
  SIMULATION_WAYPOINTS,
  evaluateVesselGeofence,
  type FishingZone,
} from './data/mockMarineData';
import { type AlertLogItem } from './components/SimulationControlPanel';
import { WifiOff, AlertTriangle } from 'lucide-react';

export function App() {
  // Start in Tamil ('ta') by default for live demonstration, or toggleable to English
  const [currentLang, setCurrentLang] = useState<Language>('ta');
  const [isOffline, setIsOffline] = useState(false);
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [selectedZone, setSelectedZone] = useState<FishingZone>(FISHING_ZONES[0]);
  const [aiInitialQuery, setAiInitialQuery] = useState<string | undefined>(undefined);
  const [safetyBubbleRadiusKm, setSafetyBubbleRadiusKm] = useState(20);

  // Vessel Simulation & Geofence States
  const [vesselPos, setVesselPos] = useState<[number, number]>(SIMULATION_WAYPOINTS[0]);
  const [, setWaypointIdx] = useState(0);
  const [isPlayingSim, setIsPlayingSim] = useState(false);
  const [simSpeed, setSimSpeed] = useState(1);
  const [alertLogs, setAlertLogs] = useState<AlertLogItem[]>([]);
  const prevZoneTypeRef = useRef<string>('SAFE');

  const t = translations[currentLang];
  const geofenceState = evaluateVesselGeofence(vesselPos);

  // Animated Vessel Movement Simulation Loop
  useEffect(() => {
    if (!isPlayingSim) return;

    const intervalMs = 2500 / simSpeed;
    const timer = setInterval(() => {
      setWaypointIdx((prev) => {
        const nextIdx = (prev + 1) % SIMULATION_WAYPOINTS.length;
        setVesselPos(SIMULATION_WAYPOINTS[nextIdx]);
        return nextIdx;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlayingSim, simSpeed]);

  // Log and notify whenever Geofence zone transition occurs
  useEffect(() => {
    const currentType = geofenceState.currentZoneType;
    if (currentType !== prevZoneTypeRef.current) {
      const nowStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      let message = `Entered ${geofenceState.currentZoneName}`;

      if (currentType === 'PROHIBITED') {
        message = t.geofence.prohibitedEntryTitle;
      } else if (currentType === 'HAZARD') {
        message = t.geofence.hazardEntryTitle;
      } else if (currentType === 'CAUTION') {
        message = `${t.geofence.approachingRestricted} (${geofenceState.distanceToRestrictedKm} km)`;
      } else if (currentType === 'SAFE') {
        message = `Returned to SAFE sector (${geofenceState.currentZoneName})`;
      }

      setAlertLogs((prevLogs) => [
        {
          id: `log-${Date.now()}`,
          timestamp: nowStr,
          type: currentType,
          message,
        },
        ...prevLogs.slice(0, 15),
      ]);

      prevZoneTypeRef.current = currentType;
    }
  }, [geofenceState.currentZoneType, geofenceState.currentZoneName, geofenceState.distanceToRestrictedKm, t]);

  const handleTogglePlaySim = () => setIsPlayingSim(!isPlayingSim);
  const handleResetSim = () => {
    setIsPlayingSim(false);
    setWaypointIdx(0);
    setVesselPos(SIMULATION_WAYPOINTS[0]);
  };

  const handleMapClickRelocate = (lat: number, lng: number) => {
    setVesselPos([lat, lng]);
  };

  const handleNavigateToAI = (query?: string) => {
    if (query) setAiInitialQuery(query);
    setActiveTab('aiAssistant');
  };

  const handleNavigateToZone = (zone: FishingZone) => {
    setSelectedZone(zone);
    setActiveTab('fishingZones');
  };

  return (
    <div className="min-h-screen bg-[#040914] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-slate-950">
      {/* Top Fixed Header */}
      <Header
        currentLang={currentLang}
        onLanguageChange={setCurrentLang}
        isOffline={isOffline}
        onToggleOffline={() => setIsOffline(!isOffline)}
      />

      {/* PROHIBITED OR HAZARD ZONE CRITICAL BANNER */}
      {(geofenceState.isInsideProhibited || geofenceState.isInsideHazard) && (
        <div className="bg-red-600 border-b border-red-400 px-6 py-2.5 text-xs font-black text-white flex items-center justify-between shadow-2xl animate-bounce">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-300 shrink-0" />
            <span>
              {geofenceState.isInsideProhibited
                ? t.geofence.prohibitedEntryTitle + ' — ' + t.geofence.prohibitedEntryText
                : t.geofence.hazardEntryTitle + ' — ' + t.geofence.hazardEntryText}
            </span>
          </div>
          <button
            onClick={() => setActiveTab('safetyAlerts')}
            className="px-3 py-1 bg-slate-950 text-white rounded font-bold text-[11px] hover:bg-slate-900 cursor-pointer"
          >
            Inspect Geofence Map
          </button>
        </div>
      )}

      {/* Offline Mode Alert Banner */}
      {isOffline && (
        <div className="bg-amber-500/20 border-b border-amber-500/40 px-6 py-2 text-xs font-semibold text-amber-300 flex items-center justify-between shadow-inner">
          <div className="flex items-center gap-2">
            <WifiOff className="w-4 h-4 text-amber-400 animate-pulse" />
            <span>
              <strong>{t.offlineMode}:</strong> {t.localPackageActive} — Preloaded 48-Hour Marine & Fishing AI active for offshore operations.
            </span>
          </div>
          <button
            onClick={() => setActiveTab('missionPackage')}
            className="text-[11px] underline hover:text-amber-200 cursor-pointer font-bold"
          >
            Manage Package
          </button>
        </div>
      )}

      {/* Main Body Layout: Sidebar + View Container */}
      <div className="flex-1 flex w-full">
        {/* Left Sidebar */}
        <Sidebar
          currentLang={currentLang}
          activeTab={activeTab}
          onTabChange={setActiveTab}
          isOffline={isOffline}
        />

        {/* Right Content View Container */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto max-w-[1600px]">
          {activeTab === 'dashboard' && (
            <DashboardView
              currentLang={currentLang}
              onNavigateToAI={handleNavigateToAI}
              onNavigateToZone={handleNavigateToZone}
              vesselPos={vesselPos}
              geofenceState={geofenceState}
              isPlayingSim={isPlayingSim}
              onTogglePlaySim={handleTogglePlaySim}
              onResetSim={handleResetSim}
              simSpeed={simSpeed}
              onChangeSimSpeed={setSimSpeed}
              alertLogs={alertLogs}
              onClearAlertLogs={() => setAlertLogs([])}
              onMapClickRelocate={handleMapClickRelocate}
            />
          )}

          {activeTab === 'aiAssistant' && (
            <AIAssistantView
              currentLang={currentLang}
              initialQuery={aiInitialQuery}
              isOffline={isOffline}
              vesselPos={vesselPos}
            />
          )}

          {activeTab === 'fishingZones' && (
            <FishingZonesView
              currentLang={currentLang}
              onNavigateToAI={handleNavigateToAI}
              selectedZone={selectedZone}
              onSelectZone={setSelectedZone}
              vesselPos={vesselPos}
              onMapClickRelocate={handleMapClickRelocate}
            />
          )}

          {(activeTab === 'weather' || (activeTab as string) === 'marineConditions') && (
            <WeatherView currentLang={currentLang} />
          )}

          {activeTab === 'safetyAlerts' && (
            <SafetyView
              currentLang={currentLang}
              safetyBubbleRadiusKm={safetyBubbleRadiusKm}
              onSafetyBubbleRadiusChange={setSafetyBubbleRadiusKm}
              vesselPos={vesselPos}
              geofenceState={geofenceState}
              isPlayingSim={isPlayingSim}
              onTogglePlaySim={handleTogglePlaySim}
              onResetSim={handleResetSim}
              simSpeed={simSpeed}
              onChangeSimSpeed={setSimSpeed}
              alertLogs={alertLogs}
              onClearAlertLogs={() => setAlertLogs([])}
              onMapClickRelocate={handleMapClickRelocate}
            />
          )}

          {activeTab === 'missionPackage' && (
            <MissionPackageView
              currentLang={currentLang}
              isOffline={isOffline}
              onToggleOffline={() => setIsOffline(!isOffline)}
            />
          )}

          {activeTab === 'architecture' && <ArchitectureView currentLang={currentLang} />}
        </main>
      </div>
    </div>
  );
}

export default App;
