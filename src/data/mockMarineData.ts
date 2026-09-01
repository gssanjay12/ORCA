import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

export type IntentType =
  | 'GREETING'
  | 'WEATHER'
  | 'SAFETY'
  | 'CYCLONE'
  | 'MARINE_CONDITIONS'
  | 'ROUTE'
  | 'BORDER'
  | 'GEOFENCE'
  | 'FISHING_ZONE'
  | 'FISHING_RECOMMENDATION'
  | 'WHY_EXPLANATION'
  | 'GENERAL_MARINE'
  | 'UNKNOWN';

export interface MarineLocation {
  id: string;
  name: string;
  lat: number;
  lng: number;
  airTemp: number;
  sst: number;
  windSpeed: number;
  windDir: string;
  waveHeight: number;
  currentSpeed: number;
  humidity: number;
  visibility: number;
  weatherCondition: string;
  overallRisk: 'low' | 'moderate' | 'high' | 'extreme';
}

export interface FishingZone {
  id: string;
  name: string;
  lat: number;
  lng: number;
  suitabilityScore: number;
  confidence: number;
  distanceKm: number;
  travelTimeMin: number;
  riskLevel: 'low' | 'moderate' | 'high';
  borderSafety: 'safe' | 'caution' | 'restricted';
  borderDistanceKm: number;
  isRecommended?: boolean;
  isRestrictedExcluded?: boolean;
  factors: {
    sst: number;
    chlorophyll: number;
    current: number;
    weather: number;
    safety: number;
  };
  bestTimeWindow: string;
}

export interface HourlyForecast {
  time: string;
  hour: number;
  airTemp: number;
  sst: number;
  windSpeed: number;
  waveHeight: number;
  rainProb: number;
  risk: 'safe' | 'moderate' | 'windIncreasing' | 'caution';
}

export interface CycloneData {
  name: string;
  lat: number;
  lng: number;
  windSpeedKmh: number;
  dangerRadiusKm: number;
  distanceFromCoastKm: number;
  trajectory: Array<[number, number]>;
  status: string;
}

export interface MaritimeBoundaryDataset {
  imblPolyline: Array<[number, number]>;
  territorialLimitPolyline: Array<[number, number]>;
  restrictedNavalZone: {
    name: string;
    lat: number;
    lng: number;
    radiusKm: number;
  };
  vesselDistanceToIMBLKm: number;
  vesselBorderStatus: 'safe' | 'caution' | 'restricted';
}

export interface PolygonZone {
  id: string;
  name: string;
  type: 'SAFE' | 'CAUTION' | 'PROHIBITED' | 'HAZARD';
  polygon: Array<[number, number]>;
  severity: 'LOW' | 'MODERATE' | 'HIGH' | 'EXTREME';
  description: string;
}

export interface GeofenceState {
  currentZoneType: 'SAFE' | 'CAUTION' | 'PROHIBITED' | 'HAZARD';
  currentZoneName: string;
  distanceToRestrictedKm: number;
  distanceToHazardKm: number;
  isInsideProhibited: boolean;
  isInsideHazard: boolean;
  isApproachingRestricted: boolean;
  isApproachingHazard: boolean;
}

export interface DynamicAIResponse {
  intent: IntentType;
  summary: string;
  contextResolved?: string;
  recommendedZone?: string;
  suitabilityScore?: number;
  safetyRisk?: string;
  borderSafety?: 'safe' | 'caution' | 'restricted';
  distanceKm?: number;
  travelTimeMin?: number;
  bestTime?: string;
  reasons?: string[];
  whyExplanation?: {
    sstNote: string;
    chlorophyllNote: string;
    weatherNote: string;
    waveNote: string;
    cycloneNote: string;
  };
  weatherData?: {
    airTemp: number;
    windSpeed: number;
    waveHeight: number;
    rainProb: number;
    forecastWindow: string;
  };
  cycloneData?: CycloneData;
  routeData?: {
    from: string;
    to: string;
    distanceKm: number;
    travelTimeMin: number;
    routeRisk: string;
    isAlternativeDetour?: boolean;
  };
  marineData?: {
    sst: number;
    chlorophyllIndex: number;
    currentSpeed: number;
    visibilityKm: number;
  };
  borderData?: {
    status: 'safe' | 'caution' | 'restricted';
    distanceToIMBLKm: number;
    nearestSafeZone: string;
    restrictedZoneName: string;
  };
  geofenceData?: GeofenceState;
}

