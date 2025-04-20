import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './styles';
import OptionList from '../../components/optionsList';
import ProgressoAnimado from '../../components/barraProgress';
import { RootStackParamList } from '../../routes/authRoutes';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Wheredidyoumeet() {
  const [disabled, setDisabled] = useState(false);

  const navigation = useNavigation<HomeScreenNavigationProp>();
  const teste = ['Youtube', 'Tiktok', 'Instagram', 'Facebook', 'Play Story', 'Indicação'];

  const registrationSearch = (ondeConheceu: string) => {
    if (disabled) return;
    setDisabled(true);
    navigation.navigate('ResearchMotivation');
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <View style={style.container}>
      <ProgressoAnimado progresso={0.32} />
      <Text style={style.textPrincipal}>Qual curso gostaria de{'\n'}a RCschool ?</Text>
      <Text style={style.textSecundario}>Ajude saber aonde podemos encontra{'\n'}mais pessoas</Text>
      <OptionList options={teste} onPress={registrationSearch} />
    </View>
  );
}
