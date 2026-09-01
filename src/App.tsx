import { useState } from 'react';
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
import { FISHING_ZONES, type FishingZone } from './data/mockMarineData';
import { WifiOff } from 'lucide-react';

export function App() {
  // Start in Tamil ('ta') by default for live demonstration, or toggleable to English
  const [currentLang, setCurrentLang] = useState<Language>('ta');
  const [isOffline, setIsOffline] = useState(false);
  const [activeTab, setActiveTab] = useState<NavTab>('dashboard');
  const [selectedZone, setSelectedZone] = useState<FishingZone>(FISHING_ZONES[0]);
  const [aiInitialQuery, setAiInitialQuery] = useState<string | undefined>(undefined);
  const [safetyBubbleRadiusKm, setSafetyBubbleRadiusKm] = useState(20);

  const t = translations[currentLang];

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
            />
          )}

          {activeTab === 'aiAssistant' && (
            <AIAssistantView
              currentLang={currentLang}
              initialQuery={aiInitialQuery}
              isOffline={isOffline}
            />
          )}

          {activeTab === 'fishingZones' && (
            <FishingZonesView
              currentLang={currentLang}
              onNavigateToAI={handleNavigateToAI}
              selectedZone={selectedZone}
              onSelectZone={setSelectedZone}
            />
          )}

          {activeTab === 'weather' && <WeatherView currentLang={currentLang} />}

          {activeTab === 'safetyAlerts' && (
            <SafetyView
              currentLang={currentLang}
              safetyBubbleRadiusKm={safetyBubbleRadiusKm}
              onSafetyBubbleRadiusChange={setSafetyBubbleRadiusKm}
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
