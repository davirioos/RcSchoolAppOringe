import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../routes/appRoutes';
import { style } from './styles';
import { useUser } from '../../../contexts/UserContexts';
import { styleGlobal } from '../../../styles/styleGlobal';
import { ButtonHome } from '../../../components/fasesHome';
import { IconGlobal } from '../../../components/iconsHome/icons';
import { useUserStore } from '../../../store/userStore';
import { useCourseStore } from '../../../store/courseStore';
import StreakModal from '../../../components/StreakProgress/StreakProgress';
import { RankIconGlobal } from '../../../components/rankIcon/icons';
import CursosModal from '../../../components/CursosList/CursosModal';

export default function StudyHome() {
  const { userData } = useUser();
  const [showStreak, setShowStreak] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  const userStreak = 20;
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { xp } = useUserStore();
  const { modules, setCurrentPhase } = useCourseStore();

  const handlePhasePress = (moduleId: number, phaseId: number) => {
    setCurrentPhase(moduleId, phaseId);
    navigation.navigate('ExerciseScreen', {
      capitulo: 'moduleId',
      fase: 'id-da-fase',
    });
  };
  const cursosSimulados = [
    {
      id: '1',
      titulo: 'Introdução ao React Native',
      descricao: 'Aprenda os fundamentos do React Native e crie apps incríveis.',
      thumbnail: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: '2',
      titulo: 'JavaScript Avançado',
      descricao: 'Domine conceitos avançados de JavaScript para turbinar seus projetos.',
      thumbnail: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
    },
    {
      id: '3',
      titulo: 'Design de Interfaces',
      descricao: 'Crie interfaces bonitas e funcionais para seus aplicativos.',
      thumbnail: 'https://cdn-icons-png.flaticon.com/512/252/252025.png',
    },
  ];
  const useCurso = 'Não encontrado, Escolhar';
  return (
    <View style={style.directorContainer}>
      <StreakModal
        visible={showStreak}
        onClose={() => setShowStreak(false)}
        userStreak={userStreak}
      />
      <View style={style.headContainer}>
        <View style={[styleGlobal.ContainerBackground, style.rakingContainer]}>
          <RankIconGlobal name="wood10" lar={80} />
        </View>
        <View>
          <View style={style.infContainer}>
            <TouchableOpacity
              style={[styleGlobal.ContainerBackground, style.inf]}
              onPress={() => setShowStreak(true)}
              activeOpacity={0.9}
            >
              <IconGlobal name="fire" lar={28} />
              <Text style={style.textInf}>10</Text>
            </TouchableOpacity>
            <View style={[styleGlobal.ContainerBackground, style.inf]}>
              <IconGlobal name="sapphire" lar={28} />
              <Text style={style.textInf}>200</Text>
            </View>
            <View style={[styleGlobal.ContainerBackground, style.inf]}>
              <IconGlobal name="diamond" lar={28} />
              <Text style={style.textInf}>15</Text>
            </View>
          </View>
          <View style={style.infCourseContainer}>
            <CursosModal
              visible={modalVisible}
              onClose={() => setmodalVisible(false)}
              cursos={cursosSimulados}
            />
            <TouchableOpacity
              activeOpacity={0.8}
              style={[styleGlobal.ContainerBackground, style.infCourse]}
              onPress={() => setmodalVisible(true)}
            >
              <IconGlobal name="menu" lar={24} />
              <Text style={style.textInfCourse}>{userData?.curso ?? useCurso}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {modules.map(modulo => (
          <View key={modulo.id} style={style.phaseContainer}>
            <View style={[styleGlobal.ContainerBackgroundDark, style.containerPhaseSection]}>
              <Text style={style.modulosSecao}>{modulo.title}</Text>
            </View>

            {modulo.phases.map(fase => {
              const { status } = fase;
              return (
                <ButtonHome
                  key={fase.id}
                  name={status === 'locked' ? 'lock' : 'crown'}
                  size={35}
                  // AQUI ESTÁ A LINHA CORRIGIDA
                  color={
                    status === 'unlocked' ? 'gold' : status === 'completed' ? '#8d6e63' : '#3D2220'
                  }
                  onPress={() => {
                    if (status !== 'locked') {
                      handlePhasePress(modulo.id, fase.id);
                    } else {
                      Alert.alert('Nível Bloqueado', 'Complete a fase anterior para desbloquear.');
                    }
                  }}
                  disabled={status === 'locked'}
                />
              );
            })}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
