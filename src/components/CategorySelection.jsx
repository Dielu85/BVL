import React, { useState } from 'react';
import { Search, ArrowLeft, ArrowRight, Flame, Layers, HelpCircle, Check } from 'lucide-react';
import CategoryIcon from './CategoryIcon';
import { playClickSound } from '../utils/audio';
import { DIFFICULTY_CONFIG } from '../data/quizData';

export default function CategorySelection({ categories, onSelectCategory, onBack }) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.filter((cat) => {
    const term = searchTerm.toLowerCase();
    return (
      cat.name.toLowerCase().includes(term) ||
      cat.shortDesc.toLowerCase().includes(term)
    );
  });

  return (
    <div className="space-y-8 py-4 sm:py-6 animate-fade-in max-w-6xl mx-auto">
      {/* Barra superior con navegación */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-5">
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              playClickSound();
              onBack();
            }}
            className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors"
            title="Volver al Inicio"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="font-heading text-2xl sm:text-3xl font-black text-white">
              Seleccionar Materia
            </h1>
            <p className="text-xs sm:text-sm text-slate-400">
              Elegí el módulo de instrucción que deseas evaluar
            </p>
          </div>
        </div>

        {/* Buscador */}
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar materia (ej. Fuego, HazMat)..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-10 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors"
          />
        </div>
      </div>

      {/* Grid de Materias */}
      {filteredCategories.length === 0 ? (
        <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
          <HelpCircle className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-300">No se encontraron materias</h3>
          <p className="text-xs text-slate-500 mt-1">Intentá con otra palabra clave en el buscador</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {filteredCategories.map((cat) => {
            const hasMultiple = cat.difficulties && cat.difficulties.length > 1;

            return (
              <div
                key={cat.id}
                onClick={() => {
                  playClickSound();
                  onSelectCategory(cat);
                }}
                className={`cursor-pointer rounded-2xl bg-slate-900/80 border border-slate-800 p-6 transition-all duration-200 hover:border-slate-700 hover:shadow-2xl hover:bg-slate-900 group flex flex-col justify-between relative overflow-hidden`}
              >
                {/* Borde superior de acento */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cat.bannerGradient}`} />

                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-3.5 rounded-2xl ${cat.badgeBg} border shadow-inner`}>
                        <CategoryIcon name={cat.icon} className="w-7 h-7" />
                      </div>
                      <div>
                        <h2 className="font-heading text-xl font-bold text-white group-hover:text-red-400 transition-colors">
                          {cat.name}
                        </h2>
                        <span className="text-xs text-slate-400 font-medium">
                          {cat.questions ? cat.questions.length : 0} preguntas en total
                        </span>
                      </div>
                    </div>

                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${
                      hasMultiple
                        ? "bg-amber-500/10 text-amber-400 border-amber-500/30"
                        : "bg-blue-500/10 text-blue-400 border-blue-500/30"
                    }`}>
                      {hasMultiple ? `${cat.difficulties.length} Dificultades` : "Nivel Único"}
                    </span>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {cat.shortDesc}
                  </p>

                  {/* Niveles disponibles para esta materia */}
                  <div className="space-y-2 mb-6">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block">
                      {hasMultiple ? "Niveles configurados:" : "Modalidad:"}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {cat.difficulties.map((diffKey) => {
                        const diffInfo = DIFFICULTY_CONFIG[diffKey] || { label: diffKey, color: 'text-slate-300' };
                        return (
                          <span
                            key={diffKey}
                            className={`text-xs px-2.5 py-1 rounded-lg border font-medium bg-slate-800/80 border-slate-700/80 ${diffInfo.color}`}
                          >
                            • {diffInfo.label}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-xs text-slate-400">
                    {hasMultiple ? "Permite seleccionar dificultad" : "Acceso directo a examen"}
                  </span>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600/90 group-hover:bg-red-600 text-white text-xs font-bold transition-all shadow-md group-hover:shadow-red-600/20">
                    <span>{hasMultiple ? "Elegir Dificultad" : "Iniciar Quiz"}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
