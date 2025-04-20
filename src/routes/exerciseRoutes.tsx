// src/routes/exerciseRoutes.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ExerciseScreen from '../screens/phases/ExerciseScreen';

// Defina as rotas dessa stack
export type ExerciseStackParamList = {
  ExerciseScreen: {
    capitulo: string;
    fase: string;
  };
};

const Stack = createNativeStackNavigator<ExerciseStackParamList>();

export default function ExerciseRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
    </Stack.Navigator>
  );
}
