import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  directorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 10,
  },
  directorRankingContainer: {
    width: '100%',
  },
  rankingContainer: {
    flexDirection: 'row',
    borderColor: '#000',
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
  formatacaoText: {
    color: '#494949',
    fontSize: 14,
    fontFamily: 'Roboto-Bold',
    textAlign: 'center',
  },
  score: {
    width: '20%',
    textAlign: 'left',
  },
  position: {
    width: '20%',
    textAlign: 'center',
  },
  name: {
    width: '20%',
    textAlign: 'right',
  },
});
