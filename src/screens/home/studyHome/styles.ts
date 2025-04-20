import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  directorContainer: {
    flex: 1,
    padding: 5,
  },
  headContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderColor: '#BF876B',
    padding: 5,
  },
  rakingContainer: {
    width: 100,
    height: 100,
    marginRight: 5,
  },
  infContainer: {
    flexDirection: 'row',
    gap: 5,
    marginBottom: 5,
  },
  inf: {
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    width: '27%',
    height: 50,
    color: '#fff',
  },
  textInf: {
    color: '#fff',
    fontFamily: 'Roboto-Black',
  },
  infCourseContainer: {
    marginRight: 10,
  },
  infCourse: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 35,
    width: '85%',
  },
  phaseContainer: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPhaseSection: {
    marginTop: 10,
  },
});
