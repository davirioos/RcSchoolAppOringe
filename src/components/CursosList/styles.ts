import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    maxHeight: '80%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  cursoContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
    paddingBottom: 10,
  },
  thumbnail: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 15,
    backgroundColor: '#ccc',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 18,
    fontWeight: '600',
    color: '#494949',
  },
  descricao: {
    fontSize: 14,
    color: '#494949',
    marginTop: 4,
  },
  closeButton: {
    padding: 12,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#70413D',
    borderTopWidth: 2,
    borderRightWidth: 4,
    borderBottomWidth: 8,
    borderLeftWidth: 4,
    borderRadius: 10,
    borderColor: '#2E1917',
  },
  closeText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default styles;
