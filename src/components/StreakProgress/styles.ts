import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    maxHeight: '90%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  grid: {
    paddingBottom: 20,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dayBox: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayBoxCompleted: {
    backgroundColor: '#BF876B',
    borderTopWidth: 2,
    borderRightWidth: 4,
    borderBottomWidth: 8,
    borderLeftWidth: 4,
    borderRadius: 10,
    borderColor: '#754F3C',
  },
  dayBoxPending: {
    backgroundColor: '#ddd',
    borderTopWidth: 2,
    borderRightWidth: 4,
    borderBottomWidth: 8,
    borderLeftWidth: 4,
    borderRadius: 10,
    borderColor: '#bfbfbf',
  },
  dayText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeButton: {
    padding: 10,
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
