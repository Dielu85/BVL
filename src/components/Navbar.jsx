import React, { useState } from 'react';
import { Volume2, VolumeX, BarChart3, PlusCircle, Shield, Flame, BookOpen } from 'lucide-react';
import { isSoundEnabled, toggleSound, playClickSound } from '../utils/audio';

export default function Navbar({ onGoHome, onOpenStats, onOpenQuestionManager, currentScreen }) {
  const [soundOn, setSoundOn] = useState(isSoundEnabled());

  const handleToggleSound = () => {
    const newState = toggleSound();
    setSoundOn(newState);
    if (newState) {
      playClickSound();
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Logo / Identidad BVL 12 */}
        <button
          onClick={() => {
            playClickSound();
            onGoHome();
          }}
          className="flex items-center gap-3 group text-left transition-transform active:scale-95"
        >
          <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-red-600 to-amber-600 text-white shadow-lg shadow-red-600/30 group-hover:from-red-500 group-hover:to-amber-500 border border-red-400/30 transition-all">
            <Flame className="w-6 h-6 text-amber-200 fill-amber-300" />
            <span className="absolute -bottom-1 -right-1 bg-slate-950 text-amber-400 text-[10px] font-black px-1.5 py-0.5 rounded-full border border-amber-500/40">
              12
            </span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-heading font-black tracking-wider text-white text-base sm:text-lg uppercase">
                BVL <span className="text-red-500">12</span>
              </span>
              <span className="hidden sm:inline-block bg-red-500/20 text-red-400 text-[10px] font-semibold px-2 py-0.5 rounded-full border border-red-500/30">
                LANÚS
              </span>
            </div>
            <p className="text-xs text-slate-400 font-medium hidden xs:block">
              Bomberos Voluntarios • Portal de Capacitación
            </p>
          </div>
        </button>

        {/* Acciones de la barra */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Botón Gestión de preguntas */}
          <button
            onClick={() => {
              playClickSound();
              onOpenQuestionManager();
            }}
            title="Banco de Preguntas / Cargar Pregunta"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700 hover:border-slate-600 transition-colors"
          >
            <PlusCircle className="w-4 h-4 text-amber-400" />
            <span className="hidden md:inline">Cargar Pregunta</span>
          </button>

          {/* Botón Estadísticas */}
          <button
            onClick={() => {
              playClickSound();
              onOpenStats();
            }}
            title="Historial y Estadísticas"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700 hover:border-slate-600 transition-colors"
          >
            <BarChart3 className="w-4 h-4 text-emerald-400" />
            <span className="hidden sm:inline">Mi Historial</span>
          </button>

          {/* Botón Sonido */}
          <button
            onClick={handleToggleSound}
            title={soundOn ? "Silenciar efectos de sonido" : "Activar efectos de sonido"}
            className={`p-2 rounded-lg border transition-all ${
              soundOn
                ? "bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20"
                : "bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700"
            }`}
          >
            {soundOn ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
