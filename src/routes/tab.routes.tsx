// src/routes/Routes.tsx
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Atualizado para Firebase Modular SDK

export default function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), user => {
      setIsAuthenticated(!!user); // true se logado, false se não
    });

    return () => unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    // Loading enquanto checa o login
    return null;
  }

  return (
    <NavigationContainer>{isAuthenticated ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>
  );
}
