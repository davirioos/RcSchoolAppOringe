import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  optionButton: {
    flexDirection: 'row',
    width: wp('90%'),
    height: 75,
    padding: '5%',
    marginVertical: 5,
    backgroundColor: '#f5f5f5',
    borderWidth: 4,
    borderRadius: 20,
    borderColor: '#BF876B',
    alignItems: 'center',
    alignContent: 'center',
  },
  texto: {
    fontFamily: 'Roboto-Medium',
    color: '#494949',
  },
});