export interface ChatHistoryMessage {
  id: string;
  sender: 'user' | 'orca';
  text?: string;
  recommendation?: DynamicAIResponse;
  timestamp: string;
}

export const COASTAL_LOCATIONS: MarineLocation[] = [
  {
    id: 'chennai',
    name: 'Chennai Coast',
    lat: 13.0827,
    lng: 80.2707,
    airTemp: 28.5,
    sst: 28.2,
    windSpeed: 14.2,
    windDir: 'NE',
    waveHeight: 1.1,
    currentSpeed: 0.8,
    humidity: 78,
    visibility: 10,
    weatherCondition: 'Partly Cloudy & Favorable',
    overallRisk: 'low',
  },
  {
    id: 'kochi',
    name: 'Kochi Port',
    lat: 9.9312,
    lng: 76.2673,
    airTemp: 29.1,
    sst: 28.8,
    windSpeed: 11.5,
    windDir: 'SW',
    waveHeight: 0.9,
    currentSpeed: 0.6,
    humidity: 82,
    visibility: 9,
    weatherCondition: 'Clear Calm Waters',
    overallRisk: 'low',
  },
  {
    id: 'vizag',
    name: 'Visakhapatnam Outer Bay',
    lat: 17.6868,
    lng: 83.2185,
    airTemp: 27.8,
    sst: 27.5,
    windSpeed: 19.4,
    windDir: 'E',
    waveHeight: 1.6,
    currentSpeed: 1.2,
    humidity: 75,
    visibility: 8,
    weatherCondition: 'Moderate Gusts',
    overallRisk: 'moderate',
  },
  {
    id: 'thoothukudi',
    name: 'Thoothukudi Deepsea',
    lat: 8.7642,
    lng: 78.1348,
    airTemp: 30.2,
    sst: 29.4,
    windSpeed: 16.0,
    windDir: 'SE',
    waveHeight: 1.3,
    currentSpeed: 0.9,
    humidity: 76,
    visibility: 10,
    weatherCondition: 'Fair Fishing Seas',
    overallRisk: 'low',
  },
];

export const FISHING_ZONES: FishingZone[] = [
  {
    id: 'zone-a',
    name: 'Zone A — North East Shelf (PFZ Alpha)',
    lat: 13.2500,
    lng: 80.4500,
    suitabilityScore: 87,
    confidence: 94,
    distanceKm: 18.4,
    travelTimeMin: 52,
    riskLevel: 'low',
    borderSafety: 'safe',
    borderDistanceKm: 38.5,
    isRecommended: true,
    bestTimeWindow: '06:00 – 11:00 AM',
    factors: {
      sst: 91,
      chlorophyll: 88,
      current: 82,
      weather: 90,
      safety: 85,
    },
  },
  {
    id: 'zone-b',
    name: 'Zone B — Marina Deepsea Trench',
    lat: 13.0200,
    lng: 80.3800,
    suitabilityScore: 64,
    confidence: 86,
    distanceKm: 12.1,
    travelTimeMin: 35,
    riskLevel: 'moderate',
    borderSafety: 'safe',
    borderDistanceKm: 24.2,
    isRecommended: false,
    bestTimeWindow: '07:00 – 10:30 AM',
    factors: {
      sst: 70,
      chlorophyll: 65,
      current: 60,
      weather: 80,
      safety: 75,
    },
  },
  {
    id: 'zone-c',
    name: 'Zone C — Coromandel South Reef',
    lat: 12.8000,
    lng: 80.4200,
    suitabilityScore: 42,
    confidence: 79,
    distanceKm: 31.5,
    travelTimeMin: 88,
    riskLevel: 'moderate',
    borderSafety: 'caution',
    borderDistanceKm: 14.1,
    isRecommended: false,
    bestTimeWindow: '05:30 – 08:30 AM',
    factors: {
      sst: 45,
      chlorophyll: 40,
      current: 38,
      weather: 60,
      safety: 55,
    },
  },
  {
    id: 'zone-d',
    name: 'Zone D — Pulicat Outer Channel (Restricted Sector)',
    lat: 13.4000,
    lng: 80.5200,
    suitabilityScore: 29,
    confidence: 72,
    distanceKm: 44.8,
    travelTimeMin: 120,
    riskLevel: 'high',
    borderSafety: 'restricted',
    borderDistanceKm: 2.8,
    isRecommended: false,
    isRestrictedExcluded: true,
    bestTimeWindow: 'RESTRICTED / NOT RECOMMENDED',
    factors: {
      sst: 30,
      chlorophyll: 25,
      current: 28,
      weather: 40,
      safety: 15,
    },
  },
];

