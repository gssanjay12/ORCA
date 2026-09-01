import React from 'react';
import { translations, type Language } from '../i18n/translations';
import {
  LayoutDashboard,
  Bot,
  Compass,
  CloudSun,
  ShieldAlert,
  DownloadCloud,
  Network,
  ChevronRight,
} from 'lucide-react';

export type NavTab =
  | 'dashboard'
  | 'aiAssistant'
  | 'fishingZones'
  | 'weather'
  | 'safetyAlerts'
  | 'missionPackage'
  | 'architecture';

interface SidebarProps {
  currentLang: Language;
  activeTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  isOffline: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  currentLang,
  activeTab,
  onTabChange,
  isOffline,
}) => {
  const t = translations[currentLang];

  const navItems = [
    { id: 'dashboard' as NavTab, label: t.nav.dashboard, icon: LayoutDashboard },
    { id: 'aiAssistant' as NavTab, label: t.nav.aiAssistant, icon: Bot, badge: 'AI' },
    { id: 'fishingZones' as NavTab, label: t.nav.fishingZones, icon: Compass },
    { id: 'weather' as NavTab, label: t.nav.weather, icon: CloudSun },
    { id: 'safetyAlerts' as NavTab, label: t.nav.safetyAlerts, icon: ShieldAlert, alert: true },
    {
      id: 'missionPackage' as NavTab,
      label: t.nav.missionPackage,
      icon: DownloadCloud,
      badge: isOffline ? 'ACTIVE' : '48H',
    },
    { id: 'architecture' as NavTab, label: t.nav.architecture, icon: Network },
  ];

  return (
    <aside className="w-64 shrink-0 p-4 bg-slate-950/80 backdrop-blur-md border-r border-cyan-500/20 flex flex-col justify-between min-h-[calc(100vh-65px)]">
      <div className="space-y-6">
        <div className="px-3 pt-2">
          <p className="text-[11px] font-bold tracking-wider text-cyan-400/80 uppercase">
            Navigation Menu
          </p>
        </div>

        {/* Nav Links List */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onTabChange(item.id)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/60 border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-cyan-400' : 'text-slate-400'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>

                <div className="flex items-center gap-1.5">
                  {item.badge && (
                    <span
                      className={`px-1.5 py-0.5 text-[9px] font-extrabold rounded ${
                        isActive
                          ? 'bg-cyan-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  {item.alert && (
                    <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
                  )}
                  <ChevronRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isActive ? 'text-cyan-400 translate-x-0.5' : 'text-slate-600'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Offline / Mission Package Status Footer Card */}
      <div className="p-3.5 rounded-xl bg-slate-900/90 border border-cyan-500/20 text-xs space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-bold text-slate-300">System Mode</span>
          <span
            className={`px-2 py-0.5 text-[10px] font-black rounded-full ${
              isOffline
                ? 'bg-amber-500/30 text-amber-300 border border-amber-500/40'
                : 'bg-emerald-500/30 text-emerald-300 border border-emerald-500/40'
            }`}
          >
            {isOffline ? 'OFFLINE' : 'ONLINE'}
          </span>
        </div>
        <p className="text-[11px] text-slate-400 leading-tight">
          {isOffline ? t.localPackageActive : t.cloudActive}
        </p>
      </div>
    </aside>
  );
};
