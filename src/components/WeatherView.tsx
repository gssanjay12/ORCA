import React, { useState } from 'react';
import { translations, type Language } from '../i18n/translations';
import { COASTAL_LOCATIONS, HOURLY_FORECAST_48H } from '../data/mockMarineData';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
} from 'recharts';
import {
  CloudSun,
  MapPin,
  Thermometer,
  Wind,
  Waves,
  Droplets,
  CloudRain,
  ShieldCheck,
  ShieldAlert,
  Clock,
} from 'lucide-react';

interface WeatherViewProps {
  currentLang: Language;
}

export const WeatherView: React.FC<WeatherViewProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  const [selectedLocationId, setSelectedLocationId] = useState('chennai');

  const location =
    COASTAL_LOCATIONS.find((l) => l.id === selectedLocationId) || COASTAL_LOCATIONS[0];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Banner & Location Switcher */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-cyan-950/40 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-black text-slate-100 flex items-center gap-2">
            <CloudSun className="w-6 h-6 text-cyan-400" />
            <span>{t.weather.title}</span>
          </h2>
          <p className="text-xs text-slate-300 mt-1">
            IMD Radar & INCOIS High Resolution Ocean Wave Forecast System
          </p>
        </div>

        {/* Location Dropdown */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-cyan-500/40 text-xs font-bold text-slate-200 shadow-md">
          <MapPin className="w-4 h-4 text-cyan-400" />
          <span className="text-slate-400 font-normal">{t.weather.selectLocation}:</span>
          <select
            value={selectedLocationId}
            onChange={(e) => setSelectedLocationId(e.target.value)}
            className="bg-transparent text-cyan-300 font-bold focus:outline-none cursor-pointer"
          >
            {COASTAL_LOCATIONS.map((loc) => (
              <option key={loc.id} value={loc.id} className="bg-slate-900 text-slate-100">
                {loc.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Current Conditions Highlight Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl glass-panel border-cyan-500/20 space-y-1">
          <span className="text-slate-400 text-xs flex items-center justify-between">
            {t.dashboard.temperature}
            <Thermometer className="w-4 h-4 text-amber-400" />
          </span>
          <div className="text-2xl font-black text-slate-100">{location.airTemp} °C</div>
          <span className="text-[10px] text-cyan-300">SST: {location.sst} °C</span>
        </div>

        <div className="p-4 rounded-xl glass-panel border-cyan-500/20 space-y-1">
          <span className="text-slate-400 text-xs flex items-center justify-between">
            {t.dashboard.windSpeed}
            <Wind className="w-4 h-4 text-sky-400" />
          </span>
          <div className="text-2xl font-black text-slate-100">{location.windSpeed} km/h</div>
          <span className="text-[10px] text-cyan-300">Direction: {location.windDir}</span>
        </div>

        <div className="p-4 rounded-xl glass-panel border-cyan-500/20 space-y-1">
          <span className="text-slate-400 text-xs flex items-center justify-between">
            {t.dashboard.waveHeight}
            <Waves className="w-4 h-4 text-blue-400" />
          </span>
          <div className="text-2xl font-black text-slate-100">{location.waveHeight} m</div>
          <span className="text-[10px] text-emerald-400 font-medium">Safe operating swell</span>
        </div>

        <div className="p-4 rounded-xl glass-panel border-cyan-500/20 space-y-1">
          <span className="text-slate-400 text-xs flex items-center justify-between">
            {t.weather.humidity} & Visibility
            <Droplets className="w-4 h-4 text-cyan-400" />
          </span>
          <div className="text-2xl font-black text-slate-100">{location.humidity}%</div>
          <span className="text-[10px] text-slate-300">Visibility: {location.visibility} km</span>
        </div>
      </div>

      {/* 48-Hour Forecast Timeline Window Chips */}
      <div className="p-5 rounded-2xl glass-panel space-y-3 border-cyan-500/20">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-200 flex items-center gap-2">
            <Clock className="w-4 h-4 text-cyan-400" />
            <span>{t.weather.forecast48h} — Safety Timeline Windows</span>
          </h3>
          <span className="text-xs text-slate-400 font-mono">Next 48 Hours</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 pt-1">
          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs space-y-1">
            <div className="flex items-center justify-between text-emerald-400 font-bold">
              <span>06:00 AM</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <strong className="block text-slate-200">{t.weather.timeline.safe}</strong>
            <span className="text-[10px] text-slate-400">Wind 12 km/h • Waves 1.0m</span>
          </div>

          <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs space-y-1">
            <div className="flex items-center justify-between text-emerald-400 font-bold">
              <span>09:00 AM</span>
              <ShieldCheck className="w-4 h-4" />
            </div>
            <strong className="block text-slate-200">{t.weather.timeline.safe}</strong>
            <span className="text-[10px] text-slate-400">Wind 14 km/h • Waves 1.1m</span>
          </div>

          <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs space-y-1">
            <div className="flex items-center justify-between text-amber-400 font-bold">
              <span>12:00 PM</span>
              <ShieldAlert className="w-4 h-4" />
            </div>
            <strong className="block text-slate-200">{t.weather.timeline.moderate}</strong>
            <span className="text-[10px] text-slate-400">Wind 18 km/h • Waves 1.4m</span>
          </div>

          <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/30 text-xs space-y-1">
            <div className="flex items-center justify-between text-orange-400 font-bold">
              <span>03:00 PM</span>
              <ShieldAlert className="w-4 h-4" />
            </div>
            <strong className="block text-slate-200">{t.weather.timeline.windIncreasing}</strong>
            <span className="text-[10px] text-slate-400">Wind 23 km/h • Waves 1.8m</span>
          </div>

          <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-xs space-y-1 col-span-2 sm:col-span-1">
            <div className="flex items-center justify-between text-red-400 font-bold">
              <span>06:00 PM</span>
              <ShieldAlert className="w-4 h-4" />
            </div>
            <strong className="block text-slate-200">{t.weather.timeline.caution}</strong>
            <span className="text-[10px] text-slate-400">Wind 27 km/h • Waves 2.2m</span>
          </div>
        </div>
      </div>

      {/* 48-Hour Recharts Visualizations */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Wind Speed & Wave Height Chart */}
        <div className="p-5 rounded-2xl glass-panel border-cyan-500/20 space-y-3">
          <h3 className="text-sm font-bold text-slate-200 flex items-center justify-between">
            <span>Wind Speed (km/h) & Wave Height (m) Trend</span>
            <Wind className="w-4 h-4 text-sky-400" />
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={HOURLY_FORECAST_48H}>
                <defs>
                  <linearGradient id="windGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818cf8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0b1528',
                    borderColor: '#06b6d4',
                    borderRadius: '8px',
                    color: '#f8fafc',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="windSpeed"
                  name="Wind Speed (km/h)"
                  stroke="#38bdf8"
                  fillOpacity={1}
                  fill="url(#windGrad)"
                  strokeWidth={2}
                />
                <Area
                  type="monotone"
                  dataKey="waveHeight"
                  name="Wave Height (m)"
                  stroke="#818cf8"
                  fillOpacity={1}
                  fill="url(#waveGrad)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Rain Probability Chart */}
        <div className="p-5 rounded-2xl glass-panel border-cyan-500/20 space-y-3">
          <h3 className="text-sm font-bold text-slate-200 flex items-center justify-between">
            <span>Rainfall & Precipitation Probability (%)</span>
            <CloudRain className="w-4 h-4 text-cyan-400" />
          </h3>
          <div className="h-64 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={HOURLY_FORECAST_48H}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="time" stroke="#64748b" fontSize={11} />
                <YAxis stroke="#64748b" fontSize={11} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#0b1528',
                    borderColor: '#06b6d4',
                    borderRadius: '8px',
                    color: '#f8fafc',
                    fontSize: '12px',
                  }}
                />
                <Bar
                  dataKey="rainProb"
                  name="Rain Probability (%)"
                  fill="#06b6d4"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
