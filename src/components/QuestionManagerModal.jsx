import React, { useState } from 'react';
import { 
  X, 
  PlusCircle, 
  Download, 
  Check, 
  AlertCircle, 
  BookOpen, 
  Layers, 
  Trash2,
  Copy
} from 'lucide-react';
import { playClickSound, playCorrectSound } from '../utils/audio';
import { saveCustomQuestion, getCustomQuestions, clearCustomQuestions } from '../utils/storage';
import { DIFFICULTY_CONFIG } from '../data/quizData';

export default function QuestionManagerModal({ categories, onRefreshCategories, onClose }) {
  const [activeTab, setActiveTab] = useState('add'); // 'add' | 'list' | 'export'
  const [customList, setCustomList] = useState(getCustomQuestions());
  const [copySuccess, setCopySuccess] = useState(false);

  // Formulario nueva pregunta
  const [selectedCatId, setSelectedCatId] = useState(categories[0]?.id || 'fuego-extincion');
  const selectedCat = categories.find((c) => c.id === selectedCatId) || categories[0];
  
  const [difficulty, setDifficulty] = useState(selectedCat?.difficulties?.[0] || 'básico');
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [explanation, setExplanation] = useState('');
  const [reference, setReference] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  // Sincronizar dificultades al cambiar materia
  const handleCategoryChange = (e) => {
    const newCatId = e.target.value;
    setSelectedCatId(newCatId);
    const found = categories.find((c) => c.id === newCatId);
    if (found && found.difficulties && found.difficulties.length > 0) {
      setDifficulty(found.difficulties[0]);
    }
  };

  const handleOptionChange = (index, value) => {
    const updated = [...options];
    updated[index] = value;
    setOptions(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    if (!questionText.trim()) {
      setFormError('Por favor escribí el enunciado de la pregunta.');
      return;
    }

    if (options.some((opt) => !opt.trim())) {
      setFormError('Completá las 4 opciones de respuesta.');
      return;
    }

    if (!explanation.trim()) {
      setFormError('Agregá una breve explicación técnica para cuando el bombero responda.');
      return;
    }

    const newQuestion = {
      id: `custom-${Date.now()}`,
      categoryId: selectedCatId,
      difficulty,
      question: questionText.trim(),
      options: options.map((o) => o.trim()),
      correctAnswer: parseInt(correctAnswer, 10),
      explanation: explanation.trim(),
      reference: reference.trim() || 'Aporte de Instrucción BVL 12'
    };

    saveCustomQuestion(newQuestion);
    playCorrectSound();
    setCustomList(getCustomQuestions());
    setFormSuccess('¡Pregunta cargada con éxito en el sistema!');
    
    // Limpiar formulario
    setQuestionText('');
    setOptions(['', '', '', '']);
    setExplanation('');
    setReference('');

    if (onRefreshCategories) {
      onRefreshCategories();
    }
  };

  const handleClearCustom = () => {
    if (window.confirm("¿Deseas eliminar todas las preguntas personalizadas cargadas localmente?")) {
      playClickSound();
      clearCustomQuestions();
      setCustomList([]);
      if (onRefreshCategories) {
        onRefreshCategories();
      }
    }
  };

  const handleExportJSON = () => {
    playClickSound();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(categories, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `bvl12_banco_preguntas_${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const handleCopyJSON = () => {
    playClickSound();
    navigator.clipboard.writeText(JSON.stringify(categories, null, 2));
    setCopySuccess(true);
    setTimeout(() => setCopySuccess(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full p-6 sm:p-8 space-y-6 max-h-[92vh] flex flex-col shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/30">
              <PlusCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-white">
                Gestión del Banco de Preguntas
              </h2>
              <p className="text-xs text-slate-400">
                Herramienta para instructores y bomberos del Cuartel 12
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

        {/* Pestañas */}
        <div className="flex gap-2 border-b border-slate-800 pb-3 shrink-0">
          <button
            onClick={() => {
              playClickSound();
              setActiveTab('add');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'add'
                ? "bg-red-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            + Nueva Pregunta
          </button>

          <button
            onClick={() => {
              playClickSound();
              setActiveTab('list');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
              activeTab === 'list'
                ? "bg-red-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            <span>Preguntas Propias</span>
            <span className="bg-slate-900 px-1.5 py-0.5 rounded-full text-[10px]">
              {customList.length}
            </span>
          </button>

          <button
            onClick={() => {
              playClickSound();
              setActiveTab('export');
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === 'export'
                ? "bg-red-600 text-white"
                : "bg-slate-800 text-slate-300 hover:bg-slate-700"
            }`}
          >
            Exportar / Compartir
          </button>
        </div>

        {/* CONTENIDO SEGÚN PESTAÑA */}
        <div className="flex-1 overflow-y-auto pr-1">
          {activeTab === 'add' && (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              {formError && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {formSuccess && (
                <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 shrink-0" />
                  <span>{formSuccess}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Materia */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Materia Destino</label>
                  <select
                    value={selectedCatId}
                    onChange={handleCategoryChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-red-500"
                  >
                    {categories.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dificultad */}
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Nivel de Dificultad</label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white focus:outline-none focus:border-red-500 capitalize"
                  >
                    {selectedCat?.difficulties?.map((d) => (
                      <option key={d} value={d}>
                        {DIFFICULTY_CONFIG[d]?.label || d}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Enunciado */}
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Enunciado de la Pregunta</label>
                <textarea
                  rows={2}
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder="Ej: ¿Cuál es el rango de inflamabilidad aproximado del gas metano en aire?"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                />
              </div>

              {/* Opciones */}
              <div className="space-y-2">
                <label className="block text-slate-300 font-semibold">
                  4 Opciones de Respuesta y Selección de la Correcta:
                </label>
                {options.map((opt, idx) => {
                  const letter = String.fromCharCode(65 + idx);
                  const isCorrect = correctAnswer === idx;

                  return (
                    <div key={idx} className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setCorrectAnswer(idx)}
                        title="Marcar como opción correcta"
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                          isCorrect
                            ? "bg-emerald-500 text-slate-950"
                            : "bg-slate-800 text-slate-400 hover:bg-slate-700"
                        }`}
                      >
                        {letter}
                      </button>
                      <input
                        type="text"
                        value={opt}
                        onChange={(e) => handleOptionChange(idx, e.target.value)}
                        placeholder={`Opción ${letter}...`}
                        className={`flex-1 bg-slate-950 border rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none ${
                          isCorrect ? "border-emerald-500/60" : "border-slate-700 focus:border-red-500"
                        }`}
                      />
                      <span className="text-[10px] text-slate-500 w-16 text-right">
                        {isCorrect ? "✓ Correcta" : ""}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Explicación y Referencia */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="sm:col-span-2">
                  <label className="block text-slate-300 font-semibold mb-1">
                    Explicación Técnica (Para el aprendizaje)
                  </label>
                  <input
                    type="text"
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    placeholder="Ej: El metano posee un LEL del 5% y un UEL del 15% según cartilla..."
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">
                    Referencia / Manual
                  </label>
                  <input
                    type="text"
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                    placeholder="Ej: NFPA 54 / ANB"
                    className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-red-500"
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold transition-all shadow-md active:scale-95"
                >
                  Guardar Pregunta en el Banco
                </button>
              </div>
            </form>
          )}

          {activeTab === 'list' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Total de preguntas añadidas por vos: {customList.length}</span>
                {customList.length > 0 && (
                  <button
                    onClick={handleClearCustom}
                    className="text-rose-400 hover:text-rose-300 inline-flex items-center gap-1"
                  >
                    <Trash2 className="w-3.5 h-3.5" /> Vaciar preguntas propias
                  </button>
                )}
              </div>

              {customList.length === 0 ? (
                <div className="text-center py-12 bg-slate-950/40 rounded-2xl border border-slate-800 text-slate-500 text-xs">
                  No has agregado preguntas personalizadas aún. Utilizá la pestaña "+ Nueva Pregunta".
                </div>
              ) : (
                <div className="space-y-3">
                  {customList.map((q, idx) => (
                    <div
                      key={q.id || idx}
                      className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2 text-xs"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-amber-400 capitalize">
                          {q.categoryId} • {q.difficulty}
                        </span>
                        {q.reference && (
                          <span className="text-[10px] text-slate-500">{q.reference}</span>
                        )}
                      </div>
                      <div className="text-white font-semibold">{q.question}</div>
                      <div className="text-slate-400 text-[11px]">
                        Opción Correcta: <strong className="text-emerald-400">{q.options[q.correctAnswer]}</strong>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'export' && (
            <div className="space-y-6 py-4">
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 space-y-2">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Download className="w-4 h-4 text-amber-400" />
                  Descargar o Copiar Base de Datos
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Podés descargar todas las preguntas en formato JSON para respaldarlas, compartirlas con otros instructores de bomberos o integrarlas en futuros módulos.
                </p>

                <div className="flex flex-wrap gap-3 pt-3">
                  <button
                    onClick={handleExportJSON}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar archivo .JSON</span>
                  </button>

                  <button
                    onClick={handleCopyJSON}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors border border-slate-700"
                  >
                    {copySuccess ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span>{copySuccess ? "¡Copiado al Portapapeles!" : "Copiar JSON"}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="pt-3 border-t border-slate-800 flex justify-end shrink-0">
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
