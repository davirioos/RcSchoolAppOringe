import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './styles';
import OptionList from '../../components/optionsList';
import ProgressoAnimado from '../../components/barraProgress';
import { RootStackParamList } from '../../routes/authRoutes';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function DailyObjectives() {
  const [disabled, setDisabled] = useState(false);
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const teste = [
    '5 minutos / dia',
    '10 minutos / dia',
    '15 minutos / dia',
    '20 minutos / dia',
    '25 minutos / dia',
  ];

  const registrationTime = (tempo: string) => {
    if (disabled) return;
    setDisabled(true);
    navigation.navigate('UserRegistration');
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <View style={style.container}>
      <ProgressoAnimado progresso={0.74} />
      <Text style={style.textPrincipal}>Qual sua meta diária ?</Text>
      <Text style={style.textSecundario}>
        Defina seu tempo de estudo e ajuste conforme sua{'\n'}evolução!
      </Text>
      <OptionList options={teste} onPress={registrationTime} />
    </View>
  );
}
