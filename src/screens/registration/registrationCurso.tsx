import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useAuth } from '../../contexts/AuthContext';
import { style } from './styles';
import OptionList from '../../components/optionsList';
import ProgressoAnimado from '../../components/barraProgress';
import { RootStackParamList } from '../../routes/authRoutes'; // Importa os tipos das rotas

// Define o tipo correto para navegação com NativeStack
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Registration() {
  const [disabled, setDisabled] = useState(false);
  const { updateAnswers } = useAuth();
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const teste = [
    'Desenvolvimento Web do Básico ao Avançado',
    'Python e Criação de Automaçõe',
    'Linguagem C#',
    'Ethical Hacking e Segurança da Informação',
  ];

  const registrationCurso = (curso: string) => {
    if (disabled) return; // Evita múltiplos cliques
    setDisabled(true); // Desativa o botão
    updateAnswers({ curso: curso });
    navigation.navigate('Wheredidyoumeet');
    setTimeout(() => {
      setDisabled(false);
    }, 1000);
  };

  return (
    <View style={style.container}>
      <ProgressoAnimado progresso={0.16} />
      <Text style={style.textPrincipal}>Qual curso gostaria de{'\n'}aprender ?</Text>
      <Text style={style.textSecundario}>Podem ser trocados a qualquer momento</Text>
      <OptionList options={teste} onPress={registrationCurso} />
    </View>
  );
}
