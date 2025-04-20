// src/routes/Routes.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';

export default function Routes() {
  const isAuthenticated = true;

  return (
    <NavigationContainer>{isAuthenticated ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>
  );
}
