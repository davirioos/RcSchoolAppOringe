import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { AppStackParamList } from '../../routes/appRoutes';
import MultipleChoice from '../../components/phases/MultipleChoice';
import CompleteThePhrase from '../../components/phases/CompleteThePhrase';
import BalloonUt from '../../components/phases/BalloonUt';
import { Alert } from 'react-native';

type ExerciseScreenRouteProp = RouteProp<AppStackParamList, 'ExerciseScreen'>;

type Props = {
  route: ExerciseScreenRouteProp;
};

export default function ExerciseScreen({ route }: Props) {
  const { fase } = route.params;
  const handleProximaFase = () => {
    console.log('Avançar para a próxima fase!');
    // ou você pode navegar pra outra tela, ou carregar nova pergunta, etc.
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <BalloonUt />
    </View>
  );
}
