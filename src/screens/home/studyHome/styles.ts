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
    padding: 3,
  },
  rakingContainer: {
    width: 95,
    height: 95,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
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
    fontSize: 12,
  },
  infCourseContainer: {
    marginRight: 10,
  },

  infCourse: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 45,
    width: '85%',
    paddingLeft: 5,
  },
  textInfCourse: {
    color: '#fff',
    fontFamily: 'Roboto-Black',
    fontSize: 12,
    flexWrap: 'wrap',
    flexShrink: 1,
  },

  phaseContainer: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerPhaseSection: {
    marginTop: 10,
    padding: 8,
  },
  modulosSecao: {
    fontSize: 18,
    fontFamily: 'Roboto-Bold',
    color: '#fff',
  },
  descricaoInf: {
    fontSize: 12,
    fontFamily: 'Roboto-ligth',
    color: '#fff',
  },
});
