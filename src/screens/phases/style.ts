import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#494949',
  },
  progress: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  inf: {
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '27%',
    height: 50,
  },
  textInf: {
    color: '#494949',
    fontFamily: 'Roboto-Black',
    fontSize: 12,
  },
});
