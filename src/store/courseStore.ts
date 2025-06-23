// src/store/courseStore.ts

import { create } from 'zustand';
import { useUserStore } from './userStore';

// Interface para os dados de um único exercício
export interface ExerciseData {
  pergunta?: string;
  opcoes?: string[];
  respostaCorreta?: string;
  frasePartes?: [string, string];
  palavraCorreta?: string;
  palavras?: string[];
  fraseCorreta?: string;
}

// NOVO: Interface que representa um exercício individual
export interface Exercise {
  id: number;
  type: 'multipleChoice' | 'completeThePhrase' | 'balloon';
  data: ExerciseData;
}

// ATUALIZADO: A interface da Fase agora contém um array de exercícios
export interface Phase {
  id: number;
  title: string;
  status: 'locked' | 'unlocked' | 'completed';
  exercises: Exercise[]; // Alterado para uma lista de exercícios
  xpReward: number; // XP total ganho ao completar a fase
}

export interface Module {
  id: number;
  title: string;
  phases: Phase[];
}

interface CourseState {
  modules: Module[];
  currentModuleId: number | null;
  currentPhaseId: number | null;
  setCurrentPhase: (moduleId: number, phaseId: number) => void;
  completeCurrentPhase: () => void;
}

// ATUALIZADO: Dados iniciais com a nova estrutura
const initialModules: Module[] = [
  {
    id: 1,
    title: 'Módulo 1: Python básico',
    phases: [
      {
        id: 101,
        title: 'Fase 1 - Fundamentos',
        status: 'unlocked',
        xpReward: 50, // XP total da fase
        exercises: [
          // Array com 2 exercícios de exemplo (pode ter 10-15)
          {
            id: 1,
            type: 'multipleChoice',
            data: {
              pergunta: 'Qual a tradução de "maçã"?',
              opcoes: ['Apple', 'Banana', 'Grape'],
              respostaCorreta: 'Apple',
            },
          },
          {
            id: 2,
            type: 'balloon',
            data: {
              palavras: ['print', '(', '"', '"', ')', 'Hello World'],
              fraseCorreta: 'print("Hello World")',
            },
          },
          {
            id: 3,
            type: 'completeThePhrase',
            data: {
              frasePartes: ['print("', '")'],
              palavraCorreta: 'Hello World',
            },
          },
          {
            id: 4,
            type: 'multipleChoice',
            data: {
              pergunta: 'Qual a tradução de "maçã"?',
              opcoes: ['Apple', 'Banana', 'Grape'],
              respostaCorreta: 'Apple',
            },
          },
          // ... você pode adicionar mais 8 a 13 exercícios aqui
        ],
      },
      {
        id: 102,
        title: 'Fase 2 - Estruturas de Dados',
        status: 'locked',
        xpReward: 50,
        exercises: [
          /* ... 10 a 15 exercícios ... */
        ],
      },
      {
        id: 103,
        title: 'Fase 3 - Funções',
        status: 'locked',
        xpReward: 50,
        exercises: [
          /* ... 10 a 15 exercícios ... */
        ],
      },
      {
        id: 104,
        title: 'Fase 4 - Módulos',
        status: 'locked',
        xpReward: 50,
        exercises: [
          /* ... 10 a 15 exercícios ... */
        ],
      },
      {
        id: 105,
        title: 'Fase 5 - Projeto Prático',
        status: 'locked',
        xpReward: 100,
        exercises: [
          /* ... 10 a 15 exercícios ... */
        ],
      },
    ],
  },
  // ... outros módulos podem ser adicionados aqui
];

export const useCourseStore = create<CourseState>((set, get) => ({
  modules: initialModules,
  currentModuleId: null,
  currentPhaseId: null,

  setCurrentPhase: (moduleId, phaseId) => {
    set({ currentModuleId: moduleId, currentPhaseId: phaseId });
  },

  completeCurrentPhase: () => {
    const { modules, currentModuleId, currentPhaseId } = get();
    if (!currentModuleId || !currentPhaseId) return;

    const newModules = modules.map(module => ({
      ...module,
      phases: module.phases.map(p => ({ ...p })),
    }));
    const moduleIndex = newModules.findIndex(m => m.id === currentModuleId);
    if (moduleIndex === -1) return;

    const phaseIndex = newModules[moduleIndex].phases.findIndex(p => p.id === currentPhaseId);
    if (phaseIndex === -1) return;

    const currentPhase = newModules[moduleIndex].phases[phaseIndex];
    currentPhase.status = 'completed';
    useUserStore.getState().addXp(currentPhase.xpReward);

    const nextPhaseIndex = phaseIndex + 1;
    if (nextPhaseIndex < newModules[moduleIndex].phases.length) {
      newModules[moduleIndex].phases[nextPhaseIndex].status = 'unlocked';
    }

    set({ modules: newModules });
  },
}));
