import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './styles';
import OptionList from '../../components/optionsList';
import ProgressoAnimado from '../../components/barraProgress';
import { RootStackParamList } from '../../routes/authRoutes';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function ResearchMotivation() {
  const [disabled, setDisabled] = useState(false);

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const teste = [
    'Conseguir um emprego',
    'Melhorar habilidades',
    'Hobby/Prazer',
    'Desafio pessoal',
    'Outros',
  ];

  const registrationSearch = (motivo: string) => {
    if (disabled) return;
    setDisabled(true);
    navigation.navigate('DailyObjectives');
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <View style={style.container}>
      <ProgressoAnimado progresso={0.48} />
      <Text style={style.textPrincipal}>O que te motiva a estudar conosco?</Text>
      <Text style={style.textSecundario}>
        Conte para nós sua maior motivação para estudar conosco!
      </Text>
      <OptionList options={teste} onPress={registrationSearch} />
    </View>
  );
}
