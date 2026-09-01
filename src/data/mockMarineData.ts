import type { Language } from '../i18n/translations';

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

export interface AIResponse {
  recommendedZone: string;
  suitabilityScore: number;
  safetyRisk: string;
  distanceKm: number;
  travelTimeMin: number;
  bestTime: string;
  summary: string;
  reasons: string[];
  whyExplanation: {
    sstNote: string;
    chlorophyllNote: string;
    weatherNote: string;
    waveNote: string;
    cycloneNote: string;
  };
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

export function generateAIRecommendation(_query: string, lang: Language, isOffline: boolean): AIResponse {
  // Pre-configured localized responses for key queries
  const isTamil = lang === 'ta';
  const isHindi = lang === 'hi';
  const isTelugu = lang === 'te';

  let reasons: string[] = [];
  let why = {
    sstNote: '',
    chlorophyllNote: '',
    weatherNote: '',
    waveNote: '',
    cycloneNote: '',
  };

  if (isTamil) {
    reasons = [
      'கடல் பரப்பு வெப்பநிலை (SST 28.2°C) மீன்கள் تجمع ஆக மிகவும் சாதகமாக உள்ளது.',
      'குளோரோபில் செறிவு (88%) அதிக அளவிலான இரையை (Plankton) குறிக்கிறது.',
      'காலை 06:00 - 11:00 மணி வரை அலை உயரம் (1.1m) மற்றும் காற்றின் வேகம் பாதுகாப்பான எல்லைக்குள் உள்ளது.',
      'வருணா புயல் (Varuna Cyclone) மண்டலம் A-விலிருந்து 82 கி.மீ தொலைவில் வடகிழக்கு நோக்கிச் செல்வதால் எவ்வித ஆபத்தும் இல்லை.',
      'சென்னை துறைமுகத்திலிருந்து 18.4 கி.மீ மட்டுமே என்பதால் குறைந்த எரிபொருள் செலவில் அடையலாம்.',
    ];
    why = {
      sstNote: 'கடல் பரப்பு வெப்பநிலை 28.2°C ஆக உள்ளது, இது காலா, வஞ்சிரம் மற்றும் சூரை மீன்களுக்கு ஏற்ற உகந்த சூழலாகும்.',
      chlorophyllNote: 'செயற்கைக்கோள் தரவு உயர் குளோரோபில் குறியீட்டை (88%) காட்டுகிறது, இது அதிக மீன் கூட்டங்களைக் ஈர்க்கிறது.',
      weatherNote: 'காலை நேரங்களில் மிதமான காற்று (14.2 km/h) மற்றும் தெளிவான வானிலை நிலவுகிறது.',
      waveNote: 'அலை உயரம் 1.1 மீட்டராக இருப்பதால் சிறிய மற்றும் நடுத்தர படகுகளுக்கு பாதுகாப்பானது.',
      cycloneNote: 'வருணா புயல் 145 கி.மீ தொலைவில் வடகிழக்கு திசையில் நகர்வதால் சென்னை கடற்கரைக்கு நேரடி அச்சுறுத்தல் இல்லை.',
    };
  } else if (isHindi) {
    reasons = [
      'समुद्री सतह का तापमान (SST 28.2°C) मछली समूह के लिए अत्यधिक अनुकूल है।',
      'उच्च क्लोरोफिल सांद्रता (88%) भरपूर प्लवक (चारा) की उपस्थिति दर्शाती है।',
      'सुबह 06:00 से 11:00 बजे तक हवा और लहरें सुरक्षित सीमा में रहेंगी।',
      'वरुण चक्रवात 82 किमी दूर उत्तर-पूर्व की ओर बढ़ रहा है, जिससे कोई खतरा नहीं है।',
      'चेन्नई बंदरगाह से 18.4 किमी की दूरी पर होने के कारण ईंधन की बचत होगी।',
    ];
    why = {
      sstNote: 'समुद्री सतह का तापमान 28.2°C है, जो विभिन्न मछली प्रजातियों के लिए आदर्श है।',
      chlorophyllNote: 'सैटेलाइट डेटा 88% क्लोरोफिल दिखाता है, जिससे मछलियों का बड़ा झुंड यहाँ मौजूद है।',
      weatherNote: 'सुबह के समय 14.2 किमी/घंटा की गति से अनुकूल हवाएं चलेंगी।',
      waveNote: 'लहरों की ऊंचाई 1.1 मीटर रहने से नाव संचालन सुरक्षित रहेगा।',
      cycloneNote: 'चक्रवात वरुण 145 किमी दूर उत्तर-पूर्व की ओर बढ़ रहा है।',
    };
  } else if (isTelugu) {
    reasons = [
      'సముద్ర ఉపరితల ఉష్ణోగ్రత (SST 28.2°C) చేపల వేటకు చాలా అనుకూలంగా ఉంది.',
      'అధిక క్లోరోఫిల్ శాతం (88%) ఎక్కువ ఆహార లభ్యతను సూచిస్తుంది.',
      'ఉదయం 06:00 నుండి 11:00 వరకు అలల ఎత్తు (1.1మీ) మరియు గాలి వేగం సురక్షిత పరిమితిలో ఉంటాయి.',
      'వరుణ తుఫాను 82 కి.మీ దూరంలో ఈశాన్యం వైపు వెళుతుండటంతో ఎటువంటి ప్రమాదం లేదు.',
      'చెన్నై పోర్ట్ నుండి 18.4 కి.మీ దూరంలో ఉన్నందున తక్కువ ఇంధనంతో త్వరగా చేరుకోవచ్చు.',
    ];
    why = {
      sstNote: 'సముద్ర ఉపరితల ఉష్ణోగ్రత 28.2°C వద్ద అనుకూలంగా ఉంది.',
      chlorophyllNote: 'శాటిలైట్ డేటా 88% క్లోరోఫిల్ తీవ్రతను చూపుతోంది.',
      weatherNote: 'ఉదయం గాలి వేగం 14.2 కిమీ/గం వద్ద సురక్షితంగా ఉంటుంది.',
      waveNote: 'అలల ఎత్తు 1.1 మీటర్ల వద్ద స్థిరంగా ఉంటుంది.',
      cycloneNote: 'వరుణ తుఫాను ఈశాన్యం వైపు ప్రయాణిస్తోంది, ప్రమాదం లేదు.',
    };
  } else {
    reasons = [
      'Favorable Sea Surface Temperature (SST 28.2°C) supports dense pelagic fish aggregation.',
      'High Chlorophyll concentration (88%) indicates rich phytoplankton and active feeding zones.',
      'Optimal weather window from 06:00 to 11:00 AM with gentle winds (14.2 km/h) and low swell (1.1m).',
      'Cyclonic Storm VARUNA is 82 km East-Southeast moving away, leaving Zone A safe.',
      'Short travel distance of 18.4 km from Chennai Port ensures fuel efficiency.',
    ];
    why = {
      sstNote: 'Sea Surface Temperature of 28.2°C creates an optimal thermal boundary for mackerel, tuna, and seer fish.',
      chlorophyllNote: 'ISRO satellite chlorophyll imagery identifies high phytoplankton density feeding marine life.',
      weatherNote: 'Clear atmospheric conditions with mild light breeze (14.2 km/h NE).',
      waveNote: 'Significant wave height is 1.1m, safe for small to mid-sized fishing trawlers.',
      cycloneNote: 'Cyclone VARUNA is positioned 145km offshore moving North-East away from coast, outside 50km safety zone.',
    };
  }

  const prefix = isOffline ? '[OFFLINE LOCAL PACKAGE] ' : '';

  return {
    recommendedZone: 'Zone A — North East Shelf',
    suitabilityScore: 87,
    safetyRisk: isTamil ? 'குறைந்த அபாயம் (LOW)' : isHindi ? 'कम जोखिम (LOW)' : isTelugu ? 'తక్కువ ప్రమాదం (LOW)' : 'LOW RISK',
    distanceKm: 18.4,
    travelTimeMin: 52,
    bestTime: '06:00 – 11:00 AM',
    summary: `${prefix}${
      isTamil
        ? 'நாளை காலை மீன்பிடிக்க மண்டலம் A (Zone A — North East Shelf) மிகச்சிறந்த இடமாகும். 87% பொருத்தமும் குறைந்த அபாயமும் கொண்டது.'
        : isHindi
        ? 'कल सुबह के लिए जोन A (Zone A — North East Shelf) सबसे अच्छा मत्स्य क्षेत्र है। उपयुक्तता 87% और जोखिम कम है।'
        : isTelugu
        ? 'రేపు ఉదయం వేటకు జోన్ A (Zone A — North East Shelf) అత్యంత అనుకూలమైన ప్రాంతం. అనుకూలత 87% మరియు ప్రమాదం తక్కువ.'
        : 'Zone A (North East Shelf) is highly recommended for tomorrow morning with 87% suitability and Low safety risk.'
    }`,
    reasons,
    whyExplanation: why,
  };
}
