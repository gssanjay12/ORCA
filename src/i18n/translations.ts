export type Language = 'en' | 'ta' | 'hi' | 'te';

export interface TranslationSchema {
  appName: string;
  appSubtitle: string;
  onlineMode: string;
  offlineMode: string;
  cloudActive: string;
  localPackageActive: string;
  nav: {
    dashboard: string;
    aiAssistant: string;
    fishingZones: string;
    weather: string;
    marineConditions: string;
    safetyAlerts: string;
    missionPackage: string;
    architecture: string;
  };
  dashboard: {
    title: string;
    overview: string;
    temperature: string;
    windSpeed: string;
    waveHeight: string;
    sst: string;
    current: string;
    weatherCondition: string;
    recommendedZone: string;
    suitability: string;
    confidence: string;
    distance: string;
    travelTime: string;
    safetyRisk: string;
    activeWarnings: string;
    cycloneStatus: string;
    waveAlert: string;
    quickStats: string;
  };
  ai: {
    title: string;
    subtitle: string;
    inputPlaceholder: string;
    analyzing: string;
    suggestedQuestionsTitle: string;
    whyRecommendation: string;
    keyReasons: string;
    suitabilityScore: string;
    safetyRisk: string;
    recommendationTitle: string;
    contextResolvedNote: string;
    questions: {
      q1: string;
      q2: string;
      q3: string;
      q4: string;
      q5: string;
      q6: string;
      q7: string;
      q8: string;
    };
    intents: {
      greeting: string;
      weatherSummary: string;
      safetySummary: string;
      cycloneSummary: string;
      routeSummary: string;
      marineSummary: string;
      whySummary: string;
      unknownClarification: string;
    };
  };
  weather: {
    title: string;
    selectLocation: string;
    currentWeather: string;
    forecast48h: string;
    humidity: string;
    rainProbability: string;
    timeline: {
      safe: string;
      moderate: string;
      windIncreasing: string;
      caution: string;
    };
  };
  zones: {
    title: string;
    subtitle: string;
    suitabilityScore: string;
    chlorophyll: string;
    tempGradient: string;
    oceanCurrent: string;
    historicalSuitability: string;
    weatherFactor: string;
    safetyFactor: string;
    factorsTitle: string;
  };
  safety: {
    title: string;
    overallRisk: string;
    riskLevels: {
      low: string;
      moderate: string;
      high: string;
      extreme: string;
    };
    factors: {
      wind: string;
      waves: string;
      rain: string;
      current: string;
      cyclone: string;
      visibility: string;
    };
    cycloneAlertTitle: string;
    safetyBubble: string;
    safetyBubbleRadius: string;
    hazardAlert: string;
  };
  mission: {
    title: string;
    status: string;
    validity: string;
    ready: string;
    contains: string;
    weatherForecast: string;
    marineConditions: string;
    fishingPredictions: string;
    hazardData: string;
    mapData: string;
    modelInputs: string;
    generatePackage: string;
    downloadPackage: string;
    useOfflineMode: string;
    packageGeneratedSuccess: string;
  };
  architecture: {
    title: string;
    subtitle: string;
    userQuery: string;
    orcaCoordinator: string;
    weatherAgent: string;
    marineAgent: string;
    fishingAgent: string;
    safetyAgent: string;
    dataFusion: string;
    engine: string;
    dataSources: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  en: {
    appName: "ORCA",
    appSubtitle: "AI Marine Intelligence",
    onlineMode: "ONLINE",
    offlineMode: "OFFLINE",
    cloudActive: "Cloud Intelligence Active",
    localPackageActive: "48-Hour Mission Package Active",
    nav: {
      dashboard: "Dashboard",
      aiAssistant: "AI Assistant",
      fishingZones: "Fishing Zones",
      weather: "Weather",
      marineConditions: "Marine Conditions",
      safetyAlerts: "Safety & Alerts",
      missionPackage: "Mission Package",
      architecture: "Architecture",
    },
    dashboard: {
      title: "Marine & Fishing Telemetry",
      overview: "Current Marine Overview",
      temperature: "Air Temperature",
      windSpeed: "Wind Speed",
      waveHeight: "Wave Height",
      sst: "Sea Surface Temp (SST)",
      current: "Ocean Current",
      weatherCondition: "Weather Condition",
      recommendedZone: "Recommended Fishing Zone",
      suitability: "Suitability",
      confidence: "Confidence",
      distance: "Distance",
      travelTime: "Est. Travel Time",
      safetyRisk: "Safety Risk",
      activeWarnings: "Active Warnings",
      cycloneStatus: "Cyclone Status",
      waveAlert: "Wave & Wind Warning",
      quickStats: "Live Coast Sensor Data",
    },
    ai: {
      title: "ORCA AI Marine Assistant",
      subtitle: "Context-Aware Dynamic Conversational AI for Marine Navigation & Fishing",
      inputPlaceholder: "Ask about weather, safety, route to zone, cyclone, or fishing zones...",
      analyzing: "Detecting intent & processing marine context...",
      suggestedQuestionsTitle: "Suggested Questions",
      whyRecommendation: "Why this recommendation?",
      keyReasons: "Key Ocean & Weather Factors",
      suitabilityScore: "Fishing Suitability Score",
      safetyRisk: "Safety Risk Assessment",
      recommendationTitle: "ORCA Intelligence Analysis",
      contextResolvedNote: "Context Resolved: Referring to Zone A (North East Shelf)",
      questions: {
        q1: "Where should I fish tomorrow morning?",
        q2: "Is it safe to go fishing?",
        q3: "What is the weather forecast for tomorrow?",
        q4: "Show me the route to Zone A.",
        q5: "Why did you recommend Zone A?",
        q6: "Where is the cyclone currently located?",
        q7: "What are the marine conditions (SST & Chlorophyll)?",
        q8: "Vanakkam ORCA!",
      },
      intents: {
        greeting: "Greetings Captain! I am ORCA, your AI Marine Assistant. How can I assist your voyage today?",
        weatherSummary: "Weather Forecast for Chennai Coast: Clear skies tomorrow morning with 14.2 km/h NE winds and 1.1m wave swell. Favorable fishing window from 06:00 to 11:00 AM.",
        safetySummary: "Safety Risk Assessment for Zone A (North East Shelf): LOW RISK. Wind and swell conditions remain well within safe operating limits.",
        cycloneSummary: "Cyclonic Storm VARUNA is currently 145 km East-Southeast of Chennai moving North-East. No direct threat to Zone A.",
        routeSummary: "Optimal Route from Chennai Harbor to Zone A (North East Shelf): Distance 18.4 km, estimated travel duration 52 minutes. Route Safety: LOW RISK.",
        marineSummary: "Current Marine Parameters: Sea Surface Temperature (SST) is 28.2°C, Chlorophyll index is 88%, Current velocity is 0.8 knots SW.",
        whySummary: "Zone A is recommended due to optimal Sea Surface Temperature (28.2°C), high chlorophyll concentration (88%), gentle swell (1.1m), and safe distance from Cyclone VARUNA.",
        unknownClarification: "I didn't quite understand that. Would you like to check tomorrow's weather, safe fishing zones, cyclone status, or route navigation?",
      },
    },
    weather: {
      title: "Weather Prediction & 48-Hour Timeline",
      selectLocation: "Select Coastal Port Location",
      currentWeather: "Current Marine Weather",
      forecast48h: "48-Hour Timeline Forecast",
      humidity: "Humidity",
      rainProbability: "Rain Probability",
      timeline: {
        safe: "Safe Fishing Window",
        moderate: "Moderate Conditions",
        windIncreasing: "Increasing Wind Alert",
        caution: "High Caution Advised",
      },
    },
    zones: {
      title: "Fishing Zone Intelligence",
      subtitle: "Chlorophyll & SST driven Potential Fishing Zones (PFZ)",
      suitabilityScore: "Fishing Suitability",
      chlorophyll: "Chlorophyll Index",
      tempGradient: "Thermal Gradient (SST)",
      oceanCurrent: "Ocean Current Velocity",
      historicalSuitability: "Historical Catch Yield",
      weatherFactor: "Local Weather",
      safetyFactor: "Navigation Safety",
      factorsTitle: "Zone Assessment Breakdown",
    },
    safety: {
      title: "Safety & Hazard Warning Matrix",
      overallRisk: "Overall Coast Risk Level",
      riskLevels: {
        low: "LOW RISK",
        moderate: "MODERATE RISK",
        high: "HIGH RISK",
        extreme: "EXTREME DANGER",
      },
      factors: {
        wind: "Wind Speed & Gusts",
        waves: "Swell & Wave Height",
        rain: "Precipitation & Squalls",
        current: "Current Shear",
        cyclone: "Cyclone Proximity",
        visibility: "Sea Visibility",
      },
      cycloneAlertTitle: "⚠ Cyclone Alert",
      safetyBubble: "Personal Vessel Safety Bubble",
      safetyBubbleRadius: "Safety Bubble Radius",
      hazardAlert: "Hazard Detected Within Operating Safety Radius!",
    },
    mission: {
      title: "48-Hour Mission Package & Offline Mode",
      status: "Package Status",
      validity: "Package Validity Period",
      ready: "READY (Local Cache Updated)",
      contains: "Package Included Datasets",
      weatherForecast: "48-Hour High Resolution Weather Grid",
      marineConditions: "SST & Chlorophyll Satellite Data",
      fishingPredictions: "PFZ Machine Learning Weight Maps",
      hazardData: "IMD Cyclone Tracking Trajectories",
      mapData: "Vector Shoreline & Bathymetry Offline Map",
      modelInputs: "Offline Neural Reasoning Engine",
      generatePackage: "Sync & Generate Mission Package",
      downloadPackage: "Download Offline Package (.JSON)",
      useOfflineMode: "Toggle Offline Mode",
      packageGeneratedSuccess: "Mission Package synced successfully! Local AI operational for 48 hours.",
    },
    architecture: {
      title: "Multi-Agent System & Data Fusion",
      subtitle: "Hierarchical AI Agents processing Satellite & Coast Telemetry",
      userQuery: "User Query",
      orcaCoordinator: "ORCA AI Coordinator",
      weatherAgent: "Weather Agent",
      marineAgent: "Marine Agent",
      fishingAgent: "Fishing Intelligence Agent",
      safetyAgent: "Safety Agent",
      dataFusion: "Data Fusion Layer",
      engine: "Recommendation Engine",
      dataSources: "Integrated Data Sources",
    },
  },
  ta: {
    appName: "ஆர்கா (ORCA)",
    appSubtitle: "செயற்கை நுண்ணறிவு கடல் மற்றும் மீன்பிடி உதவியாளர்",
    onlineMode: "இணையத்தில் (ONLINE)",
    offlineMode: "ஆஃப்லைன் (OFFLINE)",
    cloudActive: "கிளவுட் நுண்ணறிவு இயங்குகிறது",
    localPackageActive: "48-மணிநேர மிஷன் பேக்கேஜ் இயங்குகிறது",
    nav: {
      dashboard: "முகப்பு பலகை",
      aiAssistant: "AI உதவியாளர்",
      fishingZones: "மீன்பிடி மண்டலங்கள்",
      weather: "வானிலை கணிப்பு",
      marineConditions: "கடல் நிலைமைகள்",
      safetyAlerts: "பாதுகாப்பு & எச்சரிக்கைகள்",
      missionPackage: "மிஷன் பேக்கேஜ் (ஆஃப்லைன்)",
      architecture: "தொழில்நுட்ப கட்டமைப்பு",
    },
    dashboard: {
      title: "கடல் & மீன்பிடித் தரவுகள்",
      overview: "தற்போதைய கடல் சுருக்கம்",
      temperature: "காற்றின் வெப்பநிலை",
      windSpeed: "காற்றின் வேகம்",
      waveHeight: "அலையின் உயரம்",
      sst: "கடல் பரப்பு வெப்பநிலை (SST)",
      current: "கடல் நீரோட்டம்",
      weatherCondition: "வானிலை நிலை",
      recommendedZone: "பரிந்துரைக்கப்பட்ட மீன்பிடி மண்டலம்",
      suitability: "பொருத்தம்",
      confidence: "நம்பகத்தன்மை",
      distance: "தூரம்",
      travelTime: "பயண நேரம்",
      safetyRisk: "பாதுகாப்பு அபாயம்",
      activeWarnings: "செயலில் உள்ள எச்சரிக்கைகள்",
      cycloneStatus: "புயல் நிலை",
      waveAlert: "அலை மற்றும் காற்று எச்சரிக்கை",
      quickStats: "நேரடி கடற்கரை உணரிகள்",
    },
    ai: {
      title: "ஆர்கா AI கடல் உதவியாளர்",
      subtitle: "கேள்விகளின் நோக்கத்தை உணர்ந்து துல்லியமான கடல் மற்றும் பாதுகாப்பு வழிகாட்டுதலை அளிக்கும் AI",
      inputPlaceholder: "வானிலை, பாதுகாப்பு, பாதை அல்லது மீன்பிடி மண்டலங்கள் பற்றிக் கேளுங்கள்...",
      analyzing: "கேள்வியின் நோக்கத்தை பகுப்பாய்வு செய்து தரவுகளை பெறுகிறது...",
      suggestedQuestionsTitle: "பரிந்துரைக்கப்பட்ட கேள்விகள்",
      whyRecommendation: "இந்த பரிந்துரை ஏன்?",
      keyReasons: "முக்கிய கடல் மற்றும் வானிலை காரணிகள்",
      suitabilityScore: "மீன்பிடி பொருத்தமான மதிப்பெண்",
      safetyRisk: "பாதுகாப்பு அபாய மதிப்பீடு",
      recommendationTitle: "ஆர்கா AI பகுப்பாய்வு",
      contextResolvedNote: "தொடர்பு நிலை உறுதி செய்யப்பட்டது: மண்டலம் A (North East Shelf)",
      questions: {
        q1: "நாளை காலை மீன்பிடிக்க எந்த இடத்திற்கு செல்லலாம்?",
        q2: "இன்று மீன்பிடிக்கச் செல்வது பாதுகாப்பானதா?",
        q3: "நாளை வானிலை எப்படி இருக்கும்?",
        q4: "மண்டலம் A-விற்கான பாதையைக் காட்டு.",
        q5: "மண்டலம் A-வை ஏன் பரிந்துரை செய்தீர்கள்?",
        q6: "புயல் தற்போது எங்கே உள்ளது?",
        q7: "கடல் நிலைமைகள் (SST & குளோரோபில்) எப்படி உள்ளது?",
        q8: "வணக்கம் ஆர்கா!",
      },
      intents: {
        greeting: "வணக்கம் கேப்டன்! நான் ஆர்கா (ORCA), உங்கள் AI கடல் உதவியாளர். உங்கள் இன்றைய கடல் பயணத்திற்கு நான் எவ்வாறு உதவட்டும்?",
        weatherSummary: "சென்னை கடற்கரை வானிலை கணிப்பு: நாளை காலை தெளிவான வானிலை, 14.2 km/h வடகிழக்கு காற்று மற்றும் 1.1m அலை உயரம் இருக்கும். காலை 06:00 முதல் 11:00 மணி வரை உகந்த நேரம்.",
        safetySummary: "மண்டலம் A (North East Shelf) பாதுகாப்பு அபாய மதிப்பீடு: குறைந்த அபாயம் (LOW RISK). காற்று மற்றும் அலைகள் பாதுகாப்பான எல்லைக்குள் உள்ளன.",
        cycloneSummary: "வருணா புயல் தற்போது சென்னைக்கு கிழக்கு-தென்கிழக்கே 145 கி.மீ தொலைவில் வடகிழக்கு நோக்கி நகர்கிறது. மண்டலம் A-விற்கு எவ்வித நேரடி ஆபத்தும் இல்லை.",
        routeSummary: "சென்னை துறைமுகத்திலிருந்து மண்டலம் A-விற்கான உகந்த பாதை: தூரம் 18.4 கி.மீ, பயண நேரம் 52 நிமிடங்கள். பாதை பாதுகாப்பு: குறைந்த அபாயம்.",
        marineSummary: "தற்போதைய கடல் அளவுருக்கள்: கடல் பரப்பு வெப்பநிலை (SST) 28.2°C, குளோரோபில் குறியீடு 88%, நீரோட்ட வேகம் 0.8 நாட்ஸ் SW.",
        whySummary: "மண்டலம் A உகந்த கடல் வெப்பநிலை (28.2°C), அதிக குளோரோபில் செறிவு (88%), குறைந்த அலை (1.1m) மற்றும் புயல் பாதுகாப்பு தூரம் காரணமாக பரிந்துரைக்கப்படுகிறது.",
        unknownClarification: "மன்னிக்கவும், உங்கள் கேள்வி எனக்குப் புரியவில்லை. நாளை வானிலை, பாதுகாப்பான மீன்பிடி மண்டலங்கள், புயல் நிலை அல்லது பாதையைப் பற்றிக் கேட்க விரும்புகிறீர்களா?",
      },
    },
    weather: {
      title: "வானிலை கணிப்பு & 48-மணிநேர காலக்கோடு",
      selectLocation: "கடற்கரை துறைமுகத்தைத் தேர்ந்தெடுக்கவும்",
      currentWeather: "தற்போதைய கடல் வானிலை",
      forecast48h: "48-மணிநேர முன்னறிவிப்பு",
      humidity: "ஈரப்பதம்",
      rainProbability: "மழை வாய்ப்பு",
      timeline: {
        safe: "பாதுகாப்பான மீன்பிடி நேரம்",
        moderate: "மிதமான நிலைமை",
        windIncreasing: "காற்றின் வேகம் அதிகரிக்கும் எச்சரிக்கை",
        caution: "உயர் எச்சரிக்கை தேவை",
      },
    },
    zones: {
      title: "மீன்பிடி மண்டல நுண்ணறிவு",
      subtitle: "குளோரோபில் மற்றும் கடல் பரப்பு வெப்பநிலை அடிப்படையிலான மண்டலங்கள்",
      suitabilityScore: "மீன்பிடி 적합성",
      chlorophyll: "குளோரோபில் அளவு",
      tempGradient: "வெப்பநிலை மாற்றம் (SST)",
      oceanCurrent: "கடல் நீரோட்ட வேகம்",
      historicalSuitability: "வரலாற்று மீன்பிடி மகசூல்",
      weatherFactor: "உள்ளூர் வானிலை",
      safetyFactor: "நாவிகேஷன் பாதுகாப்பு",
      factorsTitle: "மண்டல மதிப்பீட்டு விவரங்கள்",
    },
    safety: {
      title: "பாதுகாப்பு & அபாய எச்சரிக்கை மேட்ரிக்ஸ்",
      overallRisk: "ஒட்டுமொத்த கடற்கரை அபாய அளவு",
      riskLevels: {
        low: "குறைந்த அபாயம்",
        moderate: "மிதமான அபாயம்",
        high: "அதிக அபாயம்",
        extreme: "மிகவும் ஆபத்தானது",
      },
      factors: {
        wind: "காற்றின் வேகம் மற்றும் வீச்சு",
        waves: "அலைகளின் உயரம்",
        rain: "மழை மற்றும் புயல் காற்று",
        current: "நீரோட்ட வேகம்",
        cyclone: "புயல் அருகில் உள்ள தூரம்",
        visibility: "கடல் பார்வைத் திறன்",
      },
      cycloneAlertTitle: "⚠ புயல் எச்சரிக்கை",
      safetyBubble: "படகு தனிப்பட்ட பாதுகாப்பு வட்டம்",
      safetyBubbleRadius: "பாதுகாப்பு வட்ட ஆரம்",
      hazardAlert: "பாதுகாப்பு வட்டத்திற்குள் அபாயம் கண்டறியப்பட்டுள்ளது!",
    },
    mission: {
      title: "48-மணிநேர மிஷன் பேக்கேஜ் & ஆஃப்லைன் பயன்முறை",
      status: "பேக்கேஜ் நிலை",
      validity: "செல்லுபடியாகும் காலம்",
      ready: "தயாராக உள்ளது (ஆஃப்லைன் சேமிப்பு)",
      contains: "உள்ளடங்கிய தரவுகள்",
      weatherForecast: "48-மணிநேர உயர் தெளிவு திறன் கொண்ட வானிலை தரவு",
      marineConditions: "சேட்டிலைட் கடல் பரப்பு வெப்பநிலை & குளோரோபில்",
      fishingPredictions: "மீன்பிடி கணிப்பு மாதிரி எடைகள்",
      hazardData: "IMD புயல் கண்காணிப்பு வழிகள்",
      mapData: "ஆஃப்லைன் கடற்கரை மற்றும் ஆழமான வரைபடம்",
      modelInputs: "ஆஃப்லைன் AI கணிப்பு எஞ்சின்",
      generatePackage: "மிஷன் பேக்கேஜைப் புதுப்பித்து உருவாக்கு",
      downloadPackage: "ஆஃப்லைன் பேக்கேஜ் பதிவிறக்கு (.JSON)",
      useOfflineMode: "ஆஃப்லைன் பயன்முறைக்கு மாறு",
      packageGeneratedSuccess: "மிஷன் பேக்கேஜ் உருவாக்கப்பட்டது! 48 மணிநேரத்திற்கு இணையம் இன்றி இயங்கும்.",
    },
    architecture: {
      title: "பல-முகவர் AI அமைப்பு & தரவு ஒருங்கிணைப்பு",
      subtitle: "செயற்கைக்கோள் மற்றும் கடற்கரை உணரிகளிலிருந்து பெறப்படும் தரவு செயலாக்கம்",
      userQuery: "பயனர் கேள்வி",
      orcaCoordinator: "ஆர்கா AI ஒருங்கிணைப்பாளர்",
      weatherAgent: "வானிலை முகவர் (Weather Agent)",
      marineAgent: "கடல் நிலவர முகவர் (Marine Agent)",
      fishingAgent: "மீன்பிடி நுண்ணறிவு முகவர்",
      safetyAgent: "பாதுகாப்பு முகவர் (Safety Agent)",
      dataFusion: "தரவு இணைப்பு அடுக்கு (Data Fusion)",
      engine: "பரிந்துரை எஞ்சின்",
      dataSources: "ஒருங்கிணைக்கப்பட்ட தரவு ஆதாரங்கள்",
    },
  },
  hi: {
    appName: "ओर्का (ORCA)",
    appSubtitle: "एआई समुद्री एवं मत्स्य पालन सहायता प्रणाली",
    onlineMode: "ऑनलाइन (ONLINE)",
    offlineMode: "ऑफलाइन (OFFLINE)",
    cloudActive: "क्लाउड इंटेलिजेंस सक्रिय",
    localPackageActive: "48-घंटे का मिशन पैकेज सक्रिय",
    nav: {
      dashboard: "डैशबोर्ड",
      aiAssistant: "एआई सहायक",
      fishingZones: "मत्स्य क्षेत्र",
      weather: "मौसम पूर्वानुमान",
      marineConditions: "समुद्री स्थितियां",
      safetyAlerts: "सुरक्षा एवं चेतावनी",
      missionPackage: "मिशन पैकेज (ऑफलाइन)",
      architecture: "सिस्टम आर्किटेक्चर",
    },
    dashboard: {
      title: "समुद्री एवं मत्स्य पालन टेलीमेट्री",
      overview: "वर्तमान समुद्री अवलोकन",
      temperature: "वायु तापमान",
      windSpeed: "हवा की गति",
      waveHeight: "लहर की ऊंचाई",
      sst: "समुद्री सतह तापमान (SST)",
      current: "समुद्री धारा",
      weatherCondition: "मौसम की स्थिति",
      recommendedZone: "अनुशंसित मत्स्य क्षेत्र",
      suitability: "उपयुक्तता",
      confidence: "विश्वसनीयता",
      distance: "दूरी",
      travelTime: "अनुमानित समय",
      safetyRisk: "सुरक्षा जोखिम",
      activeWarnings: "सक्रिय चेतावनियां",
      cycloneStatus: "चक्रवात की स्थिति",
      waveAlert: "लहर और हवा की चेतावनी",
      quickStats: "लाइव कोस्ट सेंसर डेटा",
    },
    ai: {
      title: "ओर्का एआई समुद्री सहायक",
      subtitle: "प्रश्नों के इरादे को समझकर सटीक समुद्री व मत्स्य पालन सलाह देने वाला एआई",
      inputPlaceholder: "मौसम, सुरक्षा, मार्ग या मत्स्य क्षेत्रों के बारे में पूछें...",
      analyzing: "प्रश्न के उद्देश्य का विश्लेषण किया जा रहा है...",
      suggestedQuestionsTitle: "सुझाए गए प्रश्न",
      whyRecommendation: "यह सिफारिश क्यों?",
      keyReasons: "मुख्य समुद्री एवं मौसम कारक",
      suitabilityScore: "मत्स्य उपयुक्तता स्कोर",
      safetyRisk: "सुरक्षा जोखिम मूल्यांकन",
      recommendationTitle: "ओर्का एआई विश्लेषण",
      contextResolvedNote: "संदर्भ हल किया गया: जोन A (North East Shelf)",
      questions: {
        q1: "कल सुबह मुझे मछली पकड़ने कहाँ जाना चाहिए?",
        q2: "क्या आज मछली पकड़ने जाना सुरक्षित है?",
        q3: "कल मौसम का पूर्वानुमान क्या है?",
        q4: "जोन A का रास्ता दिखाएं।",
        q5: "आपने जोन A की सिफारिश क्यों की?",
        q6: "चक्रवात वर्तमान में कहाँ स्थित है?",
        q7: "समुद्री स्थितियां (SST और क्लोरोफिल) कैसी हैं?",
        q8: "नमस्ते ओर्का!",
      },
      intents: {
        greeting: "नमस्कार कप्तान! मैं ओर्का (ORCA), आपका एआई समुद्री सहायक हूँ। आज आपकी यात्रा में मैं कैसे मदद कर सकता हूँ?",
        weatherSummary: "चेन्नई तट मौसम पूर्वानुमान: कल सुबह 14.2 किमी/घंटा उत्तर-पूर्वी हवाओं और 1.1 मीटर लहरों के साथ साफ आसमान रहेगा।",
        safetySummary: "जोन A (North East Shelf) सुरक्षा मूल्यांकन: कम जोखिम (LOW RISK)। हवा और लहरें सुरक्षित सीमा में हैं।",
        cycloneSummary: "चक्रवात वरुण वर्तमान में चेन्नई से 145 किमी पूर्व-दक्षिण-पूर्व में है। जोन A के लिए कोई खतरा नहीं है।",
        routeSummary: "चेन्नई बंदरगाह से जोन A का मार्ग: दूरी 18.4 किमी, अनुमानित समय 52 मिनट। मार्ग सुरक्षा: कम जोखिम।",
        marineSummary: "वर्तमान समुद्री पैरामीटर: समुद्री सतह तापमान (SST) 28.2°C है, क्लोरोफिल सूचकांक 88% है।",
        whySummary: "जोन A की सिफारिश अनुकूल तापमान (28.2°C) और उच्च क्लोरोफिल (88%) के कारण की गई है।",
        unknownClarification: "क्षमा करें, मैं समझ नहीं पाया। क्या आप कल का मौसम, सुरक्षित मत्स्य क्षेत्र या चक्रवात की स्थिति जानना चाहते हैं?",
      },
    },
    weather: {
      title: "मौसम पूर्वानुमान और 48-घंटे की समयसीमा",
      selectLocation: "तटीय बंदरगाह चुनें",
      currentWeather: "वर्तमान समुद्री मौसम",
      forecast48h: "48-घंटे का पूर्वानुमान",
      humidity: "आर्द्रता",
      rainProbability: "वर्षा की संभावना",
      timeline: {
        safe: "सुरक्षित समय",
        moderate: "मध्यम स्थिति",
        windIncreasing: "हवा की गति बढ़ने की चेतावनी",
        caution: "उच्च सावधानी आवश्यक",
      },
    },
    zones: {
      title: "मत्स्य क्षेत्र इंटेलिजेंस",
      subtitle: "क्लोरोफिल और समुद्र सतह तापमान आधारित संभावित मत्स्य क्षेत्र",
      suitabilityScore: "मत्स्य उपयुक्तता",
      chlorophyll: "क्लोरोफिल सूचकांक",
      tempGradient: "तापीय प्रवणता (SST)",
      oceanCurrent: "समुद्री धारा गति",
      historicalSuitability: "ऐतिहासिक मत्स्य उत्पादन",
      weatherFactor: "स्थानीय मौसम",
      safetyFactor: "नेविगेशन सुरक्षा",
      factorsTitle: "क्षेत्र मूल्यांकन विवरण",
    },
    safety: {
      title: "सुरक्षा और खतरा चेतावनी मैट्रिक्स",
      overallRisk: "समग्र तटीय जोखिम स्तर",
      riskLevels: {
        low: "कम जोखिम",
        moderate: "मध्यम जोखिम",
        high: "उच्च जोखिम",
        extreme: "अत्यधिक खतरा",
      },
      factors: {
        wind: "हवा की गति और झोंके",
        waves: "लहर की ऊंचाई",
        rain: "वर्षा एवं तूफान",
        current: "धारा की गति",
        cyclone: "चक्रवात निकटता",
        visibility: "समुद्री दृश्यता",
      },
      cycloneAlertTitle: "⚠ चक्रवात चेतावनी",
      safetyBubble: "नौका व्यक्तिगत सुरक्षा दायरा",
      safetyBubbleRadius: "सुरक्षा दायरा त्रिज्या",
      hazardAlert: "सुरक्षा दायरे के भीतर खतरा पाया गया!",
    },
    mission: {
      title: "48-घंटे का मिशन पैकेज और ऑफलाइन मोड",
      status: "पैकेज स्थिति",
      validity: "वैधता अवधि",
      ready: "तैयार (स्थानीय कैश अद्यतन)",
      contains: "शामिल डेटासेट",
      weatherForecast: "48-घंटे का उच्च संकल्प मौसम डेटा",
      marineConditions: "उपग्रह समुद्री सतह तापमान और क्लोरोफिल",
      fishingPredictions: "मत्स्य पूर्वानुमान मॉडल मैप्स",
      hazardData: "आईएमडी चक्रवात ट्रैकिंग पथ",
      mapData: "ऑफलाइन तटीय एवं गहराई मानचित्र",
      modelInputs: "ऑफलाइन एआई न्यूरल इंजन",
      generatePackage: "मिशन पैकेज सिंक और जनरेट करें",
      downloadPackage: "ऑफलाइन पैकेज डाउनलोड करें (.JSON)",
      useOfflineMode: "ऑफलाइन मोड पर स्विच करें",
      packageGeneratedSuccess: "मिशन पैकेज सफलतापूर्वक जनरेट हुआ! 48 घंटे के लिए ऑफलाइन कार्यक्षम।",
    },
    architecture: {
      title: "मल्टी-एजेंट सिस्टम एवं डेटा फ्यूजन",
      subtitle: "उपग्रह और तटीय टेलीमेट्री को संसाधित करने वाले एआई एजेंट्स",
      userQuery: "उपयोगकर्ता प्रश्न",
      orcaCoordinator: "ओर्का एआई समन्वयक",
      weatherAgent: "मौसम एजेंट",
      marineAgent: "समुद्री एजेंट",
      fishingAgent: "मत्स्य इंटेलिजेंस एजेंट",
      safetyAgent: "सुरक्षा एजेंट",
      dataFusion: "डेटा फ्यूजन परत",
      engine: "सिफारिश इंजन",
      dataSources: "एकीकृत डेटा स्रोत",
    },
  },
  te: {
    appName: "ఓర్కా (ORCA)",
    appSubtitle: "AI సముద్ర మరియు చేపల వేట సహాయక వ్యవస్థ",
    onlineMode: "ఆన్‌లైన్ (ONLINE)",
    offlineMode: "ఆఫ్‌లైన్ (OFFLINE)",
    cloudActive: "క్లౌడ్ ఇంటెలిజెన్స్ సక్రియంగా ఉంది",
    localPackageActive: "48-గంటల మిషన్ ప్యాకేజీ సక్రియంగా ఉంది",
    nav: {
      dashboard: "డాష్‌బోర్డ్",
      aiAssistant: "AI సహాయకుడు",
      fishingZones: "చేపల వేట మండలాలు",
      weather: "వాతావరణ ముందస్తు అంచనా",
      marineConditions: "సముద్ర పరిస్థితులు",
      safetyAlerts: "రక్షణ & హెచ్చరికలు",
      missionPackage: "మిషన్ ప్యాకేజీ (ఆఫ్‌లైన్)",
      architecture: "సాంకేతిక నిర్మాణం",
    },
    dashboard: {
      title: "సముద్ర & చేపల వేట డేటా",
      overview: "ప్రస్తుత సముద్ర ముఖచిత్రం",
      temperature: "గాలి ఉష్ణోగ్రత",
      windSpeed: "గాలి వేగం",
      waveHeight: "అలల ఎత్తు",
      sst: "సముద్ర ఉపరితల ఉష్ణోగ్రత (SST)",
      current: "సముద్ర ప్రవాహం",
      weatherCondition: "వాతావరణ పరిస్థితి",
      recommendedZone: "సూచించబడిన చేపల వేట ప్రాంతం",
      suitability: "అనుకూలత",
      confidence: "నమ్మకం",
      distance: "దూరం",
      travelTime: "ప్రయాణ సమయం",
      safetyRisk: "రక్షణ ప్రమాదం",
      activeWarnings: "సక్రియ హెచ్చరికలు",
      cycloneStatus: "తుఫాను పరిస్థితి",
      waveAlert: "అలలు & గాలి హెచ్చరిక",
      quickStats: "లైవ్ తీర ప్రాంత సెన్సార్ డేటా",
    },
    ai: {
      title: "ఓర్కా AI సముద్ర సహాయకుడు",
      subtitle: "ప్రశ్నల ఉద్దేశ్యాన్ని గ్రహించి ఖచ్చితమైన సముద్ర వేట సూచనలను ఇచ్చే AI",
      inputPlaceholder: "వాతావరణం, రక్షణ, మార్గం లేదా చేపల వేట గురించి అడగండి...",
      analyzing: "ప్రశ్న ఉద్దేశ్యాన్ని విశ్లేషిస్తోంది...",
      suggestedQuestionsTitle: "సూచించబడిన ప్రశ్నలు",
      whyRecommendation: "ఈ సిఫార్సు ఎందుకు?",
      keyReasons: "ముఖ్యమైన సముద్ర & వాతావరణ కారకాలు",
      suitabilityScore: "చేపల వేట అనుకూలత స్కోరు",
      safetyRisk: "రక్షణ ప్రమాద అంచనా",
      recommendationTitle: "ఓర్కా AI విశ్లేషణ",
      contextResolvedNote: "సందర్భం నిర్ధారించబడింది: జోన్ A (North East Shelf)",
      questions: {
        q1: "రేపు ఉదయం నేను చేపల వేటకు ఎక్కడికి వెళ్ళాలి?",
        q2: "ఈ రోజు చేపల వేటకు వెళ్లడం సురక్షితమేనా?",
        q3: "రేపటి వాతావరణం ఎలా ఉంటుంది?",
        q4: "జోన్ A కు మార్గాన్ని చూపించు.",
        q5: "మీరు జోన్ A ను ఎందుకు సిఫార్సు చేశారు?",
        q6: "తుఫాను ప్రస్తుతం ఎక్కడ ఉంది?",
        q7: "సముద్ర పరిస్థితులు (SST & క్లోరోఫిల్) ఎలా ఉన్నాయి?",
        q8: "నమస్కారం ఓర్కా!",
      },
      intents: {
        greeting: "నమస్కారం కెప్టెన్! నేను ఓర్కా (ORCA), మీ AI సముద్ర సహాయకుడిని. ఈ రోజు మీ ప్రయాణంలో నేను ఎలా సహాయపడగలను?",
        weatherSummary: "చెన్నై తీర ప్రాంత వాతావరణ అంచనా: రేపు ఉదయం 14.2 కిమీ/గం ఈశాన్య గాలులు మరియు 1.1 మీ అలల ఎత్తుతో వాతావరణం ప్రశాంతంగా ఉంటుంది.",
        safetySummary: "జోన్ A (North East Shelf) రక్షణ అంచనా: తక్కువ ప్రమాదం (LOW RISK). గాలులు మరియు అలలు సురక్షిత పరిమితిలో ఉన్నాయి.",
        cycloneSummary: "వరుణ తుఫాను ప్రస్తుతం చెన్నైకి ఈశాన్యం వైపు ప్రయాణిస్తోంది. జోన్ A కు ప్రమాదం లేదు.",
        routeSummary: "చెన్నై పోర్ట్ నుండి జోన్ A కు మార్గం: దూరం 18.4 కిమీ, ప్రయాణ సమయం 52 నిమిషాలు. రక్షణ: తక్కువ ప్రమాదం.",
        marineSummary: "ప్రస్తుత సముద్ర పారామితులు: సముద్ర ఉపరితల ఉష్ణోగ్రత 28.2°C, క్లోరోఫిల్ 88%.",
        whySummary: "జోన్ A ఉష్ణోగ్రత (28.2°C) మరియు క్లోరోఫిల్ (88%) ఆధారంగా సిఫార్సు చేయబడింది.",
        unknownClarification: "క్షమించండి, మీ ప్రశ్న అర్థం కాలేదు. రేపటి వాతావరణం, చేపల వేట ప్రాంతాలు లేదా తుఫాను గురించి తెలుసుకోవాలనుకుంటున్నారా?",
      },
    },
    weather: {
      title: "వాతావరణ అంచనా & 48-గంటల కాలక్రమం",
      selectLocation: "తీరప్రాంత రేవును ఎంచుకోండి",
      currentWeather: "ప్రస్తుత సముద్ర వాతావరణం",
      forecast48h: "48-గంటల సూచన",
      humidity: "తేమ",
      rainProbability: "వర్షపాతం సంభావ్యత",
      timeline: {
        safe: "సురక్షిత సమయం",
        moderate: "మితమైన పరిస్థితి",
        windIncreasing: "గాలి వేగం పెరుగుతోంది - హెచ్చరిక",
        caution: "అధిక జాగ్రత్త అవసరం",
      },
    },
    zones: {
      title: "చేపల వేట ప్రాంత ఇంటెలిజెన్స్",
      subtitle: "క్లోరోఫిల్ మరియు సముద్ర ఉష్ణోగ్రత ఆధారిత వేట ప్రాంతాలు",
      suitabilityScore: "చేపల వేట అనుకూలత",
      chlorophyll: "క్లోరోఫిల్ సూచిక",
      tempGradient: "ఉష్ణోగ్రత మార్పు (SST)",
      oceanCurrent: "సముద్ర ప్రవాహ వేగం",
      historicalSuitability: "చారిత్రక చేపల దిగుబడి",
      weatherFactor: "స్థానిక వాతావరణం",
      safetyFactor: "నావిగేషన్ భద్రత",
      factorsTitle: "ప్రాంతపు అంచనా వివరాలు",
    },
    safety: {
      title: "రక్షణ & ప్రమాద హెచ్చరికల మ్యాట్రిక్స్",
      overallRisk: "మొత్తం తీర ప్రాంత ప్రమాద స్థాయి",
      riskLevels: {
        low: "తక్కువ ప్రమాదం",
        moderate: "మితమైన ప్రమాదం",
        high: "అధిక ప్రమాదం",
        extreme: "తీవ్రమైన ప్రమాదం",
      },
      factors: {
        wind: "గాలి వేగం",
        waves: "అలల ఎత్తు",
        rain: "వర్షం & తుఫాను గాలి",
        current: "ప్రవాహ వేగం",
        cyclone: "తుఫాను సామీప్యత",
        visibility: "సముద్ర దృశ్యమానత",
      },
      cycloneAlertTitle: "⚠ తుఫాను హెచ్చరిక",
      safetyBubble: "వ్యక్తిగత పడవ రక్షణ వలయం",
      safetyBubbleRadius: "రక్షణ వలయం వ్యాసార్థం",
      hazardAlert: "రక్షణ వలయంలో ప్రమాదం గుర్తించబడింది!",
    },
    mission: {
      title: "48-గంటల మిషన్ ప్యాకేజీ & ఆఫ్‌లైన్ మోడ్",
      status: "ప్యాకేజీ స్థితి",
      validity: "చెల్లుబాటు కాలం",
      ready: "సిద్ధంగా ఉంది (ఆఫ్‌లైన్ క్యాష్ అప్‌డేట్ అయింది)",
      contains: "చేర్చబడిన డేటాసెట్లు",
      weatherForecast: "48-గంటల అల్ట్రా వాతావరణ గ్రిడ్",
      marineConditions: "శాటిలైట్ ఉష్ణోగ్రత & క్లోరోఫిల్ డేటా",
      fishingPredictions: "చేపల వేట అంచనా నమూనాలు",
      hazardData: "IMD తుఫాను పథాలు",
      mapData: "ఆఫ్‌లైన్ కోస్టల్ మరియు లోతు మ్యాప్",
      modelInputs: "ఆఫ్‌లైన్ AI మోడల్ ఇంజిన్",
      generatePackage: "మిషన్ ప్యాకేజీని జనరేట్ చేయండి",
      downloadPackage: "ఆఫ్‌లైన్ ప్యాకేజీని డౌన్‌లోడ్ చేయండి (.JSON)",
      useOfflineMode: "ఆఫ్‌లైన్ మోడ్‌కు మారండి",
      packageGeneratedSuccess: "మిషన్ ప్యాకేజీ విజయవంతంగా సృష్టించబడింది! 48 గంటల పాటు ఆఫ్‌లైన్‌లో పనిచేస్తుంది.",
    },
    architecture: {
      title: "మల్టీ-ఏజెంట్ సిస్టమ్ & డేటా ఫ్యూజన్",
      subtitle: "శాటిలైట్ మరియు కోస్టల్ డేటాను ప్రాసెస్ చేసే AI ఏజెంట్లు",
      userQuery: "యూజర్ ప్రశ్న",
      orcaCoordinator: "ఓర్కా AI సమన్వయకర్త",
      weatherAgent: "వాతావరణ ఏజెంట్",
      marineAgent: "సముద్ర ఏజెంట్",
      fishingAgent: "చేపల వేట ఏజెంట్",
      safetyAgent: "రక్షణ ఏజెంట్",
      dataFusion: "డేటా ఫ్యూజన్ పొర",
      engine: "సూచనల ఇంజిన్",
      dataSources: "సమీకృత డేటా వనరులు",
    },
  },
};
