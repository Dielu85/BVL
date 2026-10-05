// Almacenamiento local para historial, estadísticas y preguntas personalizadas

const STATS_KEY = 'bvl12_quiz_stats';
const USER_KEY = 'bvl12_current_user';
const CUSTOM_QUESTIONS_KEY = 'bvl12_custom_questions';

// Retrocompatibilidad con claves previas
const LEGACY_STATS_KEY = 'cbvl12_quiz_stats';
const LEGACY_USER_KEY = 'cbvl12_current_user';
const LEGACY_CUSTOM_KEY = 'cbvl12_custom_questions';

export function getStoredUser() {
  try {
    return (
      localStorage.getItem(USER_KEY) ||
      localStorage.getItem(LEGACY_USER_KEY) ||
      'Bombero / Aspirante'
    );
  } catch {
    return 'Bombero / Aspirante';
  }
}

export function saveStoredUser(name) {
  try {
    localStorage.setItem(USER_KEY, name);
  } catch {
    // Ignore
  }
}

export function getStoredStats() {
  try {
    const raw = localStorage.getItem(STATS_KEY) || localStorage.getItem(LEGACY_STATS_KEY);
    if (raw) {
      return JSON.parse(raw);
    }
  } catch {
    // Fallback to default
  }
  return {
    quizzesCompleted: 0,
    totalQuestionsAnswered: 0,
    correctAnswersCount: 0,
    perfectScoresCount: 0,
    history: []
  };
}

export function saveQuizResult({ categoryId, categoryName, difficulty, total, correct, scorePercent, date }) {
  try {
    const currentStats = getStoredStats();
    currentStats.quizzesCompleted += 1;
    currentStats.totalQuestionsAnswered += total;
    currentStats.correctAnswersCount += correct;
    if (scorePercent === 100) {
      currentStats.perfectScoresCount += 1;
    }

    // Keep last 15 history entries
    currentStats.history = [
      {
        id: Date.now().toString(),
        categoryId,
        categoryName,
        difficulty,
        total,
        correct,
        scorePercent,
        date: date || new Date().toLocaleDateString('es-AR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      },
      ...currentStats.history
    ].slice(0, 15);

    localStorage.setItem(STATS_KEY, JSON.stringify(currentStats));
    return currentStats;
  } catch {
    return null;
  }
}

export function getCustomQuestions() {
  try {
    const raw = localStorage.getItem(CUSTOM_QUESTIONS_KEY) || localStorage.getItem(LEGACY_CUSTOM_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveCustomQuestion(newQuestion) {
  try {
    const existing = getCustomQuestions();
    const updated = [...existing, newQuestion];
    localStorage.setItem(CUSTOM_QUESTIONS_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
}

export function clearCustomQuestions() {
  try {
    localStorage.removeItem(CUSTOM_QUESTIONS_KEY);
    localStorage.removeItem(LEGACY_CUSTOM_KEY);
  } catch {
    // Ignore
  }
}
