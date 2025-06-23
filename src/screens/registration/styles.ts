import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 20,
    padding: 10,
    marginTop: 10,
  },
  textPrincipal: {
    fontFamily: 'Roboto-Bold',
    fontSize: wp('8'),
    textAlign: 'center',
    color: '#494949',
  },
  textSecundario: {
    fontFamily: 'Roboto-Light',
    fontSize: wp('4'),
    color: '#494949',
    textAlign: 'center',
  },
});
