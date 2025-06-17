import { View, Text, ScrollView, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../routes/appRoutes';
import { style } from './styles';
import { styleGlobal } from '../../../styles/styleGlobal';
import { ButtonHome } from '../../../components/fasesHome/index';
import { useUser } from '../../../contexts/UserContexts';
import { IconGlobal } from '../../../components/iconsHome/icons';
import { RankIconGlobal } from '../../../components/rankIcon/icons';
import firestore from '@react-native-firebase/firestore';
import StreakModal from '../../../components/StreakProgress/StreakProgress';
import CursosModal from '../../../components/CursosList/CursosModal';

// Interfaces para garantir a tipagem correta dos dados
interface Fase {
  faseId: string;
  nome: string;
}

interface Modulo {
  moduloId: string;
  fases: Fase[]; // Lista de fases dentro do módulo
}

export default function HomeScreenDirector() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { userData } = useUser();
  const [showStreak, setShowStreak] = useState(false);
  const [modalVisible, setmodalVisible] = useState(false);
  const userStreak = 20;

  const [modulos, setModulos] = useState<Modulo[]>([]);

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
  useEffect(() => {
    const fetchModulos = async () => {
      try {
        const modulosRef = firestore()
          .collection('cursos')
          .doc('python_basico')
          .collection('modulos');

        const modulosSnapshot = await modulosRef.get();

        const modulosData: Modulo[] = [];

        for (const moduloDoc of modulosSnapshot.docs) {
          const moduloId = moduloDoc.id;
          const fasesRef = moduloDoc.ref.collection('fases');
          const fasesSnapshot = await fasesRef.get();

          const fasesData: Fase[] = fasesSnapshot.docs.map(faseDoc => ({
            faseId: faseDoc.id,
            nome: faseDoc.data().nome, // Supondo que 'nome' é um campo na fase
          }));

          modulosData.push({
            moduloId,
            fases: fasesData,
          });
        }

        setModulos(modulosData);
      } catch (error) {
        console.error('Erro ao buscar módulos e fases:', error);
      }
    };

    fetchModulos();
  }, []);

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
        {modulos.map((modulo, index) => {
          return (
            <View key={modulo.moduloId} style={style.phaseContainer}>
              <View style={[styleGlobal.ContainerBackgroundDark, style.containerPhaseSection]}>
                <Text style={style.modulosSecao}>{`Módulo ${index + 1}`}</Text>
              </View>
              {modulo.fases.map((fase, faseIdx) => {
                const usersFase = userData?.nivel ?? 0;
                const status: 'locked' | 'current' | 'completed' =
                  faseIdx === usersFase ? 'current' : faseIdx < usersFase ? 'completed' : 'locked';

                const canAccess = faseIdx <= usersFase;

                return (
                  <ButtonHome
                    key={fase.faseId}
                    name={
                      status === 'current' ? 'crown' : status === 'completed' ? 'crown' : 'lock'
                    }
                    size={35}
                    color={
                      status === 'current' ? 'gold' : status === 'completed' ? '#3D2220' : '#3D2220'
                    }
                    onPress={() => {
                      if (canAccess) {
                        navigation.navigate('ExerciseScreen', {
                          capitulo: `Módulo ${index + 1}`,
                          fase: fase.nome,
                        });
                      } else {
                        Alert.alert('Este nível está bloqueado!');
                      }
                    }}
                    disabled={!canAccess}
                  />
                );
              })}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
