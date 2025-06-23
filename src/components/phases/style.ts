import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-around',
  },
  pergunta: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  fraseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  balaoFrase: {
    borderBottomWidth: 2,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 8,
    margin: 4,
    minWidth: 50,
    alignItems: 'center',
  },
  vazio: {
    color: '#ccc',
    fontSize: 18,
  },
  preenchido: {
    color: '#333',
    fontSize: 18,
    fontWeight: '600',
  },
  baloesContainer: {
    justifyContent: 'center',
    marginTop: 30,
  },
  balaoOpcao: {
    backgroundColor: '#e0f7fa',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 6,
    alignSelf: 'center',
  },
  balaoTexto: {
    fontSize: 16,
    color: '#00796b',
    fontWeight: '600',
  },
});

export default styles;
