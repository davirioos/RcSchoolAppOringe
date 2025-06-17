import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExerciseScreen from '../screens/phases/ExerciseScreen'; // Importação nomeada
import { TabRoutes } from './tab.routes'; // Importação nomeada

export type AppStackParamList = {
  HomeTabs: undefined;
  ExerciseScreen: undefined;
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppRoutes() {
  // Alterado para exportação nomeada
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={TabRoutes} />
      <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
    </Stack.Navigator>
  );
}
