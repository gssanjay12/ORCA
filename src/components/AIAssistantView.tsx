import React, { useState, useEffect } from 'react';
import { translations, type Language } from '../i18n/translations';
import { generateAIRecommendation, type AIResponse } from '../data/mockMarineData';
import {
  Bot,
  User,
  Send,
  Sparkles,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  HelpCircle,
  RefreshCw,
  Zap,
} from 'lucide-react';

interface AIAssistantViewProps {
  currentLang: Language;
  initialQuery?: string;
  isOffline: boolean;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'orca';
  text?: string;
  recommendation?: AIResponse;
  timestamp: string;
}

export const AIAssistantView: React.FC<AIAssistantViewProps> = ({
  currentLang,
  initialQuery,
  isOffline,
}) => {
  const t = translations[currentLang];

  const defaultUserQuery =
    currentLang === 'ta'
      ? 'நாளை காலை மீன்பிடிக்க எந்த இடத்திற்கு செல்லலாம்?'
      : currentLang === 'hi'
      ? 'कल सुबह मुझे मछली पकड़ने कहाँ जाना चाहिए?'
      : currentLang === 'te'
      ? 'రేపు ఉదయం నేను చేపల వేటకు ఎక్కడికి వెళ్ళాలి?'
      : 'Where should I fish tomorrow morning?';

  const [inputQuery, setInputQuery] = useState(initialQuery || defaultUserQuery);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [expandedWhyId, setExpandedWhyId] = useState<string | null>(null);

  // Initial chat history with default demo recommendation preloaded
  const [messages, setMessages] = useState<ChatMessage[]>(() => {
    const rec = generateAIRecommendation(defaultUserQuery, currentLang, isOffline);
    return [
      {
        id: 'msg-1',
        sender: 'user',
        text: defaultUserQuery,
        timestamp: '06:30 AM',
      },
      {
        id: 'msg-2',
        sender: 'orca',
        recommendation: rec,
        timestamp: '06:30 AM',
      },
    ];
  });

  // Re-generate message localization if language changes
  useEffect(() => {
    const rec = generateAIRecommendation(defaultUserQuery, currentLang, isOffline);
    setMessages([
      {
        id: 'msg-1',
        sender: 'user',
        text: defaultUserQuery,
        timestamp: '06:30 AM',
      },
      {
        id: 'msg-2',
        sender: 'orca',
        recommendation: rec,
        timestamp: '06:30 AM',
      },
    ]);
    setExpandedWhyId('msg-2');
  }, [currentLang, isOffline]);

  const handleSend = (queryToSend?: string) => {
    const q = (queryToSend || inputQuery).trim();
    if (!q || isAnalyzing) return;

    const userMsgId = `user-${Date.now()}`;
    const userMsg: ChatMessage = {
      id: userMsgId,
      sender: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputQuery('');
    setIsAnalyzing(true);

    // Simulate 1.2s AI inference processing delay
    setTimeout(() => {
      const rec = generateAIRecommendation(q, currentLang, isOffline);
      const botMsgId = `orca-${Date.now()}`;
      const botMsg: ChatMessage = {
        id: botMsgId,
        sender: 'orca',
        recommendation: rec,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsAnalyzing(false);
      setExpandedWhyId(botMsgId);
    }, 1200);
  };

  const suggestedQuestions = [
    t.ai.questions.q1,
    t.ai.questions.q2,
    t.ai.questions.q3,
    t.ai.questions.q4,
    t.ai.questions.q5,
  ];

  return (
    <div className="space-y-6 animate-fadeIn max-w-5xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-cyan-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 shadow-lg shadow-cyan-500/20">
            <Bot className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-xl font-black text-slate-100 flex items-center gap-2">
              <span>{t.ai.title}</span>
              {isOffline && (
                <span className="px-2 py-0.5 text-[10px] font-black bg-amber-500/30 text-amber-300 border border-amber-500/40 rounded-full">
                  LOCAL ENGINE
                </span>
              )}
            </h2>
            <p className="text-xs text-slate-300 mt-1">{t.ai.subtitle}</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs font-semibold text-slate-300 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800">
          <Zap className="w-4 h-4 text-cyan-400" />
          <span>ISRO PFZ & IMD Fusion AI</span>
        </div>
      </div>

      {/* Suggested Quick Question Chips */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
          {t.ai.suggestedQuestionsTitle}:
        </span>
        <div className="flex flex-wrap gap-2">
          {suggestedQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleSend(q)}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-cyan-950/60 border border-cyan-500/20 hover:border-cyan-400 text-xs text-slate-200 hover:text-cyan-300 transition-all font-medium flex items-center gap-1.5 shadow-sm text-left"
            >
              <HelpCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
              <span>{q}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Feed */}
      <div className="space-y-4 min-h-[380px]">
        {messages.map((msg) => {
          if (msg.sender === 'user') {
            return (
              <div key={msg.id} className="flex items-start justify-end gap-3">
                <div className="p-4 rounded-2xl bg-cyan-950/70 border border-cyan-500/40 text-slate-100 text-sm max-w-xl shadow-lg">
                  <div className="flex items-center justify-between gap-4 mb-1 text-[11px] text-cyan-400/80 font-bold">
                    <span>You (Fisherman)</span>
                    <span className="font-mono text-slate-400">{msg.timestamp}</span>
                  </div>
                  <p className="font-medium text-slate-100">{msg.text}</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-cyan-600/30 border border-cyan-500/50 flex items-center justify-center text-cyan-300 shrink-0 mt-1">
                  <User className="w-4 h-4" />
                </div>
              </div>
            );
          }

          const rec = msg.recommendation!;
          const isWhyOpen = expandedWhyId === msg.id;

          return (
            <div key={msg.id} className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 border border-cyan-300/40 flex items-center justify-center text-slate-950 font-extrabold shadow-lg shrink-0 mt-1">
                <Bot className="w-5 h-5" />
              </div>

              <div className="flex-1 rounded-2xl glass-panel-accent border-cyan-500/30 p-5 space-y-4 text-slate-100 shadow-2xl">
                {/* Header Title & Timestamp */}
                <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
                    <span className="font-black text-sm text-cyan-300">
                      {t.ai.recommendationTitle}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-slate-400">{msg.timestamp}</span>
                </div>

                {/* Summary Text */}
                <p className="text-xs sm:text-sm font-semibold text-slate-200 leading-relaxed bg-slate-950/60 p-3.5 rounded-xl border border-slate-800">
                  {rec.summary}
                </p>

                {/* Structured Recommendation Key Metrics */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-xl bg-gradient-to-br from-slate-900 to-cyan-950/50 border border-cyan-500/30 text-xs">
                  <div>
                    <span className="text-slate-400 block text-[11px] font-medium">
                      {t.dashboard.recommendedZone}
                    </span>
                    <strong className="text-cyan-300 text-sm font-bold block mt-0.5">
                      {rec.recommendedZone}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-medium">
                      {t.ai.suitabilityScore}
                    </span>
                    <strong className="text-emerald-400 text-base font-black block mt-0.5">
                      {rec.suitabilityScore}%
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-medium">
                      {t.ai.safetyRisk}
                    </span>
                    <strong className="text-emerald-400 text-sm font-bold block mt-0.5 uppercase">
                      {rec.safetyRisk}
                    </strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[11px] font-medium">
                      {t.dashboard.distance} & {t.dashboard.travelTime}
                    </span>
                    <strong className="text-slate-200 text-sm font-mono block mt-0.5">
                      {rec.distanceKm} km ({rec.travelTimeMin} min)
                    </strong>
                  </div>
                </div>

                {/* Key Ocean Reasons List */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-300 block">
                    {t.ai.keyReasons}:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {rec.reasons.map((reason, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{reason}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expandable "Why this recommendation?" Section */}
                <div className="pt-2">
                  <button
                    onClick={() => setExpandedWhyId(isWhyOpen ? null : msg.id)}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900/90 hover:bg-slate-850 border border-cyan-500/30 text-xs font-bold text-cyan-300 transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-cyan-400" />
                      <span>{t.ai.whyRecommendation}</span>
                    </div>
                    {isWhyOpen ? (
                      <ChevronUp className="w-4 h-4 text-cyan-400" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-cyan-400" />
                    )}
                  </button>

                  {isWhyOpen && (
                    <div className="mt-2.5 p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-2.5 text-slate-300 animate-fadeIn">
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1.5 shrink-0"></span>
                        <p>
                          <strong className="text-cyan-300">Sea Surface Temperature (SST):</strong>{' '}
                          {rec.whyExplanation.sstNote}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0"></span>
                        <p>
                          <strong className="text-emerald-300">Chlorophyll & Phytoplankton:</strong>{' '}
                          {rec.whyExplanation.chlorophyllNote}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-400 mt-1.5 shrink-0"></span>
                        <p>
                          <strong className="text-sky-300">Wind & Weather Conditions:</strong>{' '}
                          {rec.whyExplanation.weatherNote}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                        <p>
                          <strong className="text-blue-300">Wave Intensity & Swell:</strong>{' '}
                          {rec.whyExplanation.waveNote}
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0"></span>
                        <p>
                          <strong className="text-amber-300">Cyclone Safety Radius:</strong>{' '}
                          {rec.whyExplanation.cycloneNote}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {/* Processing Indicator */}
        {isAnalyzing && (
          <div className="flex items-center gap-3 p-4 rounded-2xl glass-panel border-cyan-500/30 text-xs text-cyan-300 animate-pulse">
            <RefreshCw className="w-5 h-5 text-cyan-400 animate-spin" />
            <span className="font-semibold">{t.ai.analyzing}</span>
          </div>
        )}
      </div>

      {/* Message Input Box */}
      <div className="sticky bottom-4 z-20">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-2 p-2 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-cyan-500/40 shadow-2xl"
        >
          <input
            type="text"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            placeholder={t.ai.inputPlaceholder}
            className="flex-1 bg-transparent px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim() || isAnalyzing}
            className="flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-black text-xs transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
          >
            <span>Ask ORCA</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </div>
  );
};
