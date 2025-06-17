import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#B8795E',
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    maxHeight: 50,
    maxWidth: 320,
    borderColor: '#754F3C',
    borderTopWidth: 3,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderBottomWidth: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
