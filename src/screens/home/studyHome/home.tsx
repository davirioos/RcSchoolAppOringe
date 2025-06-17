import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../routes/appRoutes';
import { style } from './styles';
import { styleGlobal } from '../../../styles/styleGlobal';
import { ButtonHome } from '../../../components/fasesHome';
import { IconGlobal } from '../../../components/iconsHome/icons';
import { useUserStore } from '../../../store/userStore';
import { useCourseStore } from '../../../store/courseStore';

export default function StudyHome() {
  // Renomeei para StudyHome para corresponder aos seus arquivos
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { xp } = useUserStore();
  const { modules, setCurrentPhase } = useCourseStore();

  const handlePhasePress = (moduleId: number, phaseId: number) => {
    setCurrentPhase(moduleId, phaseId);
    navigation.navigate('ExerciseScreen');
  };

  return (
    <View style={style.directorContainer}>
      <View style={style.headContainer}>
        {/* Seu cabeçalho com ícones e informações continua aqui */}
        {/* Exemplo de como usar o XP do userStore */}
        <View style={style.infContainer}>
          <View style={[styleGlobal.ContainerBackground, style.inf]}>
            <IconGlobal name="sapphire" lar={28} />
            <Text style={style.textInf}>{xp}</Text>
          </View>
          {/* ... outros ícones */}
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
