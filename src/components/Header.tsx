import React from 'react';
import { translations, type Language } from '../i18n/translations';
import { Waves, Globe, Wifi, WifiOff, User, Radio } from 'lucide-react';

interface HeaderProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
  isOffline: boolean;
  onToggleOffline: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentLang,
  onLanguageChange,
  isOffline,
  onToggleOffline,
}) => {
  const t = translations[currentLang];

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-3.5 bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-xl flex items-center justify-between">
      {/* Brand Logo & Title */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20 border border-cyan-300/40">
          <Waves className="w-6 h-6 text-slate-950" />
          <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-400 border-2 border-slate-950 animate-ping"></span>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-black tracking-wider bg-gradient-to-r from-cyan-400 via-sky-200 to-white bg-clip-text text-transparent">
              {t.appName}
            </h1>
            <span className="px-2 py-0.5 text-[10px] font-extrabold bg-cyan-950/80 text-cyan-400 rounded-md border border-cyan-500/30">
              SIH PROTOTYPE
            </span>
          </div>
          <p className="text-xs text-slate-400 font-medium">{t.appSubtitle}</p>
        </div>
      </div>

      {/* Center Telemetry Status Badge */}
      <div className="hidden md:flex items-center gap-3 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300">
        <div className="flex items-center gap-1.5">
          <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
          <span className="font-semibold text-slate-200">INCOIS & IMD Live Feed</span>
        </div>
        <span className="text-slate-600">|</span>
        <span className="text-slate-400">Location: <strong className="text-cyan-300">Chennai Coast (13.08° N, 80.27° E)</strong></span>
      </div>

      {/* Right Controls: Online/Offline Toggle, Language Selector, User Profile */}
      <div className="flex items-center gap-3">
        {/* Online / Offline Toggle Button */}
        <button
          onClick={onToggleOffline}
          title="Click to toggle Cloud vs Local Mission Package mode"
          className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-extrabold transition-all border shadow-lg ${
            isOffline
              ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 hover:bg-amber-500/30'
              : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 hover:bg-emerald-500/30'
          }`}
        >
          {isOffline ? (
            <>
              <WifiOff className="w-4 h-4 text-amber-400 animate-pulse" />
              <span>{t.offlineMode}</span>
            </>
          ) : (
            <>
              <Wifi className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span>{t.onlineMode}</span>
            </>
          )}
        </button>

        {/* Regional Language Switcher Dropdown */}
        <div className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-cyan-500/30 text-xs font-semibold text-slate-200 hover:border-cyan-400 transition-all shadow-md">
          <Globe className="w-4 h-4 text-cyan-400" />
          <select
            value={currentLang}
            onChange={(e) => onLanguageChange(e.target.value as Language)}
            className="bg-transparent text-slate-100 font-bold focus:outline-none cursor-pointer pr-1"
          >
            <option value="en" className="bg-slate-900 text-slate-100">English</option>
            <option value="ta" className="bg-slate-900 text-cyan-300">தமிழ் (Tamil)</option>
            <option value="hi" className="bg-slate-900 text-slate-100">हिन्दी (Hindi)</option>
            <option value="te" className="bg-slate-900 text-slate-100">తెలుగు (Telugu)</option>
          </select>
        </div>

        {/* User / Profile Icon */}
        <div className="flex items-center gap-2 p-1.5 pl-2 pr-3 rounded-lg bg-slate-900 border border-slate-800 text-xs font-medium text-slate-300">
          <div className="w-7 h-7 rounded-full bg-slate-800 border border-cyan-500/40 flex items-center justify-center text-cyan-300">
            <User className="w-4 h-4" />
          </div>
          <div className="hidden sm:block text-left leading-tight">
            <span className="block text-xs font-bold text-slate-200">Capt. Selvam</span>
            <span className="block text-[10px] text-cyan-400 font-mono">Trawler TN-02-99</span>
          </div>
        </div>
      </div>
    </header>
  );
};
