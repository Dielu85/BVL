import React, { useState } from 'react';
import { 
  X, 
  BarChart3, 
  Award, 
  CheckCircle2, 
  HelpCircle, 
  Flame, 
  Trash2, 
  Clock,
  Sparkles
} from 'lucide-react';
import { getStoredStats } from '../utils/storage';
import { playClickSound } from '../utils/audio';

export default function StatsModal({ onClose }) {
  const [stats, setStats] = useState(getStoredStats());

  const accuracy = stats.totalQuestionsAnswered > 0 
    ? Math.round((stats.correctAnswersCount / stats.totalQuestionsAnswered) * 100)
    : 0;

  const handleClearHistory = () => {
    if (window.confirm("¿Seguro que deseas reiniciar el historial de evaluaciones de este dispositivo?")) {
      playClickSound();
      localStorage.removeItem('bvl12_quiz_stats');
      localStorage.removeItem('cbvl12_quiz_stats');
      setStats({
        quizzesCompleted: 0,
        totalQuestionsAnswered: 0,
        correctAnswersCount: 0,
        perfectScoresCount: 0,
        history: []
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 max-h-[90vh] flex flex-col shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-white">
                Rendimiento y Estadísticas
              </h2>
              <p className="text-xs text-slate-400">
                Historial de aprendizaje en Bomberos Voluntarios de Lanús (Cuartel 12)
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Grid de Métricas Clave */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 shrink-0">
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 text-center">
            <div className="text-2xl font-black text-white">{stats.quizzesCompleted}</div>
            <div className="text-[11px] text-slate-400 mt-1 font-medium">Evaluaciones</div>
          </div>
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 text-center">
            <div className="text-2xl font-black text-amber-400">{stats.totalQuestionsAnswered}</div>
            <div className="text-[11px] text-slate-400 mt-1 font-medium">Respondidas</div>
          </div>
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 text-center">
            <div className="text-2xl font-black text-emerald-400">{accuracy}%</div>
            <div className="text-[11px] text-slate-400 mt-1 font-medium">Precisión</div>
          </div>
          <div className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 text-center">
            <div className="text-2xl font-black text-red-400">{stats.perfectScoresCount}</div>
            <div className="text-[11px] text-slate-400 mt-1 font-medium">100% Perfectos</div>
          </div>
        </div>

        {/* Lista de Intentos Recientes */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-400 uppercase tracking-wider">
            <span>Últimas Evaluaciones Realizadas</span>
            {stats.history.length > 0 && (
              <button
                onClick={handleClearHistory}
                className="text-rose-400 hover:text-rose-300 inline-flex items-center gap-1 text-[11px] font-normal"
              >
                <Trash2 className="w-3.5 h-3.5" /> Limpiar Historial
              </button>
            )}
          </div>

          {stats.history.length === 0 ? (
            <div className="text-center py-10 bg-slate-950/40 rounded-2xl border border-slate-800 text-slate-500 text-xs">
              Aún no registrás exámenes completados. ¡Iniciá uno para ver tu avance!
            </div>
          ) : (
            stats.history.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-white text-sm">{item.categoryName}</div>
                  <div className="text-slate-400 text-[11px] flex items-center gap-2">
                    <span className="capitalize text-amber-400 font-medium">{item.difficulty}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                </div>

                <div className="text-right">
                  <div className={`font-black text-sm ${
                    item.scorePercent >= 80 ? 'text-emerald-400' : item.scorePercent >= 60 ? 'text-blue-400' : 'text-rose-400'
                  }`}>
                    {item.scorePercent}%
                  </div>
                  <div className="text-[10px] text-slate-400">
                    {item.correct} de {item.total}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-2 border-t border-slate-800 flex justify-end">
          <button
            onClick={() => {
              playClickSound();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-colors"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}
