import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  progressBar: {
    height: 13,
    width: wp('90%'),
    maxWidth: 400,
    borderRadius: 20,
    borderColor: '#BF876B',
  },
  container: {
    borderColor: '#BF876B',
  },
});

export default styles;