export const HOURLY_FORECAST_48H: HourlyForecast[] = [
  { time: '00:00', hour: 0, airTemp: 26.5, sst: 27.8, windSpeed: 10, waveHeight: 0.8, rainProb: 10, risk: 'safe' },
  { time: '03:00', hour: 3, airTemp: 26.0, sst: 27.7, windSpeed: 11, waveHeight: 0.9, rainProb: 12, risk: 'safe' },
  { time: '06:00', hour: 6, airTemp: 27.2, sst: 28.0, windSpeed: 12, waveHeight: 1.0, rainProb: 15, risk: 'safe' },
  { time: '09:00', hour: 9, airTemp: 28.5, sst: 28.2, windSpeed: 14, waveHeight: 1.1, rainProb: 18, risk: 'safe' },
  { time: '12:00', hour: 12, airTemp: 30.1, sst: 28.5, windSpeed: 18, waveHeight: 1.4, rainProb: 25, risk: 'moderate' },
  { time: '15:00', hour: 15, airTemp: 29.8, sst: 28.6, windSpeed: 23, waveHeight: 1.8, rainProb: 40, risk: 'windIncreasing' },
  { time: '18:00', hour: 18, airTemp: 28.2, sst: 28.4, windSpeed: 27, waveHeight: 2.2, rainProb: 65, risk: 'caution' },
  { time: '21:00', hour: 21, airTemp: 27.4, sst: 28.1, windSpeed: 24, waveHeight: 1.9, rainProb: 50, risk: 'windIncreasing' },
  { time: '24:00 (T+1)', hour: 24, airTemp: 26.8, sst: 27.9, windSpeed: 16, waveHeight: 1.3, rainProb: 30, risk: 'moderate' },
  { time: '03:00', hour: 27, airTemp: 26.2, sst: 27.8, windSpeed: 13, waveHeight: 1.0, rainProb: 20, risk: 'safe' },
  { time: '06:00', hour: 30, airTemp: 27.5, sst: 28.1, windSpeed: 12, waveHeight: 0.9, rainProb: 15, risk: 'safe' },
  { time: '09:00', hour: 33, airTemp: 28.9, sst: 28.3, windSpeed: 14, waveHeight: 1.1, rainProb: 15, risk: 'safe' },
  { time: '12:00', hour: 36, airTemp: 30.4, sst: 28.7, windSpeed: 17, waveHeight: 1.3, rainProb: 20, risk: 'safe' },
  { time: '15:00', hour: 39, airTemp: 29.5, sst: 28.5, windSpeed: 19, waveHeight: 1.5, rainProb: 30, risk: 'moderate' },
  { time: '18:00', hour: 42, airTemp: 28.0, sst: 28.2, windSpeed: 21, waveHeight: 1.7, rainProb: 35, risk: 'windIncreasing' },
  { time: '21:00', hour: 45, airTemp: 27.1, sst: 28.0, windSpeed: 15, waveHeight: 1.2, rainProb: 20, risk: 'safe' },
  { time: '48:00 (T+2)', hour: 48, airTemp: 26.5, sst: 27.9, windSpeed: 12, waveHeight: 1.0, rainProb: 15, risk: 'safe' },
];

