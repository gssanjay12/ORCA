import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Circle, Polyline, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import { FISHING_ZONES, CYCLONE_VARUNA, type FishingZone } from '../data/mockMarineData';
import { Compass, Layers } from 'lucide-react';
import type { Language } from '../i18n/translations';

interface MarineMapProps {
  currentLang: Language;
  selectedZoneId?: string;
  onSelectZone?: (zone: FishingZone) => void;
  safetyBubbleRadiusKm?: number;
  showRoute?: boolean;
}

// Custom Leaflet Icons
const vesselIcon = L.divIcon({
  className: 'custom-vessel-icon',
  html: `<div class="relative flex items-center justify-center w-8 h-8">
    <div class="absolute w-8 h-8 rounded-full bg-cyan-500/30 animate-radar-ping"></div>
    <div class="relative z-10 p-2 bg-cyan-500 text-slate-950 rounded-full shadow-lg border-2 border-cyan-300">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 22h20L12 2z"/></svg>
    </div>
  </div>`,
  iconSize: [32, 32],
  iconAnchor: [16, 16],
});

const cycloneIcon = L.divIcon({
  className: 'custom-cyclone-icon',
  html: `<div class="relative flex items-center justify-center w-10 h-10">
    <div class="absolute w-12 h-12 rounded-full bg-red-600/40 animate-ping"></div>
    <div class="relative z-10 p-2 bg-red-600 text-white rounded-full shadow-xl border-2 border-red-300 animate-spin" style="animation-duration: 4s;">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
    </div>
  </div>`,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

const createZoneIcon = (score: number, isRecommended: boolean) => {
  const bgColor = score >= 80 ? '#10b981' : score >= 50 ? '#f59e0b' : '#ef4444';
  return L.divIcon({
    className: 'custom-zone-icon',
    html: `<div class="relative flex flex-col items-center">
      ${isRecommended ? '<span class="px-2 py-0.5 text-[10px] font-bold bg-cyan-500 text-slate-950 rounded-full shadow mb-1 border border-white animate-bounce">RECOMMENDED</span>' : ''}
      <div class="flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-extrabold text-slate-950 shadow-md border-2 border-white/80" style="background-color: ${bgColor};">
        ${score}%
      </div>
    </div>`,
    iconSize: [80, 40],
    iconAnchor: [40, 20],
  });
};

export const MarineMap: React.FC<MarineMapProps> = ({
  currentLang: _currentLang,
  selectedZoneId = 'zone-a',
  onSelectZone,
  safetyBubbleRadiusKm = 20,
  showRoute = true,
}) => {
  const chennaiHarbor: [number, number] = [13.0827, 80.2707];
  const selectedZone = FISHING_ZONES.find((z) => z.id === selectedZoneId) || FISHING_ZONES[0];

  // Map layer controls state
  const [layers, setLayers] = useState({
    zones: true,
    route: showRoute,
    vessel: true,
    safetyBubble: true,
    cyclone: true,
    cyclonePath: true,
  });

  const routePolyline: [number, number][] = [
    chennaiHarbor,
    [13.15, 80.36],
    [selectedZone.lat, selectedZone.lng],
  ];

  return (
    <div className="relative w-full h-[520px] rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl glass-panel">
      {/* Map Header Overlay */}
      <div className="absolute top-3 left-3 z-[1000] flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-xs font-medium text-cyan-200">
        <Compass className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
        <span>Live Marine Map Telemetry — Chennai Offshore</span>
      </div>

      {/* Layer Toggle Control Panel */}
      <div className="absolute top-3 right-3 z-[1000] p-2.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-cyan-500/30 text-xs text-slate-200 shadow-xl space-y-1.5 w-44">
        <div className="flex items-center gap-1.5 font-bold text-cyan-400 pb-1 border-b border-slate-800">
          <Layers className="w-3.5 h-3.5" />
          <span>Map Layers</span>
        </div>
        <label className="flex items-center justify-between cursor-pointer hover:text-cyan-300">
          <span>Fishing Zones</span>
          <input
            type="checkbox"
            checked={layers.zones}
            onChange={(e) => setLayers({ ...layers, zones: e.target.checked })}
            className="accent-cyan-500 rounded"
          />
        </label>
        <label className="flex items-center justify-between cursor-pointer hover:text-cyan-300">
          <span>Optimized Route</span>
          <input
            type="checkbox"
            checked={layers.route}
            onChange={(e) => setLayers({ ...layers, route: e.target.checked })}
            className="accent-cyan-500 rounded"
          />
        </label>
        <label className="flex items-center justify-between cursor-pointer hover:text-cyan-300">
          <span>Safety Bubble ({safetyBubbleRadiusKm}km)</span>
          <input
            type="checkbox"
            checked={layers.safetyBubble}
            onChange={(e) => setLayers({ ...layers, safetyBubble: e.target.checked })}
            className="accent-cyan-500 rounded"
          />
        </label>
        <label className="flex items-center justify-between cursor-pointer hover:text-cyan-300">
          <span>Cyclone & Path</span>
          <input
            type="checkbox"
            checked={layers.cyclone}
            onChange={(e) => setLayers({ ...layers, cyclone: e.target.checked })}
            className="accent-cyan-500 rounded"
          />
        </label>
      </div>

      {/* Main Leaflet Map */}
      <MapContainer
        center={[13.12, 80.40]}
        zoom={10}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a> dark'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* Vessel Marker */}
        {layers.vessel && (
          <Marker position={chennaiHarbor} icon={vesselIcon}>
            <Tooltip permanent direction="top" offset={[0, -16]} className="bg-slate-900 border border-cyan-500 text-cyan-300 font-bold text-xs">
              Vessel (Chennai Harbor)
            </Tooltip>
          </Marker>
        )}

        {/* Personal Safety Radius Circle */}
        {layers.safetyBubble && (
          <Circle
            center={chennaiHarbor}
            radius={safetyBubbleRadiusKm * 1000}
            pathOptions={{
              color: '#06b6d4',
              fillColor: '#06b6d4',
              fillOpacity: 0.08,
              dashArray: '6, 6',
              weight: 1.5,
            }}
          />
        )}

        {/* Recommended Route Line */}
        {layers.route && (
          <Polyline
            positions={routePolyline}
            pathOptions={{
              color: '#38bdf8',
              weight: 3.5,
              opacity: 0.9,
              dashArray: '8, 8',
            }}
          />
        )}

        {/* Fishing Zones Markers & Circles */}
        {layers.zones &&
          FISHING_ZONES.map((zone) => {
            const color = zone.suitabilityScore >= 80 ? '#10b981' : zone.suitabilityScore >= 50 ? '#f59e0b' : '#ef4444';
            return (
              <React.Fragment key={zone.id}>
                <Circle
                  center={[zone.lat, zone.lng]}
                  radius={7000}
                  pathOptions={{
                    color,
                    fillColor: color,
                    fillOpacity: zone.isRecommended ? 0.25 : 0.12,
                    weight: zone.isRecommended ? 2.5 : 1,
                  }}
                />
                <Marker
                  position={[zone.lat, zone.lng]}
                  icon={createZoneIcon(zone.suitabilityScore, !!zone.isRecommended)}
                  eventHandlers={{
                    click: () => onSelectZone && onSelectZone(zone),
                  }}
                >
                  <Popup>
                    <div className="p-1 space-y-2 text-slate-100 min-w-44">
                      <div className="font-bold text-sm text-cyan-300">{zone.name}</div>
                      <div className="flex justify-between text-xs">
                        <span>Suitability:</span>
                        <span className="font-bold" style={{ color }}>{zone.suitabilityScore}%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Distance:</span>
                        <span className="font-semibold">{zone.distanceKm} km</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span>Est. Travel:</span>
                        <span className="font-semibold">{zone.travelTimeMin} min</span>
                      </div>
                      <button
                        onClick={() => onSelectZone && onSelectZone(zone)}
                        className="w-full mt-2 py-1 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold text-xs rounded transition-all shadow"
                      >
                        Select Zone
                      </button>
                    </div>
                  </Popup>
                </Marker>
              </React.Fragment>
            );
          })}

        {/* Cyclone Marker & Danger Radius */}
        {layers.cyclone && (
          <>
            <Circle
              center={[CYCLONE_VARUNA.lat, CYCLONE_VARUNA.lng]}
              radius={CYCLONE_VARUNA.dangerRadiusKm * 1000}
              pathOptions={{
                color: '#ef4444',
                fillColor: '#ef4444',
                fillOpacity: 0.18,
                weight: 2,
              }}
            />
            {layers.cyclonePath && (
              <Polyline
                positions={CYCLONE_VARUNA.trajectory}
                pathOptions={{
                  color: '#f87171',
                  weight: 2,
                  dashArray: '4, 4',
                }}
              />
            )}
            <Marker position={[CYCLONE_VARUNA.lat, CYCLONE_VARUNA.lng]} icon={cycloneIcon}>
              <Popup>
                <div className="p-1 text-slate-100 space-y-1">
                  <div className="font-bold text-red-400 text-sm">{CYCLONE_VARUNA.name}</div>
                  <div className="text-xs">Wind: {CYCLONE_VARUNA.windSpeedKmh} km/h</div>
                  <div className="text-xs">Danger Radius: {CYCLONE_VARUNA.dangerRadiusKm} km</div>
                  <div className="text-xs text-slate-300 mt-1">{CYCLONE_VARUNA.status}</div>
                </div>
              </Popup>
            </Marker>
          </>
        )}
      </MapContainer>

      {/* Bottom Map Legend Overlay */}
      <div className="absolute bottom-3 left-3 z-[1000] flex flex-wrap items-center gap-3 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-cyan-500/20 text-xs">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
          <span className="text-slate-300">High (80%+)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
          <span className="text-slate-300">Moderate (50-79%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
          <span className="text-slate-300">Low (&lt;50%)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse"></span>
          <span className="text-slate-300">Cyclone Area</span>
        </div>
      </div>
    </div>
  );
};
