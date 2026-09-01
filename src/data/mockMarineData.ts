import type { Language } from '../i18n/translations';
import { translations } from '../i18n/translations';

export type IntentType =
  | 'GREETING'
  | 'WEATHER'
  | 'SAFETY'
  | 'CYCLONE'
  | 'MARINE_CONDITIONS'
  | 'ROUTE'
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
  isRecommended?: boolean;
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

export interface DynamicAIResponse {
  intent: IntentType;
  summary: string;
  contextResolved?: string;
  recommendedZone?: string;
  suitabilityScore?: number;
  safetyRisk?: string;
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
  };
  marineData?: {
    sst: number;
    chlorophyllIndex: number;
    currentSpeed: number;
    visibilityKm: number;
  };
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
    name: 'Zone D — Pulicat Outer Channel',
    lat: 13.4000,
    lng: 80.5200,
    suitabilityScore: 29,
    confidence: 72,
    distanceKm: 44.8,
    travelTimeMin: 120,
    riskLevel: 'high',
    isRecommended: false,
    bestTimeWindow: 'Not Recommended',
    factors: {
      sst: 30,
      chlorophyll: 25,
      current: 28,
      weather: 40,
      safety: 35,
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

/**
 * Detect Intent and resolve multi-turn conversation context
 */
export function detectIntentAndContext(
  query: string,
  history: ChatHistoryMessage[] = []
): { intent: IntentType; resolvedContext?: string } {
  const q = query.toLowerCase().trim();

  // Check for greetings first
  if (
    /^(hi|hello|vanakkam|வணக்கம்|नमस्ते|நமస్కారం|hey|greetings|good morning)/i.test(q)
  ) {
    return { intent: 'GREETING' };
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
    // Check if context has prior fishing recommendation
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

  // Check for Fishing Zone / Specific Zone Intent
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
  history: ChatHistoryMessage[] = []
): DynamicAIResponse {
  const { intent, resolvedContext } = detectIntentAndContext(query, history);
  const t = translations[lang].ai.intents;
  const prefix = isOffline ? '[OFFLINE LOCAL PACKAGE] ' : '';

  const zoneA = FISHING_ZONES[0];
  const chennai = COASTAL_LOCATIONS[0];

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
        ? 'வருணா புயல் 145 கி.மீ தொலைவில் வடகிழக்கு திசையில் நகர்வதால் ஆபத்து இல்லை.'
        : 'Cyclone VARUNA is 145 km East-Southeast moving away, leaving Zone A safe.',
  };

  switch (intent) {
    case 'GREETING':
      return {
        intent: 'GREETING',
        summary: `${prefix}${t.greeting}`,
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
        reasons: [
          lang === 'ta'
            ? 'காற்றின் வேகம் (14.2 km/h) மற்றும் அலைகள் (1.1m) பாதுகாப்பான வரம்பில் உள்ளன.'
            : 'Wind speed (14.2 km/h) and wave height (1.1m) remain safe until 14:00.',
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
            ? 'காலை 06:00 - 11:00 மணி வரை அலை மற்றும் காற்று பாதுகாப்பான எல்லைக்குள் உள்ளது.'
            : 'Optimal weather window from 06:00 to 11:00 AM with gentle winds.',
        ],
        whyExplanation: whyExpl,
      };
  }
}
