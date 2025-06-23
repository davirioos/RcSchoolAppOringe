// src/screens/phases/ExerciseScreen.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCourseStore } from '../../store/courseStore';
import { useUserStore } from '../../store/userStore';

import MultipleChoice from '../../components/phases/MultipleChoice';
import { CompleteThePhrase } from '../../components/phases/CompleteThePhrase';
import { BalloonUt } from '../../components/phases/BalloonUt';
import ProgressoAnimado from '../../components/barraProgress';
import { Button } from '../../components/button';
import { IconGlobal } from '../../components/iconsHome/icons';
import { styleGlobal } from '../../styles/styleGlobal';
import { style } from './style';

export default function ExerciseScreen() {
  useEffect(() => {
    if (life <= 0) {
      Alert.alert('Infelizmente voce não tem mais vida');
      completeCurrentPhase();
      navigation.goBack();
    }
  }, []);
  const navigation = useNavigation();
  const { modules, currentModuleId, currentPhaseId, completeCurrentPhase } = useCourseStore();
  const life = useUserStore(state => state.life);

  // NOVO: Estado para controlar o exercício atual dentro da fase
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [progressPhase, setProgressPhase] = useState(0);

  const module = modules.find(m => m.id === currentModuleId);
  const phase = module?.phases.find(p => p.id === currentPhaseId);

  const decreaseLife = useUserStore(state => state.decreaseLife);

  // Função para avançar para o próximo exercício ou completar a fase
  const handleNext = () => {
    setProgressPhase(phase => phase + 0.25);
    if (!phase) return;
    if (life <= 0) {
      Alert.alert('Infelizmente voce não tem mais vida');
      completeCurrentPhase();
      navigation.goBack();
    }

    if (exerciseIndex < phase.exercises.length - 1) {
      // Avança para o próximo exercício
      setExerciseIndex(prev => prev + 1);
    } else {
      // Se for o último exercício, completa a fase
      setTimeout(() => {
        completeCurrentPhase();
        navigation.goBack();
      }, 1200);
    }
  };
  //Usuario vai pode pular mas cada vez que pular irá perde 1 vida
  const jumpPhase = () => {
    if (!phase) return;

    if (life <= 0) {
      Alert.alert('Infelizmente voce não tem mais vida');
      completeCurrentPhase();
      navigation.goBack();
    }
    decreaseLife();
    setProgressPhase(phase => phase + 0.25);
    if (exerciseIndex < phase.exercises.length - 1) {
      setExerciseIndex(prev => prev + 1);
    } else {
      setTimeout(() => {
        completeCurrentPhase();
        navigation.goBack();
      }, 500);
    }
  };

  if (!phase) {
    return (
      <View style={style.container}>
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
    <View style={style.container}>
      <View style={[style.inf]}>
        <IconGlobal name="diamond" lar={28} />
        <Text style={style.textInf}>{life}</Text>
      </View>

      <Text style={style.title}>{phase.title}</Text>
      <ProgressoAnimado progresso={progressPhase} />
      {renderExercise()}
      <View>
        <Button title="pular" onPress={jumpPhase} />
      </View>
    </View>
  );
}
