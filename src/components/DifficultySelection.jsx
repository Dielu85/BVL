import React, { useState } from 'react';
import { 
  ArrowLeft, 
  ArrowRight, 
  Clock, 
  Layers, 
  Check, 
  Zap, 
  Sparkles,
  HelpCircle,
  ShieldAlert,
  Flame
} from 'lucide-react';
import CategoryIcon from './CategoryIcon';
import { playClickSound } from '../utils/audio';
import { DIFFICULTY_CONFIG } from '../data/quizData';

export default function DifficultySelection({ category, onStartQuiz, onBack }) {
  const hasMultipleDifficulties = category.difficulties && category.difficulties.length > 1;

  // Si tiene más de una dificultad, por defecto la primera o 'todas'
  const [selectedDifficulty, setSelectedDifficulty] = useState(
    hasMultipleDifficulties ? category.difficulties[0] : category.difficulties[0] || 'único'
  );

  // Opciones de configuración
  const [useTimer, setUseTimer] = useState(false);
  const [questionCountLimit, setQuestionCountLimit] = useState('all');

  // Filtrar preguntas según la dificultad seleccionada
  const availableQuestions = category.questions.filter((q) => {
    if (selectedDifficulty === 'all') return true;
    return q.difficulty === selectedDifficulty;
  });

  const handleStart = () => {
    playClickSound();
    let finalQuestions = [...availableQuestions];
    
    // Si eligió límite de preguntas
    if (questionCountLimit !== 'all') {
      const limit = parseInt(questionCountLimit, 10);
      if (finalQuestions.length > limit) {
        // Mezclar aleatoriamente y recortar
        finalQuestions = finalQuestions.sort(() => Math.random() - 0.5).slice(0, limit);
      }
    } else {
      // Mezclar aleatoriamente
      finalQuestions = finalQuestions.sort(() => Math.random() - 0.5);
    }

    onStartQuiz({
      category,
      difficulty: selectedDifficulty,
      questions: finalQuestions,
      useTimer,
      timerSeconds: 30
    });
  };

  return (
    <div className="space-y-8 py-4 sm:py-6 animate-fade-in max-w-4xl mx-auto">
      {/* Encabezado y Volver */}
      <div className="flex items-center gap-4 border-b border-slate-800 pb-5">
        <button
          onClick={() => {
            playClickSound();
            onBack();
          }}
          className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
          title="Volver a Materias"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-red-400">
              Paso 2 • Configuración del Examen
            </span>
          </div>
          <h1 className="font-heading text-2xl sm:text-3xl font-black text-white flex items-center gap-3">
            <span>{category.name}</span>
          </h1>
        </div>
      </div>

      {/* Tarjeta de Resumen de la Materia */}
      <div className="rounded-2xl bg-slate-900/60 border border-slate-800 p-5 flex items-start gap-4">
        <div className={`p-3.5 rounded-2xl ${category.badgeBg} border shrink-0`}>
          <CategoryIcon name={category.icon} className="w-7 h-7" />
        </div>
        <div>
          <h3 className="font-bold text-white text-base mb-1">{category.name}</h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {category.shortDesc}
          </p>
          <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
              Total disponible: <strong className="text-white">{category.questions.length} preguntas</strong>
            </span>
            <span className="bg-slate-800 px-2.5 py-1 rounded-md border border-slate-700">
              {hasMultipleDifficulties ? `${category.difficulties.length} niveles de dificultad` : 'Nivel general único'}
            </span>
          </div>
        </div>
      </div>

      {/* SECCIÓN: Selección de Dificultad (Condicional) */}
      <div className="space-y-4">
        <div>
          <h2 className="font-heading text-lg font-bold text-white flex items-center gap-2">
            <Layers className="w-5 h-5 text-amber-400" />
            <span>
              {hasMultipleDifficulties 
                ? "Seleccionar Nivel de Dificultad" 
                : "Nivel de la Materia"}
            </span>
          </h2>
          <p className="text-xs text-slate-400">
            {hasMultipleDifficulties
              ? "Esta materia cuenta con varios niveles de exigencia. Elegí el que se adapte a tu objetivo:"
              : "Esta materia tiene un nivel unificado estándar para todos los bomberos:"}
          </p>
        </div>

        {/* Si tiene varias dificultades, mostrar selector */}
        {hasMultipleDifficulties ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            {category.difficulties.map((diffKey) => {
              const diffInfo = DIFFICULTY_CONFIG[diffKey] || {
                label: diffKey,
                color: "text-slate-300",
                desc: "",
                bg: "bg-slate-800 border-slate-700"
              };
              const countInDiff = category.questions.filter((q) => q.difficulty === diffKey).length;
              const isSelected = selectedDifficulty === diffKey;

              return (
                <button
                  key={diffKey}
                  onClick={() => {
                    playClickSound();
                    setSelectedDifficulty(diffKey);
                  }}
                  className={`text-left p-4 rounded-2xl border transition-all duration-200 relative flex flex-col justify-between ${
                    isSelected
                      ? "bg-slate-900 border-red-500 shadow-xl shadow-red-600/10 ring-2 ring-red-500/30"
                      : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-xs font-bold uppercase tracking-wider ${diffInfo.color}`}>
                        {diffInfo.label}
                      </span>
                      {isSelected && (
                        <div className="w-5 h-5 rounded-full bg-red-600 text-white flex items-center justify-center">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      )}
                    </div>

                    <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                      {diffInfo.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-slate-400 flex justify-between">
                    <span>Banco:</span>
                    <strong className="text-slate-200">{countInDiff} preguntas</strong>
                  </div>
                </button>
              );
            })}

            {/* Opción adicional: Todas las dificultades combinadas */}
            <button
              onClick={() => {
                playClickSound();
                setSelectedDifficulty('all');
              }}
              className={`sm:col-span-3 text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between ${
                selectedDifficulty === 'all'
                  ? "bg-slate-900 border-amber-500 shadow-xl shadow-amber-600/10 ring-2 ring-amber-500/30"
                  : "bg-slate-900/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-2">
                    <span>Desafío Total (Todas las dificultades combinadas)</span>
                    <span className="text-[10px] bg-amber-500/20 text-amber-300 font-semibold px-2 py-0.5 rounded-full">
                      Recomendado
                    </span>
                  </div>
                  <div className="text-xs text-slate-400">
                    Incluye preguntas de nivel Básico, Intermedio y Avanzado en una misma sesión evaluativa.
                  </div>
                </div>
              </div>
              {selectedDifficulty === 'all' && (
                <div className="w-5 h-5 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
              )}
            </button>
          </div>
        ) : (
          /* En caso de que la materia tenga nivel único */
          <div className="p-4 rounded-2xl bg-blue-950/20 border border-blue-500/30 flex items-center gap-3.5">
            <div className="p-3 rounded-xl bg-blue-500/20 text-blue-400">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Nivel Único General</div>
              <p className="text-xs text-slate-300 mt-0.5">
                Esta materia no requiere distinción por dificultad; incluye todas las competencias operativas reglamentarias de {category.name}.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* SECCIÓN: Modalidad y Temporizador */}
      <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-5">
        <h3 className="font-heading text-base font-bold text-white flex items-center gap-2">
          <Clock className="w-4 h-4 text-red-400" />
          <span>Modalidad de Evaluación</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Switch de Tiempo */}
          <div
            onClick={() => {
              playClickSound();
              setUseTimer(!useTimer);
            }}
            className={`cursor-pointer p-4 rounded-xl border transition-all flex items-center justify-between ${
              useTimer
                ? "bg-slate-800 border-red-500/80"
                : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
            }`}
          >
            <div>
              <div className="text-sm font-bold text-white flex items-center gap-2">
                <span>Modo Contrarreloj (30s)</span>
                {useTimer && (
                  <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-semibold">
                    Activo
                  </span>
                )}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {useTimer ? "30 segundos por pregunta para simular estrés de guardia" : "Sin tiempo. Ideal para estudiar y leer explicaciones"}
              </div>
            </div>

            <div className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors ${
              useTimer ? "bg-red-600 justify-end" : "bg-slate-700 justify-start"
            }`}>
              <div className="bg-white w-4 h-4 rounded-full shadow-md" />
            </div>
          </div>

          {/* Cantidad de preguntas */}
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex flex-col justify-between">
            <div className="text-sm font-bold text-white mb-2">Cantidad de Preguntas:</div>
            <div className="flex gap-2">
              {[
                { label: 'Todas', value: 'all' },
                { label: '5 preguntas', value: '5' },
                { label: '10 preguntas', value: '10' }
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => {
                    playClickSound();
                    setQuestionCountLimit(opt.value);
                  }}
                  className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold border transition-all ${
                    questionCountLimit === opt.value
                      ? "bg-red-600 border-red-500 text-white"
                      : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Botón de Comienzo del Quiz */}
      <div className="pt-2 flex items-center justify-between">
        <button
          onClick={() => {
            playClickSound();
            onBack();
          }}
          className="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          Elegir otra materia
        </button>

        <button
          onClick={handleStart}
          disabled={availableQuestions.length === 0}
          className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-black text-base shadow-xl shadow-red-600/25 transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed border border-red-400/40"
        >
          <span>Comenzar Quiz ({availableQuestions.length} disp.)</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
