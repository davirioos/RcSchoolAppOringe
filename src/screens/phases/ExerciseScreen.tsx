// src/screens/phases/ExerciseScreen.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCourseStore } from '../../store/courseStore';

import MultipleChoice from '../../components/phases/MultipleChoice';
import { CompleteThePhrase } from '../../components/phases/CompleteThePhrase';
import { BalloonUt } from '../../components/phases/BalloonUt';

export default function ExerciseScreen() {
  const navigation = useNavigation();
  const { modules, currentModuleId, currentPhaseId, completeCurrentPhase } = useCourseStore();

  // NOVO: Estado para controlar o exercício atual dentro da fase
  const [exerciseIndex, setExerciseIndex] = useState(0);

  const module = modules.find(m => m.id === currentModuleId);
  const phase = module?.phases.find(p => p.id === currentPhaseId);

  // Função para avançar para o próximo exercício ou completar a fase
  const handleNext = () => {
    if (!phase) return;

    if (exerciseIndex < phase.exercises.length - 1) {
      // Avança para o próximo exercício
      setExerciseIndex(prev => prev + 1);
    } else {
      // Se for o último exercício, completa a fase
      completeCurrentPhase();
      navigation.goBack();
    }
  };

  if (!phase) {
    return (
      <View style={styles.container}>
        <Text>Erro: Fase não encontrada!</Text>
      </View>
    );
  }

  // Função para renderizar o exercício atual
  const renderExercise = () => {
    const exercise = phase.exercises[exerciseIndex];
    if (!exercise) {
      return <Text>Erro: Exercício não encontrado!</Text>;
    }

    const { type, data } = exercise;

    switch (type) {
      case 'multipleChoice':
        return (
          <MultipleChoice
            pergunta={data.pergunta!}
            opcoes={data.opcoes!}
            resposta={data.respostaCorreta!}
            onComplete={handleNext} // Atualizado para chamar handleNext
            onNext={() => {}} // onNext pode ser removido se não for usado
          />
        );
      case 'completeThePhrase':
        return (
          <CompleteThePhrase
            frasePartes={data.frasePartes!}
            palavraCorreta={data.palavraCorreta!}
            onComplete={handleNext} // Atualizado para chamar handleNext
          />
        );
      case 'balloon':
        return (
          <BalloonUt
            palavras={data.palavras!}
            fraseCorreta={data.fraseCorreta!}
            onComplete={handleNext} // Atualizado para chamar handleNext
          />
        );
      default:
        return <Text>Tipo de exercício desconhecido!</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{phase.title}</Text>
      {/* NOVO: Indicador de progresso dentro da fase */}
      <Text style={styles.progress}>
        Exercício {exerciseIndex + 1} de {phase.exercises.length}
      </Text>
      {renderExercise()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' },
  progress: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
});
