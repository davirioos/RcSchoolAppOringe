import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/index';
import LoginScreen from '../screens/login/login';
import Registration from '../screens/registration/registrationCurso';
import Wheredidyoumeet from '../screens/registration/wheredidyoumeet';
import ResearchMotivation from '../screens/registration/researchMotivation';
import DailyObjectives from '../screens/registration/dailyObjectives';
import UserRegistration from '../screens/registration/userRegistration';
import HomeScreenDirector from '../screens/home/studyHome/home';
import ForgotPasswordScreen from '../screens/login/forgot';
import { RegisterProvider } from '../contexts/RegisterContext';

// Definindo o tipo para as rotas
export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Registration: undefined;
  Wheredidyoumeet: undefined;
  ResearchMotivation: undefined;
  DailyObjectives: undefined;
  UserRegistration: undefined;
  HomeScreenDirector: undefined;
  ForgotPasswordScreen: undefined;
};

// Criando o Stack Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Componente com as rotas
export default function authRoutes() {
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
        <Stack.Screen name="HomeScreenDirector" component={HomeScreenDirector} />
        <Stack.Screen name="ForgotPasswordScreen" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </RegisterProvider>
  );
}
