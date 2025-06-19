// src/routes/appRoutes.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExerciseScreen from '../screens/phases/ExerciseScreen';
// CORREÇÃO: Importe 'HomeTabs' de 'homeRoutes'
import HomeTabs from './homeRoutes'; // Alterado de './tab.routes'

export type AppStackParamList = {
  HomeTabs: undefined;
  ExerciseScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* CORREÇÃO: Use o componente 'HomeTabs' importado */}
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
    </Stack.Navigator>
  );
}
