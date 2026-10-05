import React, { useState } from 'react';
import { 
  Flame, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  Zap, 
  BookOpen, 
  Users, 
  CheckCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import CategoryIcon from './CategoryIcon';
import { playClickSound } from '../utils/audio';
import { getStoredUser, saveStoredUser, getStoredStats } from '../utils/storage';

export default function HomeScreen({ categories, onSelectCategory, onStartQuickQuiz }) {
  const [userName, setUserName] = useState(getStoredUser());
  const [isEditingName, setIsEditingName] = useState(false);
  const stats = getStoredStats();

  const handleSaveName = (e) => {
    e.preventDefault();
    const trimmed = userName.trim() || 'Bombero / Aspirante';
    setUserName(trimmed);
    saveStoredUser(trimmed);
    setIsEditingName(false);
    playClickSound();
  };

  const totalQuestions = categories.reduce(
    (acc, cat) => acc + (cat.questions ? cat.questions.length : 0),
    0
  );

  const accuracy = stats.totalQuestionsAnswered > 0 
    ? Math.round((stats.correctAnswersCount / stats.totalQuestionsAnswered) * 100)
    : 0;

  return (
    <div className="space-y-10 py-6 sm:py-10 animate-fade-in">
      
      {/* Hero Principal BVL 12 */}
      <section className="relative overflow-hidden rounded-3xl border border-red-500/20 bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 p-6 sm:p-10 shadow-2xl">
        <div className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-red-600/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          {/* Badge institucional */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-500/15 border border-red-500/30 text-red-300 text-xs font-bold tracking-wide uppercase mb-6 shadow-sm">
            <Flame className="w-4 h-4 text-red-400 fill-red-400" />
            <span>Bomberos Voluntarios de Lanús • Cuartel 12</span>
          </div>

          <h1 className="font-heading text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Portal de Capacitación y <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-amber-400 to-yellow-400">Quiz Técnico</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8">
            Poné a prueba y perfeccioná tus conocimientos bomberiles. Seleccioná una materia, elegí el nivel de dificultad adecuado a tu formación (o jugá el módulo unificado) y resolvé los desafíos con fundamentación técnica real.
          </p>

          {/* Identificación de Bombero (Opcional y amigable) */}
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/60 rounded-2xl p-4 sm:p-5 mb-8 max-w-xl">
            <div className="flex items-center justify-between gap-3 mb-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                Operador / Evaluado:
              </span>
              {!isEditingName && (
                <button
                  onClick={() => setIsEditingName(true)}
                  className="text-xs text-amber-400 hover:text-amber-300 font-medium underline"
                >
                  Cambiar
                </button>
              )}
            </div>

            {isEditingName ? (
              <form onSubmit={handleSaveName} className="flex gap-2">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Ej: Bombero Pérez / Dotación 2"
                  className="flex-1 bg-slate-900 border border-slate-600 rounded-xl px-3.5 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                  autoFocus
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-xl transition-colors"
                >
                  Guardar
                </button>
              </form>
            ) : (
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 flex items-center justify-center font-black text-white text-sm shadow">
                  {userName.charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-base font-bold text-white">{userName}</div>
                  <div className="text-xs text-slate-400">Modo Libre Activo • Cuartel 12 Lanús</div>
                </div>
              </div>
            )}
          </div>

          {/* Botones de acción principales */}
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                playClickSound();
                onStartQuickQuiz();
              }}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-red-700/30 transition-all hover:scale-[1.02] active:scale-95 border border-red-500/40"
            >
              <span>Explorar Materias y Jugar</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Resumen de Métricas Rápidas */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-red-500/10 text-red-400 border border-red-500/20">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">{categories.length}</div>
            <div className="text-xs text-slate-400 font-medium">Materias Técnicas</div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">{totalQuestions}</div>
            <div className="text-xs text-slate-400 font-medium">Preguntas Totales</div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <CheckCircle className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">{accuracy}%</div>
            <div className="text-xs text-slate-400 font-medium">Efectividad Global</div>
          </div>
        </div>

        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5 flex items-center gap-4">
          <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <div className="text-2xl font-black text-white">{stats.quizzesCompleted}</div>
            <div className="text-xs text-slate-400 font-medium">Evaluaciones Hechas</div>
          </div>
        </div>
      </section>

      {/* Grid de Materias Directas */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-heading text-xl sm:text-2xl font-bold text-white">
              Materias de Instrucción Bomberil
            </h2>
            <p className="text-sm text-slate-400">
              Hacé click en cualquier materia para ingresar a su temario y niveles
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => {
            const hasMultipleDifficulties = cat.difficulties && cat.difficulties.length > 1;

            return (
              <button
                key={cat.id}
                onClick={() => {
                  playClickSound();
                  onSelectCategory(cat);
                }}
                className={`text-left p-5 rounded-2xl bg-slate-900/70 border border-slate-800 transition-all duration-200 hover:-translate-y-1 hover:shadow-xl ${cat.hoverBg} group relative overflow-hidden flex flex-col justify-between`}
              >
                {/* Gradient subtle bar */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cat.bannerGradient}`} />

                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className={`p-3 rounded-xl ${cat.badgeBg} border shadow-sm`}>
                      <CategoryIcon name={cat.icon} className="w-6 h-6" />
                    </div>

                    {/* Badge de Dificultades */}
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
                      {hasMultipleDifficulties
                        ? `${cat.difficulties.length} Dificultades`
                        : "Nivel Único"}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2">
                    {cat.name}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium">
                    {cat.questions ? cat.questions.length : 0} preguntas
                  </span>
                  <span className="text-amber-400 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Ingresar <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* Frase / Lema de Bomberos */}
      <footer className="text-center pt-8 pb-4 border-t border-slate-800/80">
        <p className="text-xs sm:text-sm font-semibold text-slate-400 tracking-widest uppercase">
          "Valor, Abnegación y Sacrificio"
        </p>
        <p className="text-[11px] text-slate-500 mt-1">
          Cuerpo Activo y Reserva • Bomberos Voluntarios de Lanús (BVL 12)
        </p>
      </footer>
    </div>
  );
}
