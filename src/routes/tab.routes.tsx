import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth'; // Importa o Firebase Auth
import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';
import { UserProvider } from '../contexts/UserContexts';

export default function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(async user => {
      if (user) {
        try {
          // Força uma atualização do token do usuário para verificar se ainda é válido
          await user.getIdToken(true);
          setIsAuthenticated(true);
        } catch (error) {
          // Token inválido ou usuário deletado, desloga ele
          await auth().signOut();
          setIsAuthenticated(false);
        }
      } else {
        setIsAuthenticated(false);
      }
    });

    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        <AppRoutes />
      ) : (
        <UserProvider>
          <AuthRoutes />
        </UserProvider>
      )}
    </NavigationContainer>
  );
}
