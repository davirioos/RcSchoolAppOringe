import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },
  textoPrincipal: {
    fontSize: wp('15'),
    fontFamily: 'Super-Cottage',
    color: '#70413D',
    marginBottom: 80,
  },
  descricao: {
    fontSize: wp('5'),
    fontFamily: 'Roboto-Bold',
  },
});
