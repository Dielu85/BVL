import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  Clock, 
  ArrowRight, 
  LogOut, 
  BookOpen, 
  AlertTriangle, 
  HelpCircle,
  Award
} from 'lucide-react';
import CategoryIcon from './CategoryIcon';
import { 
  playClickSound, 
  playCorrectSound, 
  playIncorrectSound 
} from '../utils/audio';
import { DIFFICULTY_CONFIG } from '../data/quizData';

export default function QuizGame({ 
  category, 
  difficulty, 
  questions, 
  useTimer = false, 
  timerSeconds = 30,
  onFinishQuiz, 
  onExitQuiz 
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Índice seleccionado
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(timerSeconds);
  const [score, setScore] = useState(0);
  const [answersHistory, setAnswersHistory] = useState([]); // Para revisión final
  const [showExitConfirm, setShowExitConfirm] = useState(false);

  const currentQuestion = questions[currentIndex];
  const totalQuestions = questions.length;
  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

  // Dificultad badge
  const diffInfo = DIFFICULTY_CONFIG[difficulty] || {
    label: difficulty === 'all' ? 'Desafío Combinado' : difficulty,
    badge: 'bg-amber-500 text-slate-950 font-bold',
    color: 'text-amber-400'
  };

  // Timer countdown
  useEffect(() => {
    if (!useTimer || isAnswered) return;

    if (timeLeft <= 0) {
      handleTimeOut();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isAnswered, useTimer]);

  // Manejo de fin de tiempo
  const handleTimeOut = () => {
    playIncorrectSound();
    setIsAnswered(true);
    setSelectedOption(-1); // -1 indica tiempo agotado

    setAnswersHistory((prev) => [
      ...prev,
      {
        question: currentQuestion,
        selectedOption: -1,
        isCorrect: false,
        timedOut: true
      }
    ]);
  };

  // Seleccionar una opción
  const handleSelectOption = (index) => {
    if (isAnswered) return;

    setSelectedOption(index);
    setIsAnswered(true);

    const isCorrect = index === currentQuestion.correctAnswer;
    if (isCorrect) {
      playCorrectSound();
      setScore((prev) => prev + 1);
    } else {
      playIncorrectSound();
    }

    setAnswersHistory((prev) => [
      ...prev,
      {
        question: currentQuestion,
        selectedOption: index,
        isCorrect,
        timedOut: false
      }
    ]);
  };

  // Pasar a la siguiente pregunta
  const handleNext = () => {
    playClickSound();
    if (currentIndex + 1 < totalQuestions) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
      setTimeLeft(timerSeconds);
    } else {
      // Fin del Quiz
      onFinishQuiz({
        category,
        difficulty,
        totalQuestions,
        score: score + (selectedOption === currentQuestion.correctAnswer ? 0 : 0), // Ya sumado
        answersHistory: [
          ...answersHistory
        ]
      });
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-4 sm:py-6 space-y-6 animate-fade-in relative">
      
      {/* Modal de confirmación para salir */}
      {showExitConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6 max-w-sm w-full text-center space-y-4 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-red-500/20 text-red-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h3 className="font-heading text-lg font-bold text-white">¿Abandonar evaluación?</h3>
            <p className="text-xs text-slate-300">
              Se perderá el progreso de esta sesión de preguntas.
            </p>
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => {
                  playClickSound();
                  setShowExitConfirm(false);
                }}
                className="flex-1 py-2.5 rounded-xl bg-slate-800 text-slate-300 text-xs font-bold hover:bg-slate-700 transition-colors"
              >
                Continuar Quiz
              </button>
              <button
                onClick={() => {
                  playClickSound();
                  onExitQuiz();
                }}
                className="flex-1 py-2.5 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-500 transition-colors"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Barra superior del Quiz */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 shadow-lg flex flex-col gap-3">
        <div className="flex items-center justify-between gap-3">
          
          {/* Materia y Dificultad */}
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${category.badgeBg} border`}>
              <CategoryIcon name={category.icon} className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white leading-tight">
                {category.name}
              </div>
              <div className="flex items-center gap-2 mt-0.5">
                <span className={`text-[10px] uppercase font-bold tracking-wider ${diffInfo.color}`}>
                  {diffInfo.label}
                </span>
                {currentQuestion.difficulty && (
                  <span className="text-[10px] text-slate-500">• Nivel: {currentQuestion.difficulty}</span>
                )}
              </div>
            </div>
          </div>

          {/* Temporizador & Botón Salir */}
          <div className="flex items-center gap-3">
            {useTimer && (
              <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono font-bold transition-colors ${
                timeLeft <= 10 
                  ? "bg-red-500/20 text-red-400 border-red-500/50 animate-pulse" 
                  : "bg-slate-800 text-slate-200 border-slate-700"
              }`}>
                <Clock className="w-3.5 h-3.5" />
                <span>{timeLeft}s</span>
              </div>
            )}

            <button
              onClick={() => {
                playClickSound();
                setShowExitConfirm(true);
              }}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-red-400 border border-slate-700/80 transition-colors"
              title="Salir del examen"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Barra de Progreso y Marcador */}
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-xs text-slate-400 font-medium">
            <span>
              Pregunta <strong className="text-white">{currentIndex + 1}</strong> de {totalQuestions}
            </span>
            <span className="text-emerald-400 font-bold">
              Aciertos: {score}
            </span>
          </div>

          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-red-600 via-amber-500 to-emerald-500 transition-all duration-300 rounded-full"
              style={{ width: `${Math.max(5, ((currentIndex + (isAnswered ? 1 : 0)) / totalQuestions) * 100)}%` }}
            />
          </div>
        </div>
      </div>

      {/* Tarjeta Principal de la Pregunta */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative">
        
        {/* Referencia técnica si existe */}
        {currentQuestion.reference && (
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-[11px] font-medium border border-slate-700/60 mb-4">
            <BookOpen className="w-3.5 h-3.5 text-amber-400" />
            <span>Ref: {currentQuestion.reference}</span>
          </div>
        )}

        {/* Enunciado */}
        <h2 className="font-heading text-lg sm:text-2xl font-bold text-white leading-snug mb-8">
          {currentQuestion.question}
        </h2>

        {/* Opciones de respuesta */}
        <div className="space-y-3">
          {currentQuestion.options.map((option, idx) => {
            const letter = String.fromCharCode(65 + idx); // A, B, C, D
            const isCorrect = idx === currentQuestion.correctAnswer;
            const isSelected = selectedOption === idx;

            // Estados de estilo
            let btnStyle = "bg-slate-800/70 border-slate-700/80 text-slate-200 hover:bg-slate-800 hover:border-slate-600";
            let badgeStyle = "bg-slate-700 text-slate-300";

            if (isAnswered) {
              if (isCorrect) {
                // Correct answer always shines in green
                btnStyle = "bg-emerald-950/40 border-emerald-500/80 text-emerald-100 ring-2 ring-emerald-500/30";
                badgeStyle = "bg-emerald-500 text-slate-950 font-black";
              } else if (isSelected && !isCorrect) {
                // Wrong chosen answer in red
                btnStyle = "bg-rose-950/40 border-rose-500/80 text-rose-100 ring-2 ring-rose-500/30";
                badgeStyle = "bg-rose-500 text-white font-black";
              } else {
                btnStyle = "bg-slate-900/40 border-slate-800 text-slate-500 opacity-60";
                badgeStyle = "bg-slate-800 text-slate-600";
              }
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-4 rounded-2xl border transition-all duration-150 flex items-start gap-3.5 group ${btnStyle} ${
                  !isAnswered ? "active:scale-[0.99] cursor-pointer" : "cursor-default"
                }`}
              >
                <span className={`w-7 h-7 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${badgeStyle}`}>
                  {letter}
                </span>

                <span className="flex-1 text-sm sm:text-base leading-relaxed pt-0.5">
                  {option}
                </span>

                {isAnswered && (
                  <div className="shrink-0 pt-0.5">
                    {isCorrect ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    ) : isSelected ? (
                      <XCircle className="w-5 h-5 text-rose-400" />
                    ) : null}
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Sección de Explicación y Retroalimentación Técnica Inmediata */}
        {isAnswered && (
          <div className="mt-6 pt-6 border-t border-slate-800 animate-fade-in space-y-4">
            
            {/* Cartel de resultado */}
            <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
              selectedOption === currentQuestion.correctAnswer
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-300"
                : "bg-rose-500/10 border-rose-500/30 text-rose-300"
            }`}>
              <div className="shrink-0 mt-0.5">
                {selectedOption === currentQuestion.correctAnswer ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                ) : (
                  <XCircle className="w-5 h-5 text-rose-400" />
                )}
              </div>
              <div className="space-y-1">
                <div className="font-bold text-sm">
                  {selectedOption === currentQuestion.correctAnswer
                    ? "¡Respuesta Correcta!"
                    : selectedOption === -1
                    ? "¡Tiempo agotado!"
                    : "Respuesta Incorrecta"}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {currentQuestion.explanation}
                </p>
              </div>
            </div>

            {/* Botón de Siguiente Pregunta */}
            <div className="flex justify-end pt-2">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-95 border border-red-400/30"
              >
                <span>
                  {currentIndex + 1 < totalQuestions ? "Siguiente Pregunta" : "Ver Calificación Final"}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
