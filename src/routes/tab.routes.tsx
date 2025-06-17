import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthRoutes } from './authRoutes';
import { AppRoutes } from './appRoutes';
import { UserProvider } from '../contexts/UserContexts';

// Uma tela de loading simples para evitar "piscar" a tela
const LoadingScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Carregando...</Text>
  </View>
);

export function Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      setIsAuthenticated(!!user);
      if (isLoading) {
        setIsLoading(false);
      }
    });
    return subscriber;
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <UserProvider>
      <NavigationContainer>{isAuthenticated ? <AppRoutes /> : <AuthRoutes />}</NavigationContainer>
    </UserProvider>
  );
}
