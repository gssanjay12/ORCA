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
      q9: string;
      q10: string;
      q11: string;
      q12: string;
    };
    intents: {
      greeting: string;
      weatherSummary: string;
      safetySummary: string;
      cycloneSummary: string;
      routeSummary: string;
      marineSummary: string;
      borderSummary: string;
      geofenceSummary: string;
      whySummary: string;
      unknownClarification: string;
    };
  };
  geofence: {
    title: string;
    subtitle: string;
    conceptLabel: string;
    vesselStatusTitle: string;
    prohibitedEntryTitle: string;
    prohibitedEntryText: string;
    hazardEntryTitle: string;
    hazardEntryText: string;
    approachingRestricted: string;
    approachingHazard: string;
    unsafeRouteDetected: string;
    alternativeRouteGenerated: string;
    startSimulation: string;
    pauseSimulation: string;
    resetSimulation: string;
    simulationSpeed: string;
    alertHistory: string;
    clearHistory: string;
    distanceToRestricted: string;
    distanceToHazard: string;
    types: {
      safe: string;
      caution: string;
      prohibited: string;
      hazard: string;
    };
  };
  border: {
    title: string;
    subtitle: string;
    borderSafety: string;
    proximityAlertTitle: string;
    proximityAlertText: string;
    zoneRestrictedTitle: string;
    zoneRestrictedText: string;
    disclaimer: string;
    distanceToIMBL: string;
    states: {
      safe: string;
      caution: string;
      restricted: string;
    };
    layers: {
      imbl: string;
      territorial: string;
      restrictedZone: string;
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
      inputPlaceholder: "Ask about geofence, prohibited zones, weather, safe routes, or cyclone...",
      analyzing: "Detecting intent & evaluating geofence polygons...",
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
        q9: "Am I close to the maritime border?",
        q10: "Is Zone A safe from border restrictions?",
        q11: "Am I currently in a prohibited zone?",
        q12: "Is there any danger or hazard ahead?",
      },
      intents: {
        greeting: "Greetings Captain! I am ORCA, your AI Marine Assistant. How can I assist your voyage today?",
        weatherSummary: "Weather Forecast for Chennai Coast: Clear skies tomorrow morning with 14.2 km/h NE winds and 1.1m wave swell. Favorable fishing window from 06:00 to 11:00 AM.",
        safetySummary: "Safety Risk Assessment for Zone A (North East Shelf): LOW RISK. Wind, swell, and border distance remain well within safe operating limits.",
        cycloneSummary: "Cyclonic Storm VARUNA is currently 145 km East-Southeast of Chennai moving North-East. No direct threat to Zone A.",
        routeSummary: "Optimal Route from Chennai Harbor to Zone A (North East Shelf): Distance 18.4 km, estimated travel duration 52 minutes. Route Safety: LOW RISK.",
        marineSummary: "Current Marine Parameters: Sea Surface Temperature (SST) is 28.2°C, Chlorophyll index is 88%, Current velocity is 0.8 knots SW.",
        borderSummary: "Maritime Border Status: Your vessel is 38.5 km inside domestic Indian territorial waters (SAFE). Zone A is fully compliant with maritime boundary regulations.",
        geofenceSummary: "Geofence Assessment: Vessel is currently in a SAFE zone. Restricted Naval Zone is 6.4 km away, and High Swell Hazard is 12.8 km away.",
        whySummary: "Zone A is recommended due to optimal Sea Surface Temperature (28.2°C), high chlorophyll concentration (88%), gentle swell (1.1m), and safe clearance from prohibited naval defense zones.",
        unknownClarification: "I didn't quite understand that. Would you like to check tomorrow's weather, safe fishing zones, geofence alerts, or route navigation?",
      },
    },
    geofence: {
      title: "Vessel Geofencing & Zone Detection System",
      subtitle: "Real-time Point-in-Polygon Detection for Prohibited Defense & Hazard Sectors",
      conceptLabel: "Fishing Zones → Safe Routes → Geofencing & Alerts",
      vesselStatusTitle: "Vessel Safety Status",
      prohibitedEntryTitle: "⚠ PROHIBITED ZONE ENTRY",
      prohibitedEntryText: "Vessel has entered a restricted maritime area! Turn back immediately toward permitted fishing waters.",
      hazardEntryTitle: "⚠ HAZARD ZONE ENTRY",
      hazardEntryText: "Vessel has entered an active marine hazard area. Severe wave swell and squall conditions present.",
      approachingRestricted: "⚠ APPROACHING RESTRICTED AREA",
      approachingHazard: "⚠ APPROACHING HAZARD AREA",
      unsafeRouteDetected: "⚠ Unsafe direct route detected crossing prohibited zone! Alternative safe route generated.",
      alternativeRouteGenerated: "Alternative Safe Detour Route Active",
      startSimulation: "▶ Start Simulation",
      pauseSimulation: "⏸ Pause",
      resetSimulation: "↻ Reset",
      simulationSpeed: "Sim Speed",
      alertHistory: "Geofence Alert History",
      clearHistory: "Clear Log History",
      distanceToRestricted: "Dist. to Restricted Zone",
      distanceToHazard: "Dist. to Nearest Hazard",
      types: {
        safe: "SAFE",
        caution: "CAUTION",
        prohibited: "PROHIBITED",
        hazard: "HAZARD",
      },
    },
    border: {
      title: "Maritime Boundary & Border Awareness",
      subtitle: "Decision Support System for IMBL & Restricted Defense Sectors",
      borderSafety: "Border Safety Rating",
      proximityAlertTitle: "⚠ BORDER PROXIMITY ALERT",
      proximityAlertText: "Your current vessel location is approaching a maritime boundary. Maintain a safe distance and verify permitted fishing sectors.",
      zoneRestrictedTitle: "⚠ ZONE NOT RECOMMENDED / RESTRICTED",
      zoneRestrictedText: "This location has been excluded from recommendations because it is within a restricted naval defense area or border-sensitive sector.",
      disclaimer: "Simulated Decision Support Data — Not an Official Legal Navigation Instrument",
      distanceToIMBL: "Distance to IMBL Line",
      states: {
        safe: "SAFE",
        caution: "CAUTION",
        restricted: "RESTRICTED / EXCLUDED",
      },
      layers: {
        imbl: "International Maritime Boundary Line (IMBL)",
        territorial: "Territorial Waters Buffer (12 nm)",
        restrictedZone: "Naval Prohibited Defense Zone",
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
      inputPlaceholder: "வானிலை, ஜியோஃபென்சிங், தடைசெய்யப்பட்ட பகுதி, பாதை பற்றிக் கேளுங்கள்...",
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
        q9: "நான் சர்வதேச எல்லைக்கு அருகில் உள்ளேனா?",
        q10: "மண்டலம் A எல்லையில் இருந்து பாதுகாப்பானதா?",
        q11: "நான் தடைசெய்யப்பட்ட மண்டலத்தில் உள்ளேனா?",
        q12: "முன்னால் ஏதாவது ஆபத்து அல்லது புயல் உள்ளதா?",
      },
      intents: {
        greeting: "வணக்கம் கேப்டன்! நான் ஆர்கா (ORCA), உங்கள் AI கடல் உதவியாளர். உங்கள் இன்றைய கடல் பயணத்திற்கு நான் எவ்வாறு உதவட்டும்?",
        weatherSummary: "சென்னை கடற்கரை வானிலை கணிப்பு: நாளை காலை தெளிவான வானிலை, 14.2 km/h வடகிழக்கு காற்று மற்றும் 1.1m அலை உயரம் இருக்கும்.",
        safetySummary: "மண்டலம் A (North East Shelf) பாதுகாப்பு அபாய மதிப்பீடு: குறைந்த அபாயம் (LOW RISK). காற்று, அலைகள் மற்றும் எல்லைத் தூரம் பாதுகாப்பான எல்லைக்குள் உள்ளன.",
        cycloneSummary: "வருணா புயல் தற்போது சென்னைக்கு கிழக்கு-தென்கிழக்கே 145 கி.மீ தொலைவில் வடகிழக்கு நோக்கி நகர்கிறது. எவ்வித நேரடி ஆபத்தும் இல்லை.",
        routeSummary: "சென்னை துறைமுகத்திலிருந்து மண்டலம் A-விற்கான உகந்த பாதை: தூரம் 18.4 கி.மீ, பயண நேரம் 52 நிமிடங்கள்.",
        marineSummary: "தற்போதைய கடல் அளவுருக்கள்: கடல் பரப்பு வெப்பநிலை (SST) 28.2°C, குளோரோபில் குறியீடு 88%, நீரோட்ட வேகம் 0.8 நாட்ஸ் SW.",
        borderSummary: "கடல் எல்லை நிலை: உங்கள் படகு சர்வதேச எல்லைக்கோட்டிலிருந்து 38.5 கி.மீ இந்திய கடற்பகுதிக்குள் பாதுகாப்பாக உள்ளது (SAFE).",
        geofenceSummary: "ஜியோஃபென்ஸ் பகுப்பாய்வு: படகு தற்போது பாதுகாப்பான மண்டலத்தில் (SAFE) உள்ளது. கடற்படை தடை மண்டலம் 6.4 கி.மீ தொலைவிலும், அலை அபாயம் 12.8 கி.மீ தொலைவிலும் உள்ளன.",
        whySummary: "மண்டலம் A உகந்த வெப்பநிலை (28.2°C), அதிக குளோரோபில் (88%), குறைந்த அலை (1.1m) மற்றும் எல்லைப் பாதுகாப்பு தூரம் காரணமாக பரிந்துரைக்கப்படுகிறது.",
        unknownClarification: "மன்னிக்கவும், உங்கள் கேள்வி எனக்குப் புரியவில்லை. நாளை வானிலை, பாதுகாப்பான மண்டலங்கள், ஜியோஃபென்ஸ் எச்சரிக்கை பற்றிக் கேட்க விரும்புகிறீர்களா?",
      },
    },
    geofence: {
      title: "படகு ஜியோஃபென்சிங் மற்றும் மண்டல கண்டறிதல் அமைப்பு",
      subtitle: "தடைசெய்யப்பட்ட கடற்படை பாதுகாப்பு மண்டலங்களை உடனுக்குடன் கண்டறியும் ஜிபிஎஸ் தொழில்நுட்பம்",
      conceptLabel: "மீன்பிடி மண்டலங்கள் → பாதுகாப்பான பாதைகள் → ஜியோஃபென்சிங் & எச்சரிக்கைகள்",
      vesselStatusTitle: "படகு பாதுகாப்பு நிலை (VESSEL SAFETY STATUS)",
      prohibitedEntryTitle: "⚠ தடைசெய்யப்பட்ட பகுதியில் நுழைந்துள்ளீர்கள் (PROHIBITED ZONE ENTRY)",
      prohibitedEntryText: "படகு தடைசெய்யப்பட்ட கடற்படை மண்டலத்தில் நுழைந்துள்ளது! உடனடியாக பாதுகாப்பான பகுதிக்கு திரும்பவும்.",
      hazardEntryTitle: "⚠ ஆபத்தான கடல் பகுதியில் நுழைந்துள்ளீர்கள் (HAZARD ZONE ENTRY)",
      hazardEntryText: "படகு அதிக அலை மற்றும் புயல் ஆபத்து நிறைந்த மண்டலத்தில் நுழைந்துள்ளது.",
      approachingRestricted: "⚠ எல்லைக் கட்டுப்பாட்டுப் பகுதியை நெருங்குகிறீர்கள் (APPROACHING RESTRICTED AREA)",
      approachingHazard: "⚠ ஆபத்தானப் பகுதியை நெருங்குகிறீர்கள் (APPROACHING HAZARD AREA)",
      unsafeRouteDetected: "⚠ நேரடி பாதை தடைசெய்யப்பட்ட மண்டலத்தை கடப்பதால் மாற்று பாதுகாப்பான பாதை உருவாக்கப்பட்டது.",
      alternativeRouteGenerated: "மாற்று பாதுகாப்பான பாதை செயலில் உள்ளது",
      startSimulation: "▶ இயக்கம் தொடங்கு (Start)",
      pauseSimulation: "⏸ நிறுத்து (Pause)",
      resetSimulation: "↻ மீட்டமை (Reset)",
      simulationSpeed: "வேகம்",
      alertHistory: "ஜியோஃபென்ஸ் எச்சரிக்கை வரலாறு",
      clearHistory: "வரலாற்றை அழி",
      distanceToRestricted: "தடை மண்டல தூரம்",
      distanceToHazard: "அருகிலுள்ள ஆபத்து தூரம்",
      types: {
        safe: "பாதுகாப்பானது (SAFE)",
        caution: "எச்சரிக்கை (CAUTION)",
        prohibited: "தடைசெய்யப்பட்டது (PROHIBITED)",
        hazard: "ஆபத்தானது (HAZARD)",
      },
    },
    border: {
      title: "கடல் எல்லை மற்றும் தடைசெய்யப்பட்ட மண்டல விழிப்புணர்வு",
      subtitle: "சர்வதேச எல்லைக்கோட்டை (IMBL) அறிய உதவும் முடிவு ஆதரவு அமைப்பு",
      borderSafety: "எல்லைப் பாதுகாப்பு மதிப்பீடு",
      proximityAlertTitle: "⚠ எல்லைப் பகுதி எச்சரிக்கை (BORDER PROXIMITY ALERT)",
      proximityAlertText: "எல்லைப் பகுதியை நெருங்குகிறீர்கள். பாதுகாப்பான தூரத்தைப் பராமரிக்கவும்.",
      zoneRestrictedTitle: "⚠ மண்டலம் தட்டுப்பாடு / தடைசெய்யப்பட்டது (RESTRICTED)",
      zoneRestrictedText: "இந்த இடம் பாதுகாப்பு படைக்குரிய தடைசெய்யப்பட்ட மண்டலம் அல்லது எல்லைக்கோடு அருகில் உள்ளதால் தவிர்க்கப்பட்டுள்ளது.",
      disclaimer: "கட்டமைக்கப்பட்ட மாதிரித் தரவு — இது சட்டப்பூர்வமான நாவிகேஷன் கருவி அல்ல",
      distanceToIMBL: "சர்வதேச எல்லைக்கோட்டிற்கான தூரம்",
      states: {
        safe: "பாதுகாப்பானது (SAFE)",
        caution: "எச்சரிக்கை தேவை (CAUTION)",
        restricted: "தடைசெய்யப்பட்டது (RESTRICTED)",
      },
      layers: {
        imbl: "சர்வதேச கடல் எல்லைக்கோடு (IMBL)",
        territorial: "பிராந்திய கடல் எல்லை (12 நார்டிகல் மைல்கள்)",
        restrictedZone: "கடற்படை தடைசெய்யப்பட்ட பாதுகாப்பு மண்டலம்",
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
      inputPlaceholder: "मौसम, जियोफेंस, प्रतिबंधित क्षेत्र के बारे में पूछें...",
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
        q9: "क्या मैं समुद्री सीमा के करीब हूँ?",
        q10: "क्या जोन A सीमा प्रतिबंधों से सुरक्षित है?",
        q11: "क्या मैं वर्तमान में प्रतिबंधित क्षेत्र में हूँ?",
        q12: "क्या आगे कोई खतरा या चक्रवात है?",
      },
      intents: {
        greeting: "नमस्कार कप्तान! मैं ओर्का (ORCA), आपका एआई समुद्री सहायक हूँ।",
        weatherSummary: "चेन्नई तट मौसम पूर्वानुमान: कल सुबह 14.2 किमी/घंटा हवाएँ रहेंगी।",
        safetySummary: "जोन A (North East Shelf) सुरक्षा मूल्यांकन: कम जोखिम (LOW RISK)।",
        cycloneSummary: "चक्रवात वरुण वर्तमान में चेन्नई से 145 किमी दूर है।",
        routeSummary: "चेन्नई बंदरगाह से जोन A का मार्ग: दूरी 18.4 किमी।",
        marineSummary: "वर्तमान समुद्री पैरामीटर: समुद्री सतह तापमान 28.2°C है।",
        borderSummary: "समुद्री सीमा स्थिति: आपकी नाव सुरक्षित भारतीय क्षेत्र में है (SAFE)।",
        geofenceSummary: "जियोफेंस विश्लेषण: नाव वर्तमान में सुरक्षित क्षेत्र में है। नौसेना प्रतिबंधित क्षेत्र 6.4 किमी दूर है।",
        whySummary: "जोन A की सिफारिश अनुकूल तापमान (28.2°C) के कारण की गई है।",
        unknownClarification: "क्षमा करें, मैं समझ नहीं पाया।",
      },
    },
    geofence: {
      title: "नाव जियोफेंसिंग और क्षेत्र पहचान प्रणाली",
      subtitle: "प्रतिबंधित नौसेना और खतरा क्षेत्रों के लिए वास्तविक समय बिंदु पहचान",
      conceptLabel: "मत्स्य क्षेत्र → सुरक्षित मार्ग → जियोफेंसिंग एवं चेतावनियां",
      vesselStatusTitle: "नाव सुरक्षा स्थिति (VESSEL SAFETY STATUS)",
      prohibitedEntryTitle: "⚠ प्रतिबंधित क्षेत्र में प्रवेश (PROHIBITED ZONE ENTRY)",
      prohibitedEntryText: "नाव प्रतिबंधित क्षेत्र में प्रवेश कर चुकी है! तुरंत वापस लौटें।",
      hazardEntryTitle: "⚠ खतरा क्षेत्र में प्रवेश (HAZARD ZONE ENTRY)",
      hazardEntryText: "नाव सक्रिय समुद्री खतरा क्षेत्र में है।",
      approachingRestricted: "⚠ प्रतिबंधित क्षेत्र के करीब पहुंच रहे हैं",
      approachingHazard: "⚠ खतरा क्षेत्र के करीब पहुंच रहे हैं",
      unsafeRouteDetected: "⚠ असुरक्षित मार्ग का पता चला। वैकल्पिक मार्ग तैयार किया गया।",
      alternativeRouteGenerated: "वैकल्पिक सुरक्षित मार्ग सक्रिय",
      startSimulation: "▶ शुरू करें",
      pauseSimulation: "⏸ रोकें",
      resetSimulation: "↻ रीसेट",
      simulationSpeed: "गति",
      alertHistory: "जियोफेंस चेतावनी इतिहास",
      clearHistory: "इतिहास मिटाएं",
      distanceToRestricted: "प्रतिबंधित क्षेत्र की दूरी",
      distanceToHazard: "निकटतम खतरे की दूरी",
      types: {
        safe: "सुरक्षित (SAFE)",
        caution: "सावधानी (CAUTION)",
        prohibited: "प्रतिबंधित (PROHIBITED)",
        hazard: "खतरा (HAZARD)",
      },
    },
    border: {
      title: "समुद्री सीमा एवं प्रतिबंधित क्षेत्र जागरूकता",
      subtitle: "अंतर्राष्ट्रीय समुद्री सीमा (IMBL) के लिए निर्णय सहायता प्रणाली",
      borderSafety: "सीमा सुरक्षा रेटिंग",
      proximityAlertTitle: "⚠ सीमा निकटता चेतावनी (BORDER PROXIMITY ALERT)",
      proximityAlertText: "आपकी नाव समुद्री सीमा के करीब पहुंच रही है। सुरक्षित दूरी बनाए रखें।",
      zoneRestrictedTitle: "⚠ क्षेत्र अनुशंसित नहीं / प्रतिबंधित (RESTRICTED)",
      zoneRestrictedText: "यह स्थान नौसेना के प्रतिबंधित क्षेत्र में होने के कारण सिफारिश से बाहर रखा गया है।",
      disclaimer: "सिम्युलेटेड डेटा — यह कानूनी नेविगेशन उपकरण नहीं है",
      distanceToIMBL: "अंतर्राष्ट्रीय सीमा रेखा (IMBL) से दूरी",
      states: {
        safe: "सुरक्षित (SAFE)",
        caution: "सावधानी आवश्यक (CAUTION)",
        restricted: "प्रतिबंधित (RESTRICTED)",
      },
      layers: {
        imbl: "अंतर्राष्ट्रीय समुद्री सीमा रेखा (IMBL)",
        territorial: "प्रादेशिक समुद्री सीमा (12 समुद्री मील)",
        restrictedZone: "नौसेना प्रतिबंधित रक्षा क्षेत्र",
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
      inputPlaceholder: "వాతావరణం, జియోఫెన్సింగ్, నిషేధిత ప్రాంతం గురించి అడగండి...",
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
        q9: "నేను సముద్ర సరిహద్దుకు సమీపంలో ఉన్నానా?",
        q10: "జోన్ A సరిహద్దు నిబంధనల నుండి సురక్షితమేనా?",
        q11: "నేను నిషేధిత ప్రాంతంలో ఉన్నానా?",
        q12: "ముందు ఏదైనా ప్రమాదం ఉందా?",
      },
      intents: {
        greeting: "నమస్కారం కెప్టెన్! నేను ఓర్కా (ORCA), మీ AI సముద్ర సహాయకుడిని.",
        weatherSummary: "చెన్నై తీర ప్రాంత వాతావరణ అంచనా: రేపు ఉదయం 14.2 కిమీ/గం గాలులు.",
        safetySummary: "జోన్ A రక్షణ అంచనా: తక్కువ ప్రమాదం (LOW RISK).",
        cycloneSummary: "వరుణ తుఫాను చెన్నైకి 145 కిమీ దూరంలో ఉంది.",
        routeSummary: "చెన్నై పోర్ట్ నుండి జోన్ A కు మార్గం: దూరం 18.4 కిమీ.",
        marineSummary: "ప్రస్తుత సముద్ర పారామితులు: ఉష్ణోగ్రత 28.2°C.",
        borderSummary: "సరిహద్దు స్థితి: మీ పడవ అంతర్జాతీయ సరిహద్దు నుండి 38.5 కిమీ దూరంలో ఉంది.",
        geofenceSummary: "జియోఫెన్స్ విశ్లేషణ: పడవ ప్రస్తుతం సురక్షిత ప్రాంతంలో ఉంది.",
        whySummary: "జోన్ A సిఫార్సు చేయబడింది.",
        unknownClarification: "క్షమించండి, మీ ప్రశ్న అర్థం కాలేదు.",
      },
    },
    geofence: {
      title: "పడవ జియోఫెన్సింగ్ వ్యవస్థ",
      subtitle: "నిషేధిత ప్రాంతాలను గుర్తించే GPS వ్యవస్థ",
      conceptLabel: "చేపల వేట ప్రాంతాలు → సురక్షిత మార్గాలు → జియోఫెన్సింగ్ & హెచ్చరికలు",
      vesselStatusTitle: "పడవ రక్షణ స్థితి (VESSEL SAFETY STATUS)",
      prohibitedEntryTitle: "⚠ నిషేధిత ప్రాంతంలోకి ప్రవేశించారు (PROHIBITED ZONE ENTRY)",
      prohibitedEntryText: "పడవ నిషేధిత ప్రాంతంలోకి ప్రవేశించింది! వెంటనే వెనక్కి మళ్లండి.",
      hazardEntryTitle: "⚠ ప్రమాదకర ప్రాంతంలోకి ప్రవేశించారు (HAZARD ZONE ENTRY)",
      hazardEntryText: "పడవ సక్రియ ప్రమాదకర ప్రాంతంలో ఉంది.",
      approachingRestricted: "⚠ నిషేధిత ప్రాంతానికి సమీపిస్తున్నారు",
      approachingHazard: "⚠ ప్రమాదకర ప్రాంతానికి సమీపిస్తున్నారు",
      unsafeRouteDetected: "⚠ సురక్షితం కాని మార్గం గుర్తించబడింది. ప్రత్యామ్నాయ మార్గం సృష్టించబడింది.",
      alternativeRouteGenerated: "ప్రత్యామ్నాయ సురక్షిత మార్గం సక్రియంగా ఉంది",
      startSimulation: "▶ ప్రారంభించు",
      pauseSimulation: "⏸ ఆపు",
      resetSimulation: "↻ రీసెట్",
      simulationSpeed: "వేగం",
      alertHistory: "జియోఫెన్స్ హెచ్చరికల చరిత్ర",
      clearHistory: "చరిత్రను తొలగించు",
      distanceToRestricted: "నిషేధిత ప్రాంతానికి దూరం",
      distanceToHazard: "ప్రమాదకర ప్రాంతానికి దూరం",
      types: {
        safe: "సురక్షితం (SAFE)",
        caution: "జాగ్రత్త (CAUTION)",
        prohibited: "నిషేధించబడింది (PROHIBITED)",
        hazard: "ప్రమాదకరం (HAZARD)",
      },
    },
    border: {
      title: "సముద్ర సరిహద్దు & నిషేధిత ప్రాంత అవగాహన",
      subtitle: "అంతర్జాతీయ సముద్ర సరిహద్దు (IMBL) అవగాహన వ్యవస్థ",
      borderSafety: "సరిహద్దు భద్రతా రేటింగ్",
      proximityAlertTitle: "⚠ సరిహద్దు హెచ్చరిక (BORDER PROXIMITY ALERT)",
      proximityAlertText: "మీరు సముద్ర సరిஹద్దుకు దగ్గరగా ఉన్నారు. సురక్షిత దూరం పాటించండి.",
      zoneRestrictedTitle: "⚠ ప్రాంతం నిషేధించబడింది (RESTRICTED)",
      zoneRestrictedText: "ఈ ప్రాంతం నావికాదళ నిషేధిత ప్రాంతం పరిధిలో ఉన్నందున మినహాయించబడింది.",
      disclaimer: "నమూనా డేటా — ఇది అధికారిక నావిగేషన్ సాధనం కాదు",
      distanceToIMBL: "అంతర్జాతీయ సరిహద్దు (IMBL) కి దూరం",
      states: {
        safe: "సురక్షితం (SAFE)",
        caution: "జాగ్రత్త అవసరం (CAUTION)",
        restricted: "నిషేధించబడింది (RESTRICTED)",
      },
      layers: {
        imbl: "అంతర్జాతీయ సముద్ర సరిహద్దు రేఖ (IMBL)",
        territorial: "ప్రాంతీయ సముద్ర సరిహద్దు (12 నాటికల్ మైళ్ళు)",
        restrictedZone: "నావికాదళ రక్షణ నిషేధిత ప్రాంతం",
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
      title: "48-గంటల மிஷன் ప్యాకేజీ & ఆఫ్‌లైన్ మోడ్",
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
