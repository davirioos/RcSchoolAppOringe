// src/routes/appRoutes.tsx

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeTabs from './homeRoutes';
import ExerciseScreen from '../screens/phases/ExerciseScreen';

export type AppStackParamList = {
  HomeTabs: undefined;
  ExerciseScreen: {
    capitulo: string;
    fase: string;
  };
};

const Stack = createNativeStackNavigator<AppStackParamList>();

export default function AppRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeTabs" component={HomeTabs} />
      <Stack.Screen name="ExerciseScreen" component={ExerciseScreen} />
    </Stack.Navigator>
  );
}
