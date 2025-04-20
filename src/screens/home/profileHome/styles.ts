import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  headContainer: {
    backgroundColor: '#BF876B',
    borderBottomWidth: 4,
    borderColor: '#754F3C',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  headText: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
    fontSize: 20,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  infDirectorContainer: {
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 20,
  },
  infContainer: {
    width: 100,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 5,
  },
  textInf: {
    color: '#fff',
    fontFamily: 'Roboto-Medium',
  },
  conquestCursosContainer: {
    width: '90%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
