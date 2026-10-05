import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HomeScreen from './components/HomeScreen';
import CategorySelection from './components/CategorySelection';
import DifficultySelection from './components/DifficultySelection';
import QuizGame from './components/QuizGame';
import QuizResults from './components/QuizResults';
import StatsModal from './components/StatsModal';
import QuestionManagerModal from './components/QuestionManagerModal';

import { INITIAL_CATEGORIES } from './data/quizData';
import { getCustomQuestions } from './utils/storage';

export default function App() {
  // Estado de navegación: 'home' | 'categories' | 'difficulty' | 'quiz' | 'results'
  const [currentScreen, setCurrentScreen] = useState('home');

  // Modales
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [showQuestionManager, setShowQuestionManager] = useState(false);

  // Categorías combinadas (iniciales + personalizadas del usuario)
  const [categories, setCategories] = useState([]);

  // Estados de la sesión activa de Quiz
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState('básico');
  const [activeQuizQuestions, setActiveQuizQuestions] = useState([]);
  const [useTimer, setUseTimer] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(30);

  // Estados de resultados finales
  const [quizResultsData, setQuizResultsData] = useState(null);

  // Cargar categorías y combinar con preguntas custom
  const loadCategories = () => {
    const customQuestions = getCustomQuestions();
    const merged = INITIAL_CATEGORIES.map((cat) => {
      const customForThisCat = customQuestions.filter((q) => q.categoryId === cat.id);
      return {
        ...cat,
        questions: [...cat.questions, ...customForThisCat]
      };
    });
    setCategories(merged);

    // Si hay una categoría seleccionada actualmente, actualizarla también
    if (selectedCategory) {
      const updatedCurrent = merged.find((c) => c.id === selectedCategory.id);
      if (updatedCurrent) {
        setSelectedCategory(updatedCurrent);
      }
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  // Manejo: Selección de materia
  const handleSelectCategory = (cat) => {
    setSelectedCategory(cat);
    // Si la materia tiene más de una dificultad o queremos configurar el quiz:
    setCurrentScreen('difficulty');
  };

  // Manejo: Iniciar el juego de Quiz
  const handleStartQuiz = ({ category, difficulty, questions, useTimer, timerSeconds }) => {
    setSelectedCategory(category);
    setSelectedDifficulty(difficulty);
    setActiveQuizQuestions(questions);
    setUseTimer(useTimer);
    setTimerSeconds(timerSeconds);
    setCurrentScreen('quiz');
  };

  // Manejo: Finalización del Quiz
  const handleFinishQuiz = (results) => {
    setQuizResultsData(results);
    setCurrentScreen('results');
  };

  // Manejo: Reintentar el mismo quiz
  const handleRetryQuiz = () => {
    if (!selectedCategory) return;
    // Volver a mezclar las preguntas disponibles para esta categoría y dificultad
    let candidateQuestions = selectedCategory.questions.filter((q) => {
      if (selectedDifficulty === 'all') return true;
      return q.difficulty === selectedDifficulty;
    });
    const shuffled = candidateQuestions.sort(() => Math.random() - 0.5);

    setActiveQuizQuestions(shuffled);
    setCurrentScreen('quiz');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Barra de Navegación institucional */}
      <Navbar
        currentScreen={currentScreen}
        onGoHome={() => setCurrentScreen('home')}
        onOpenStats={() => setShowStatsModal(true)}
        onOpenQuestionManager={() => setShowQuestionManager(true)}
      />

      {/* Contenido Dinámico de la Pantalla */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        {currentScreen === 'home' && (
          <HomeScreen
            categories={categories}
            onSelectCategory={handleSelectCategory}
            onStartQuickQuiz={() => setCurrentScreen('categories')}
          />
        )}

        {currentScreen === 'categories' && (
          <CategorySelection
            categories={categories}
            onSelectCategory={handleSelectCategory}
            onBack={() => setCurrentScreen('home')}
          />
        )}

        {currentScreen === 'difficulty' && selectedCategory && (
          <DifficultySelection
            category={selectedCategory}
            onStartQuiz={handleStartQuiz}
            onBack={() => setCurrentScreen('categories')}
          />
        )}

        {currentScreen === 'quiz' && selectedCategory && (
          <QuizGame
            category={selectedCategory}
            difficulty={selectedDifficulty}
            questions={activeQuizQuestions}
            useTimer={useTimer}
            timerSeconds={timerSeconds}
            onFinishQuiz={handleFinishQuiz}
            onExitQuiz={() => setCurrentScreen('difficulty')}
          />
        )}

        {currentScreen === 'results' && quizResultsData && (
          <QuizResults
            category={quizResultsData.category}
            difficulty={quizResultsData.difficulty}
            score={quizResultsData.score}
            totalQuestions={quizResultsData.totalQuestions}
            answersHistory={quizResultsData.answersHistory}
            onRetry={handleRetryQuiz}
            onChangeDifficulty={() => setCurrentScreen('difficulty')}
            onGoHome={() => setCurrentScreen('categories')}
          />
        )}
      </main>

      {/* Modal de Estadísticas e Historial */}
      {showStatsModal && (
        <StatsModal onClose={() => setShowStatsModal(false)} />
      )}

      {/* Modal de Gestión del Banco de Preguntas */}
      {showQuestionManager && (
        <QuestionManagerModal
          categories={categories}
          onRefreshCategories={loadCategories}
          onClose={() => setShowQuestionManager(false)}
        />
      )}
    </div>
  );
}
