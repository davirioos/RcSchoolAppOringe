import { StyleSheet } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const style = StyleSheet.create({
  group: {
    width: '100%',
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    overflow: 'hidden',
  },
  control: {
    width: '80%',
    maxHeight: 40,
    borderColor: '#BF876B',
    borderBottomWidth: 1,
  },
});
