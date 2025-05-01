import { View, Text, ScrollView, Alert } from 'react-native';
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

export default function HomeScreenDirector() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
  const { userData } = useUser();

  const atividadeTeste = [
    {
      capitulo: {
        secao: 'Primeiro modulo desenvolvismento Web',
        descricao: 'Fundamentos e introdução Html e Css',
        fases: {
          fase1: '1',
          fase2: '1',
          fase3: '1',
          fase4: '1',
          fase5: '1',
        },
      },
    },
    {
      capitulo: {
        secao: 'Primeiro modulo desenvolvimento Web',
        descricao: 'Fundamentos e introdução Html e Css',
        fases: {
          fase1: '1',
          fase2: '1',
          fase3: '1',
          fase4: '1',
          fase5: '1',
        },
      },
    },
  ];
  console.log(userData?.nivel);

  return (
    <View style={style.directorContainer}>
      <View style={style.headContainer}>
        <View style={[styleGlobal.ContainerBackground, style.rakingContainer]}>
          <RankIconGlobal name="wood10" lar={80} />
        </View>
        <View>
          <View style={style.infContainer}>
            <View style={[styleGlobal.ContainerBackground, style.inf]}>
              <IconGlobal name="fire" lar={28} />
              <Text style={style.textInf}>10</Text>
            </View>
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
            <View style={[styleGlobal.ContainerBackground, style.infCourse]}>
              <IconGlobal name="menu" lar={24} />
              <Text style={style.textInfCourse}>{userData?.curso}</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {atividadeTeste.map((item, index) => {
          const { secao, descricao, fases } = item.capitulo;
          return (
            <View key={index} style={style.phaseContainer}>
              <View style={[styleGlobal.ContainerBackgroundDark, style.containerPhaseSection]}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{secao}</Text>
                <Text style={{ marginBottom: 10 }}>{descricao}</Text>
              </View>
              {Object.keys(fases).map((fase, idx) => {
                let usersFase = userData?.nivel ?? 0;
                let ondeesta = usersFase + 1;

                // Lógica de verificação de acesso ao nível
                const status: 'locked' | 'current' | 'completed' =
                  idx === usersFase ? 'current' : idx < ondeesta ? 'completed' : 'locked';

                // Condição de bloqueio, não pode acessar níveis maiores que o nível atual do usuário
                const canAccess = idx <= usersFase;

                return (
                  <ButtonHome
                    key={idx}
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
                          capitulo: secao,
                          fase: fase,
                        });
                      } else {
                        // Talvez exibir um aviso ou feedback de que o nível está bloqueado
                        Alert.alert('Este nível está bloqueado!');
                      }
                    }}
                    disabled={!canAccess} // Desabilita o botão se o nível não for acessível
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
