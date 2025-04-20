// src/contexts/AuthContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { auth } from '../config/firebase'; // Importando a configuração do Firebase

type UserAnswers = {
  motivo?: string;
  idade?: number;
  ondeConheceu?: string;
  tempo?: string;
  curso?: string;
  nome?: string;
  email?: string;
  senha?: string;
};

type AuthContextData = {
  answers: UserAnswers;
  updateAnswers: (data: Partial<UserAnswers>) => void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<UserAnswers>({});

  function updateAnswers(data: Partial<UserAnswers>) {
    setAnswers(prev => ({ ...prev, ...data }));
  }

  return <AuthContext.Provider value={{ answers, updateAnswers }}>{children}</AuthContext.Provider>;
}

export const useAuth = () => useContext(AuthContext);
