import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/index';
import LoginScreen from '../screens/login/login';
import Registration from '../screens/registration/registrationCurso';
import Wheredidyoumeet from '../screens/registration/wheredidyoumeet';
import ResearchMotivation from '../screens/registration/researchMotivation';
import DailyObjectives from '../screens/registration/dailyObjectives';
import UserRegistration from '../screens/registration/userRegistration';
import ForgotPasswordScreen from '../screens/login/forgot';
import { RegisterProvider } from '../contexts/RegisterContext';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Registration: undefined;
  Wheredidyoumeet: undefined;
  ResearchMotivation: undefined;
  DailyObjectives: undefined;
  UserRegistration: undefined;
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {
  // Alterado para exportação nomeada
  return (
    <RegisterProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Wheredidyoumeet" component={Wheredidyoumeet} />
        <Stack.Screen name="ResearchMotivation" component={ResearchMotivation} />
        <Stack.Screen name="DailyObjectives" component={DailyObjectives} />
        <Stack.Screen name="UserRegistration" component={UserRegistration} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </RegisterProvider>
  );
}
