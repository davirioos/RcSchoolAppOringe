import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCourseStore } from '../../store/courseStore';

import MultipleChoice from '../../components/phases/MultipleChoice';
import { CompleteThePhrase } from '../../components/phases/CompleteThePhrase';
import { BalloonUt } from '../../components/phases/BalloonUt';

export default function ExerciseScreen() {
  const navigation = useNavigation();
  const { modules, currentModuleId, currentPhaseId, completeCurrentPhase } = useCourseStore();

  const handlePhaseComplete = () => {
    completeCurrentPhase();
    navigation.goBack();
  };

  const module = modules.find(m => m.id === currentModuleId);
  const phase = module?.phases.find(p => p.id === currentPhaseId);

  if (!phase) {
    return (
      <View style={styles.container}>
        <Text>Erro: Fase não encontrada!</Text>
      </View>
    );
  }

  const renderExercise = () => {
    const { exerciseData } = phase;
    switch (phase.exerciseType) {
      case 'multipleChoice':
        return (
          <MultipleChoice
            pergunta={exerciseData.pergunta!}
            opcoes={exerciseData.opcoes!}
            resposta={exerciseData.respostaCorreta!}
            onComplete={handlePhaseComplete}
            onNext={() => {}}
          />
        );
      case 'completeThePhrase':
        return (
          <CompleteThePhrase
            frasePartes={exerciseData.frasePartes!}
            palavraCorreta={exerciseData.palavraCorreta!}
            onComplete={handlePhaseComplete}
          />
        );
      case 'balloon':
        return (
          <BalloonUt
            palavras={exerciseData.palavras!}
            fraseCorreta={exerciseData.fraseCorreta!}
            onComplete={handlePhaseComplete}
          />
        );
      default:
        return <Text>Tipo de exercício desconhecido!</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{phase.title}</Text>
      {renderExercise()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
});