export const CYCLONE_VARUNA: CycloneData = {
  name: 'Cyclonic Storm VARUNA',
  lat: 12.4000,
  lng: 81.1000,
  windSpeedKmh: 85,
  dangerRadiusKm: 65,
  distanceFromCoastKm: 145,
  trajectory: [
    [12.4, 81.1],
    [12.8, 81.6],
    [13.3, 82.2],
    [13.9, 82.9],
  ],
  status: 'Moving North-East away from Chennai Harbor. Low direct landfall risk.',
};

export const MARITIME_BOUNDARIES: MaritimeBoundaryDataset = {
  imblPolyline: [
    [12.0, 81.5],
    [12.5, 81.2],
    [13.0, 80.9],
    [13.6, 80.7],
    [14.0, 80.5],
  ],
  territorialLimitPolyline: [
    [12.2, 80.7],
    [12.7, 80.5],
    [13.2, 80.4],
    [13.8, 80.3],
  ],
  restrictedNavalZone: {
    name: 'Pulicat Naval Prohibited Defense Zone',
    lat: 13.4000,
    lng: 80.5200,
    radiusKm: 12,
  },
  vesselDistanceToIMBLKm: 38.5,
  vesselBorderStatus: 'safe',
};

// 4 SIMULATED GEOFENCE POLYGON ZONES FOR CHENNAI OFFSHORE SECTOR
export const GEOFENCE_POLYGONS: PolygonZone[] = [
  {
    id: 'safe-zone-alpha',
    name: 'Permitted Sector Alpha (Zone A Waters)',
    type: 'SAFE',
    polygon: [
      [13.15, 80.35],
      [13.35, 80.38],
      [13.35, 80.50],
      [13.15, 80.48],
    ],
    severity: 'LOW',
    description: 'High-yield fishing waters with verified safe operating clearances.',
  },
  {
    id: 'caution-zone-buffer',
    name: 'Maritime Boundary Buffer Sector',
    type: 'CAUTION',
    polygon: [
      [13.00, 80.38],
      [13.15, 80.35],
      [13.15, 80.48],
      [13.00, 80.45],
    ],
    severity: 'MODERATE',
    description: 'Transition buffer area approaching International Maritime Boundary Line.',
  },
  {
    id: 'prohibited-naval-sector',
    name: 'Pulicat Naval Prohibited Defense Sector',
    type: 'PROHIBITED',
    polygon: [
      [13.35, 80.46],
      [13.48, 80.46],
      [13.48, 80.60],
      [13.35, 80.60],
    ],
    severity: 'EXTREME',
    description: 'Strictly prohibited naval defense territory. Civilian fishing forbidden.',
  },
  {
    id: 'hazard-cyclone-swell',
    name: 'Cyclone VARUNA High Swell Hazard Sector',
    type: 'HAZARD',
    polygon: [
      [12.75, 80.42],
      [12.95, 80.42],
      [12.95, 80.58],
      [12.75, 80.58],
    ],
    severity: 'HIGH',
    description: 'Active hazard area affected by high wave swell and squall wind gusts.',
  },
];

// SIMULATION WAYPOINT TRACK FOR ANIMATED DEMO
export const SIMULATION_WAYPOINTS: Array<[number, number]> = [
  [13.0827, 80.2707], // 1. Chennai Harbor (SAFE)
  [13.1200, 80.3200], // 2. Heading East-North-East (SAFE)
  [13.2000, 80.4000], // 3. Zone A Alpha (SAFE)
  [13.1000, 80.4200], // 4. Approaching Boundary Buffer (CAUTION)
  [13.3800, 80.4900], // 5. Entering Pulicat Prohibited Defense Sector (PROHIBITED ALERT)
  [12.8500, 80.4800], // 6. Entering Cyclone Swell Hazard Sector (HAZARD ALERT)
  [13.2500, 80.4500], // 7. Returning to Zone A Safe Waters (SAFE)
];

// POINT-IN-POLYGON RAY CASTING ALGORITHM
export function isPointInPolygon(point: [number, number], polygon: Array<[number, number]>): boolean {
  const x = point[0];
  const y = point[1];
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0];
    const yi = polygon[i][1];
    const xj = polygon[j][0];
    const yj = polygon[j][1];

    const intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
}

