import { View, Text, ScrollView, Image } from 'react-native';
import { style } from './styles';

export default function PracticedHome() {
  const ranking = [
    { jogador: { nome: 'davi', rankingatual: 1, xp: 100 } },
    { jogador: { nome: 'Victoria', rankingatual: 2, xp: 90 } },
    { jogador: { nome: 'Gabriel', rankingatual: 3, xp: 70000 } },
    { jogador: { nome: 'Manuel', rankingatual: 4, xp: 50 } },
    { jogador: { nome: 'davi', rankingatual: 5, xp: 100 } },
    { jogador: { nome: 'Victoria', rankingatual: 6, xp: 90 } },
    { jogador: { nome: 'Gabriel', rankingatual: 7, xp: 70000 } },
    { jogador: { nome: 'Manuel', rankingatual: 8, xp: 50 } },
  ];

  return (
    <View style={style.directorContainer}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {[...Array(6)].map((_, index) => (
          <Image
            key={index}
            source={require('../../../assets/img/alvo-de-dardos.png')}
            style={{ width: 64, height: 64 }}
          />
        ))}
      </ScrollView>

      <ScrollView showsVerticalScrollIndicator={false} style={style.directorRankingContainer}>
        {ranking.map((item, index) => {
          const { nome, rankingatual, xp } = item.jogador;
          return (
            <View key={`${nome}-${index}`} style={style.rankingContainer}>
              <View style={style.position}>
                <Image
                  source={require('../../../assets/img/alvo-de-dardos.png')}
                  style={{ width: 36, height: 36 }}
                />
              </View>
              <View style={style.position}>
                <Text style={style.formatacaoText}>{rankingatual}</Text>
              </View>
              <View style={style.name}>
                <Text style={style.formatacaoText}>{nome}</Text>
              </View>
              <View style={style.score}>
                <Text style={style.formatacaoText}>{xp}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
