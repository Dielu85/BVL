import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Award, 
  RotateCcw, 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  ChevronDown, 
  ChevronUp, 
  BookOpen, 
  ShieldCheck, 
  Flame,
  Home
} from 'lucide-react';
import CategoryIcon from './CategoryIcon';
import { playClickSound, playVictorySound } from '../utils/audio';
import { getStoredUser, saveQuizResult } from '../utils/storage';
import { DIFFICULTY_CONFIG } from '../data/quizData';

export default function QuizResults({
  category,
  difficulty,
  score,
  totalQuestions,
  answersHistory,
  onRetry,
  onChangeDifficulty,
  onGoHome
}) {
  const [showReview, setShowReview] = useState(false);
  const userName = getStoredUser();

  const scorePercent = Math.round((score / totalQuestions) * 100);
  const isPassed = scorePercent >= 60;
  const isHighPass = scorePercent >= 80;

  // Registrar en historial y disparar confeti si aprobó con buena nota
  useEffect(() => {
    saveQuizResult({
      categoryId: category.id,
      categoryName: category.name,
      difficulty,
      total: totalQuestions,
      correct: score,
      scorePercent
    });

    if (isHighPass) {
      playVictorySound();
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {
        // Confetti fallback
      }
    }
  }, []);

  const getVerdict = () => {
    if (scorePercent === 100) {
      return {
        title: "¡Calificación Perfecta! Sobresaliente",
        desc: "Dominio absoluto de los procedimientos operativos y fundamentos técnicos bomberiles.",
        color: "text-amber-400",
        badge: "bg-amber-500/20 text-amber-300 border-amber-500/40"
      };
    }
    if (scorePercent >= 80) {
      return {
        title: "¡Aprobado con Distinción!",
        desc: "Excelente capacidad resolutiva. Listo para aplicar estos conceptos en la guardia y emergencias.",
        color: "text-emerald-400",
        badge: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40"
      };
    }
    if (scorePercent >= 60) {
      return {
        title: "¡Aprobado Operativo!",
        desc: "Conocimientos generales adecuados. Se aconseja repasar las preguntas erróneas para afianzar.",
        color: "text-blue-400",
        badge: "bg-blue-500/20 text-blue-300 border-blue-500/40"
      };
    }
    return {
      title: "Reentrenamiento Requerido",
      desc: "No se alcanzó el puntaje mínimo de corte (60%). Repasá la cartilla técnica y volvé a intentarlo.",
      color: "text-rose-400",
      badge: "bg-rose-500/20 text-rose-300 border-rose-500/40"
    };
  };

  const verdict = getVerdict();
  const diffInfo = DIFFICULTY_CONFIG[difficulty] || {
    label: difficulty === 'all' ? 'Desafío Combinado' : difficulty,
    color: 'text-amber-400'
  };

  return (
    <div className="max-w-3xl mx-auto py-6 space-y-8 animate-fade-in">
      
      {/* Tarjeta de Calificación Principal */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl text-center relative overflow-hidden">
        {/* Glow de fondo */}
        <div className={`absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full blur-3xl pointer-events-none ${
          isHighPass ? "bg-amber-500/20" : isPassed ? "bg-emerald-500/15" : "bg-rose-500/15"
        }`} />

        <div className="relative z-10 space-y-5">
          {/* Badge de Bomberos Lanús */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-semibold">
            <Flame className="w-3.5 h-3.5 text-red-500 fill-red-500" />
            <span>BVL 12 • Registro de Evaluación</span>
          </div>

          {/* Calificación en Círculo / Medidor */}
          <div className="inline-flex flex-col items-center justify-center w-36 h-36 rounded-full border-4 border-slate-800 bg-slate-950/80 shadow-2xl p-4 my-2">
            <span className={`text-4xl font-black font-heading ${verdict.color}`}>
              {scorePercent}%
            </span>
            <span className="text-xs font-bold text-slate-400 mt-0.5">
              {score} de {totalQuestions} aciertos
            </span>
          </div>

          <div>
            <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border mb-3 ${verdict.badge}`}>
              {verdict.title}
            </div>
            <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              {verdict.desc}
            </p>
          </div>

          {/* Datos del Test */}
          <div className="pt-4 border-t border-slate-800/80 max-w-md mx-auto grid grid-cols-2 gap-3 text-left">
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Materia:</span>
              <span className="text-xs font-bold text-white truncate block">{category.name}</span>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider block font-semibold">Dificultad:</span>
              <span className={`text-xs font-bold ${diffInfo.color} truncate block`}>{diffInfo.label}</span>
            </div>
            <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 col-span-2 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">Operador evaluado:</span>
              <span className="text-xs font-bold text-amber-400">{userName}</span>
            </div>
          </div>

          {/* Botones de Acción */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => {
                playClickSound();
                onRetry();
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reintentar Materia</span>
            </button>

            {category.difficulties && category.difficulties.length > 1 && (
              <button
                onClick={() => {
                  playClickSound();
                  onChangeDifficulty();
                }}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm transition-all"
              >
                <span>Cambiar Dificultad</span>
              </button>
            )}

            <button
              onClick={() => {
                playClickSound();
                onGoHome();
              }}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-bold text-xs sm:text-sm transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Volver a Materias</span>
            </button>
          </div>
        </div>
      </div>

      {/* Botón desplegable para Revisión Detallada de Preguntas */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-xl">
        <button
          onClick={() => {
            playClickSound();
            setShowReview(!showReview);
          }}
          className="w-full flex items-center justify-between text-left"
        >
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-slate-800 text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-base font-bold text-white">
                Revisión Pedagógica de Preguntas
              </h3>
              <p className="text-xs text-slate-400">
                Mirá en detalle cada pregunta, tu respuesta y la explicación técnica
              </p>
            </div>
          </div>

          <div className="p-2 rounded-lg bg-slate-800 text-slate-400">
            {showReview ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </button>

        {/* Lista de preguntas revisadas */}
        {showReview && (
          <div className="mt-6 pt-6 border-t border-slate-800 space-y-5 animate-fade-in">
            {answersHistory.map((item, idx) => {
              const { question, selectedOption, isCorrect, timedOut } = item;
              const selectedText = selectedOption >= 0 
                ? question.options[selectedOption] 
                : 'Sin respuesta (Tiempo agotado)';
              const correctText = question.options[question.correctAnswer];

              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl border ${
                    isCorrect 
                      ? "bg-slate-950/60 border-emerald-500/30" 
                      : "bg-slate-950/60 border-rose-500/30"
                  }`}
                >
                  <div className="flex items-start gap-3 mb-2">
                    <span className="text-xs font-bold text-slate-500 mt-0.5">#{idx + 1}</span>
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {question.question}
                      </h4>
                      {question.reference && (
                        <span className="text-[10px] text-slate-400 mt-1 inline-block">
                          Ref: {question.reference}
                        </span>
                      )}
                    </div>
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Correcta
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/30">
                        <XCircle className="w-3.5 h-3.5" /> {timedOut ? "Tiempo" : "Incorrecta"}
                      </span>
                    )}
                  </div>

                  <div className="space-y-1.5 pl-6 text-xs text-slate-300 mt-3 border-l-2 border-slate-800">
                    <div>
                      <span className="text-slate-500 font-medium">Tu respuesta: </span>
                      <span className={isCorrect ? "text-emerald-300 font-semibold" : "text-rose-300 font-semibold"}>
                        {selectedText}
                      </span>
                    </div>

                    {!isCorrect && (
                      <div>
                        <span className="text-slate-500 font-medium">Respuesta correcta: </span>
                        <span className="text-emerald-400 font-semibold">
                          {correctText}
                        </span>
                      </div>
                    )}

                    <div className="pt-2 text-slate-400 leading-relaxed text-[11px] bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
                      <strong className="text-slate-300">Fundamentación técnica: </strong>
                      {question.explanation}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}
