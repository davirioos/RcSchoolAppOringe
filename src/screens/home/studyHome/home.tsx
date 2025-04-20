import { View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppStackParamList } from '../../../routes/appRoutes';
import { style } from './styles';
import { styleGlobal } from '../../../styles/styleGlobal';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ButtonHome } from '../../../components/fasesHome/index';

export default function HomeScreenDirector() {
  const navigation = useNavigation<NativeStackNavigationProp<AppStackParamList>>();
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

  return (
    <View style={style.directorContainer}>
      <View style={style.headContainer}>
        <View style={[styleGlobal.ContainerBackground, style.rakingContainer]}>
          <Text>Teste</Text>
        </View>
        <View>
          <View style={style.infContainer}>
            <View style={[styleGlobal.ContainerBackground, style.inf]}>
              <FontAwesome name="heart" size={20} color="red" />
              <Text style={style.textInf}>10</Text>
            </View>
            <View style={[styleGlobal.ContainerBackground, style.inf]}>
              <FontAwesome name="diamond" size={20} color="blue" />
              <Text style={style.textInf}>200</Text>
            </View>
            <View style={[styleGlobal.ContainerBackground, style.inf]}>
              <FontAwesome name="fire" size={20} color="red" />
              <Text style={style.textInf}>15</Text>
            </View>
          </View>
          <View style={style.infCourseContainer}>
            <View style={[styleGlobal.ContainerBackground, style.infCourse]}>
              <FontAwesome name="bars" size={20} color="white" />
              <Text style={style.textInf}>Curso de Javascript</Text>
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
                let usersFase = 3;
                let ondeesta = usersFase + 1;
                const status: 'locked' | 'current' | 'completed' =
                  idx === usersFase ? 'current' : idx < ondeesta ? 'completed' : 'locked';

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
                      if (status !== 'locked') {
                        navigation.navigate('ExerciseScreen', {
                          capitulo: secao,
                          fase: fase,
                        });
                      }
                    }}
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
