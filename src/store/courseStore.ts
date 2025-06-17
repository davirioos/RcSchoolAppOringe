import { create } from 'zustand';
import { useUserStore } from './userStore';

export interface ExerciseData {
  pergunta?: string;
  opcoes?: string[];
  respostaCorreta?: string;
  frasePartes?: [string, string];
  palavraCorreta?: string;
  palavras?: string[];
  fraseCorreta?: string;
}

export interface Phase {
  id: number;
  title: string;
  status: 'locked' | 'unlocked' | 'completed';
  exerciseType: 'multipleChoice' | 'completeThePhrase' | 'balloon';
  xpReward: number;
  exerciseData: ExerciseData;
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

const initialModules: Module[] = [
  {
    id: 1,
    title: 'Módulo 1: Básico',
    phases: [
      {
        id: 101,
        title: 'Fase 1 - Múltipla Escolha',
        status: 'unlocked',
        exerciseType: 'multipleChoice',
        xpReward: 10,
        exerciseData: {
          pergunta: 'Qual a tradução de "azul" em inglês?',
          opcoes: ['Red', 'Green', 'Blue', 'Yellow'],
          respostaCorreta: 'Blue',
        },
      },
      {
        id: 102,
        title: 'Fase 2 - Complete a Frase',
        status: 'locked',
        exerciseType: 'completeThePhrase',
        xpReward: 15,
        exerciseData: {
          frasePartes: ['The sky is ', '.'],
          palavraCorreta: 'blue',
        },
      },
      {
        id: 103,
        title: 'Fase 3 - Monte a Frase',
        status: 'locked',
        exerciseType: 'balloon',
        xpReward: 20,
        exerciseData: {
          palavras: ['I', 'student', 'a', 'am'],
          fraseCorreta: 'I am a student',
        },
      },
    ],
  },
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