// HAVERSINE DISTANCE HELPER (KM)
export function getDistanceKm(coord1: [number, number], coord2: [number, number]): number {
  const R = 6371; // Earth radius in KM
  const dLat = ((coord2[0] - coord1[0]) * Math.PI) / 180;
  const dLng = ((coord2[1] - coord1[1]) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((coord1[0] * Math.PI) / 180) *
      Math.cos((coord2[0] * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Number((R * c).toFixed(1));
}

// CALCULATE GEOFENCE STATE FOR ANY GIVEN VESSEL POSITION
export function evaluateVesselGeofence(vesselPos: [number, number]): GeofenceState {
  let currentZoneType: 'SAFE' | 'CAUTION' | 'PROHIBITED' | 'HAZARD' = 'SAFE';
  let currentZoneName = 'Permitted Domestic Waters (Chennai Sector)';

  const prohibitedPoly = GEOFENCE_POLYGONS.find((p) => p.type === 'PROHIBITED')!;
  const hazardPoly = GEOFENCE_POLYGONS.find((p) => p.type === 'HAZARD')!;
  const cautionPoly = GEOFENCE_POLYGONS.find((p) => p.type === 'CAUTION')!;
  const safePoly = GEOFENCE_POLYGONS.find((p) => p.type === 'SAFE')!;

  const isInsideProhibited = isPointInPolygon(vesselPos, prohibitedPoly.polygon);
  const isInsideHazard = isPointInPolygon(vesselPos, hazardPoly.polygon);
  const isInsideCaution = isPointInPolygon(vesselPos, cautionPoly.polygon);
  const isInsideSafe = isPointInPolygon(vesselPos, safePoly.polygon);

  if (isInsideProhibited) {
    currentZoneType = 'PROHIBITED';
    currentZoneName = prohibitedPoly.name;
  } else if (isInsideHazard) {
    currentZoneType = 'HAZARD';
    currentZoneName = hazardPoly.name;
  } else if (isInsideCaution) {
    currentZoneType = 'CAUTION';
    currentZoneName = cautionPoly.name;
  } else if (isInsideSafe) {
    currentZoneType = 'SAFE';
    currentZoneName = safePoly.name;
  }

  // Calculate distances to prohibited and hazard centers
  const distToRestricted = getDistanceKm(vesselPos, [13.4000, 80.5200]);
  const distToHazard = getDistanceKm(vesselPos, [12.8500, 80.5000]);

  const isApproachingRestricted = !isInsideProhibited && distToRestricted <= 15;
  const isApproachingHazard = !isInsideHazard && distToHazard <= 15;

  return {
    currentZoneType,
    currentZoneName,
    distanceToRestrictedKm: distToRestricted,
    distanceToHazardKm: distToHazard,
    isInsideProhibited,
    isInsideHazard,
    isApproachingRestricted,
    isApproachingHazard,
  };
}

/**
 * Detect Intent and resolve multi-turn conversation context
 */
export function detectIntentAndContext(
  query: string,
  history: ChatHistoryMessage[] = []
): { intent: IntentType; resolvedContext?: string } {
  const q = query.toLowerCase().trim();

  // Check for greetings
  if (
    /^(hi|hello|vanakkam|வணக்கம்|नमस्ते|நமஸ்காரம்|hey|greetings|good morning)/i.test(q)
  ) {
    return { intent: 'GREETING' };
  }

  // Check for Geofence / Prohibited Zone / Danger Intent
  if (
    /geofence|prohibited|danger|restricted zone|hazard ahead|தடைசெய்யப்பட்ட|ஆபத்து|ஜியோஃபென்சிங்|प्रतिबंधित|निषेध/i.test(
      q
    )
  ) {
    return { intent: 'GEOFENCE', resolvedContext: 'Geofence Polygon & Danger Detection' };
  }

  // Check for Border / Maritime Boundary Intent
  if (
    /border|boundary|imbl|territorial|எல்லை|எல்லைக்கோட்டிலிருந்து|सीमा|సరిహద్దు/i.test(
      q
    )
  ) {
    return { intent: 'BORDER', resolvedContext: 'IMBL Boundary & Defense Zone Check' };
  }

  // Check for "Why" / Explanation Intent
  if (
    /why|ஏன்|ஏனென்றால்|காரணம்|கணக்கீடு|பரிந்துரை பண்ணி|kyun|enduku|reason/i.test(q)
  ) {
    return { intent: 'WHY_EXPLANATION', resolvedContext: 'Zone A (North East Shelf)' };
  }

  // Check for Route / Navigation Intent
  if (/route|distance|travel|how to reach|பாதை|தூரம்|பயணம்|rasta|dhooram/i.test(q)) {
    return { intent: 'ROUTE', resolvedContext: 'Chennai Harbor ➔ Zone A (18.4 km)' };
  }

  // Check for Cyclone Intent
  if (/cyclone|storm|varuna|புயல்|வருணா|சுழல்|toofan|thufan/i.test(q)) {
    return { intent: 'CYCLONE', resolvedContext: 'Cyclonic Storm VARUNA (145 km offshore)' };
  }

  // Check for Weather Intent
  if (
    /weather|rain|wind|temperature|forecast|வானிலை|மழை|காற்று|வெப்பநிலை|mausam|havaman/i.test(
      q
    )
  ) {
    return { intent: 'WEATHER', resolvedContext: 'Chennai Offshore Forecast (Tomorrow Morning)' };
  }

  // Check for Safety Intent
  if (/safe|safety|risk|hazard|பாதுகாப்பானதா|பாதுகாப்பு|அபாயம்|surakshit|badram/i.test(q)) {
    const hasPriorZoneRec = history.some((m) => m.recommendation?.recommendedZone);
    const resolved = hasPriorZoneRec ? 'Referring to Zone A (North East Shelf)' : undefined;
    return { intent: 'SAFETY', resolvedContext: resolved };
  }

  // Check for Marine Conditions Intent
  if (
    /sst|chlorophyll|current|waves|sea condition|குளோரோபில்|வெப்பநிலை|நீரோட்டம்|கடல் நிலை/i.test(
      q
    )
  ) {
    return { intent: 'MARINE_CONDITIONS', resolvedContext: 'ISRO Ocean Color & Satellite Telemetry' };
  }

  // Check for Fishing Zone Intent
  if (
    /fishing zone|best zone|where to fish|எங்கு மீன்பிடிக்க|மீன்பிடி மண்டலம்|machli/i.test(
      q
    )
  ) {
    return { intent: 'FISHING_ZONE', resolvedContext: 'PFZ Alpha — Zone A' };
  }

  // Check for Overall Fishing Recommendation Intent
  if (
    /recommend|suggest|where should i go|எந்த இடத்திற்கு செல்லலாம்|பரிந்துரை/i.test(
      q
    )
  ) {
    return { intent: 'FISHING_RECOMMENDATION' };
  }

  // Check general marine terms
  if (/ocean|sea|coast|port|harbor|கடல்|துறைமுகம்|samudra/i.test(q)) {
    return { intent: 'GENERAL_MARINE' };
  }

  return { intent: 'UNKNOWN' };
}

/**
 * Generate Dynamic AI Response specific to detected Intent and Language
 */
export function generateDynamicAIResponse(
  query: string,
  lang: Language,
  isOffline: boolean,
  history: ChatHistoryMessage[] = [],
  currentVesselPos: [number, number] = [13.0827, 80.2707]
): DynamicAIResponse {
  const { intent, resolvedContext } = detectIntentAndContext(query, history);
  const t = translations[lang].ai.intents;
  const prefix = isOffline ? '[OFFLINE LOCAL PACKAGE] ' : '';

  const zoneA = FISHING_ZONES[0];
  const chennai = COASTAL_LOCATIONS[0];
  const geofenceState = evaluateVesselGeofence(currentVesselPos);

  const whyExpl = {
    sstNote:
      lang === 'ta'
        ? 'கடல் பரப்பு வெப்பநிலை 28.2°C ஆக உள்ளது, இது வஞ்சிரம் மற்றும் சூரை மீன்களுக்கு ஏற்ற சூழலாகும்.'
        : 'Sea Surface Temp 28.2°C forms an optimal boundary for pelagic fish species.',
    chlorophyllNote:
      lang === 'ta'
        ? 'செயற்கைக்கோள் தரவு 88% உயர் குளோரோபில் அளவைக் காட்டுகிறது.'
        : 'Satellite imagery shows 88% high chlorophyll index indicating feeding plankton.',
    weatherNote:
      lang === 'ta'
        ? 'காலை நேரத்தில் மிதமான காற்று (14.2 km/h) மற்றும் தெளிவான வானிலை நிலவுகிறது.'
        : 'Favorable morning light winds (14.2 km/h NE) and clear sky.',
    waveNote:
      lang === 'ta'
        ? 'அலை உயரம் 1.1 மீட்டராக இருப்பதால் படகுகளுக்கு பாதுகாப்பானது.'
        : 'Swell height of 1.1m is safe for trawler navigation.',
    cycloneNote:
      lang === 'ta'
        ? 'மண்டலம் A கடற்படை தடைசெய்யப்பட்ட மண்டலங்களிலிருந்து பாதுகாப்பான தூரத்தில் அமைந்துள்ளது.'
        : 'Zone A is safely outside prohibited naval defense and cyclone hazard polygons.',
  };

  switch (intent) {
    case 'GREETING':
      return {
        intent: 'GREETING',
        summary: `${prefix}${t.greeting}`,
      };

    case 'GEOFENCE':
      return {
        intent: 'GEOFENCE',
        summary: `${prefix}${
          geofenceState.isInsideProhibited
            ? lang === 'ta'
              ? '⚠ எச்சரிக்கை: உங்கள் படகு தற்போது கடற்படை தடைசெய்யப்பட்ட மண்டலத்தில் நுழைந்துள்ளது! உடனடியாக பாதுகாப்பான பகுதிக்கு திரும்பவும்.'
              : '⚠ ALERT: Your vessel is currently inside a PROHIBITED NAVAL DEFENSE ZONE. Move back toward permitted domestic waters immediately.'
            : geofenceState.isInsideHazard
            ? lang === 'ta'
              ? '⚠ எச்சரிக்கை: உங்கள் படகு அதிக அலை மற்றும் புயல் ஆபத்து நிறைந்த பகுதியில் உள்ளது.'
              : '⚠ ALERT: Your vessel is currently inside an ACTIVE MARINE HAZARD ZONE. Exercise extreme caution.'
            : t.geofenceSummary
        }`,
        contextResolved: resolvedContext,
        geofenceData: geofenceState,
      };

    case 'BORDER':
      return {
        intent: 'BORDER',
        summary: `${prefix}${t.borderSummary}`,
        contextResolved: resolvedContext,
        borderSafety: 'safe',
        borderData: {
          status: 'safe',
          distanceToIMBLKm: MARITIME_BOUNDARIES.vesselDistanceToIMBLKm,
          nearestSafeZone: 'Zone A — North East Shelf',
          restrictedZoneName: MARITIME_BOUNDARIES.restrictedNavalZone.name,
        },
      };

    case 'WEATHER':
      return {
        intent: 'WEATHER',
        summary: `${prefix}${t.weatherSummary}`,
        contextResolved: resolvedContext,
        weatherData: {
          airTemp: chennai.airTemp,
          windSpeed: chennai.windSpeed,
          waveHeight: chennai.waveHeight,
          rainProb: 18,
          forecastWindow: '06:00 – 11:00 AM (Safe)',
        },
      };

    case 'SAFETY':
      return {
        intent: 'SAFETY',
        summary: `${prefix}${t.safetySummary}`,
        contextResolved: resolvedContext || 'Zone A (North East Shelf)',
        safetyRisk: lang === 'ta' ? 'குறைந்த அபாயம் (LOW)' : 'LOW RISK',
        borderSafety: 'safe',
        reasons: [
          lang === 'ta'
            ? 'காற்றின் வேகம் (14.2 km/h) மற்றும் அலைகள் (1.1m) பாதுகாப்பான வரம்பில் உள்ளன.'
            : 'Wind speed (14.2 km/h) and wave height (1.1m) remain safe until 14:00.',
          lang === 'ta'
            ? 'உங்கள் படகு சர்வதேச எல்லைக்கோட்டிலிருந்து 38.5 கி.மீ பாதுகாப்பான தூரத்தில் உள்ளது.'
            : 'Vessel is 38.5 km safely inside international maritime boundary limits.',
          lang === 'ta'
            ? 'வருணா புயல் மண்டலம் A-விலிருந்து 82 கி.மீ தொலைவில் வடகிழக்காகச் செல்கிறது.'
            : 'Cyclone VARUNA is moving North-East away from Zone A with 82km margin.',
        ],
      };

    case 'CYCLONE':
      return {
        intent: 'CYCLONE',
        summary: `${prefix}${t.cycloneSummary}`,
        contextResolved: resolvedContext,
        cycloneData: CYCLONE_VARUNA,
      };

    case 'ROUTE':
      return {
        intent: 'ROUTE',
        summary: `${prefix}${t.routeSummary}`,
        contextResolved: resolvedContext,
        routeData: {
          from: 'Chennai Harbor Port',
          to: 'Zone A — North East Shelf',
          distanceKm: zoneA.distanceKm,
          travelTimeMin: zoneA.travelTimeMin,
          routeRisk: 'LOW RISK',
          isAlternativeDetour: false,
        },
      };

    case 'MARINE_CONDITIONS':
      return {
        intent: 'MARINE_CONDITIONS',
        summary: `${prefix}${t.marineSummary}`,
        contextResolved: resolvedContext,
        marineData: {
          sst: chennai.sst,
          chlorophyllIndex: zoneA.factors.chlorophyll,
          currentSpeed: chennai.currentSpeed,
          visibilityKm: chennai.visibility,
        },
      };

    case 'WHY_EXPLANATION':
      return {
        intent: 'WHY_EXPLANATION',
        summary: `${prefix}${t.whySummary}`,
        contextResolved: resolvedContext,
        whyExplanation: whyExpl,
      };

    case 'FISHING_ZONE':
    case 'FISHING_RECOMMENDATION':
    case 'GENERAL_MARINE':
    default:
      return {
        intent,
        summary: `${prefix}${
          intent === 'UNKNOWN'
            ? t.unknownClarification
            : lang === 'ta'
            ? 'நாளை காலை மீன்பிடிக்க மண்டலம் A (Zone A — North East Shelf) மிகச்சிறந்த இடமாகும். 87% பொருத்தமும் குறைந்த அபாயமும் கொண்டது.'
            : 'Zone A (North East Shelf) is highly recommended for tomorrow morning with 87% suitability and Low safety risk.'
        }`,
        contextResolved: resolvedContext,
        recommendedZone: 'Zone A — North East Shelf',
        suitabilityScore: 87,
        safetyRisk: lang === 'ta' ? 'குறைந்த அபாயம் (LOW)' : 'LOW RISK',
        borderSafety: 'safe',
        distanceKm: 18.4,
        travelTimeMin: 52,
        bestTime: '06:00 – 11:00 AM',
        reasons: [
          lang === 'ta'
            ? 'கடல் பரப்பு வெப்பநிலை (SST 28.2°C) மீன்கள் تجمع ஆக மிகவும் சாதகமாக உள்ளது.'
            : 'Favorable Sea Surface Temperature (SST 28.2°C) supports pelagic fish.',
          lang === 'ta'
            ? 'குளோரோபில் செறிவு (88%) அதிக அளவிலான இரையை (Plankton) குறிக்கிறது.'
            : 'High Chlorophyll concentration (88%) indicates rich feeding zones.',
          lang === 'ta'
            ? 'ஜியோஃபென்சிங் நிலை: பாதுகாப்பானது (SAFE - 6.4 km from prohibited defense zone).'
            : 'Geofence Status: SAFE (6.4 km from prohibited defense zone).',
          lang === 'ta'
            ? 'காலை 06:00 - 11:00 மணி வரை அலை மற்றும் காற்று பாதுகாப்பான எல்லைக்குள் உள்ளது.'
            : 'Optimal weather window from 06:00 to 11:00 AM with gentle winds.',
        ],
        whyExplanation: whyExpl,
      };
  }
}
