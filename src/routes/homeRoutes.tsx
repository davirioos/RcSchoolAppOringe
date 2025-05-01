import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreenDirector from '../screens/home/studyHome/home';
import ClassificationHome from '../screens/home/classificatioHome/ClassificationHome';
import PracticedHome from '../screens/home/practicedHome/practicedHome';
import StoryHome from '../screens/home/storeHome/storeHome';
import ProfiledHome from '../screens/home/profileHome/profileHome';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Estude':
              iconName = focused ? 'book' : 'book-outline';
              break;
            case 'Pratique':
              iconName = focused ? 'flash' : 'flash-outline';
              break;
            case 'Ranking':
              iconName = focused ? 'trophy' : 'trophy-outline';
              break;
            case 'Loja':
              iconName = focused ? 'cart' : 'cart-outline';
              break;
            case 'Perfil':
              iconName = focused ? 'person' : 'person-outline';
              break;
            default:
              iconName = 'alert-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#BA7D5F',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen name="Estude" component={HomeScreenDirector} />
      <Tab.Screen name="Pratique" component={ClassificationHome} />
      <Tab.Screen name="Ranking" component={PracticedHome} />
      <Tab.Screen name="Loja" component={StoryHome} />
      <Tab.Screen name="Perfil" component={ProfiledHome} />
    </Tab.Navigator>
  );
}
