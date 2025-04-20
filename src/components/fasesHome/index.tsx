import { TouchableOpacity, Text } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { style } from './styles';

type Props = {
  onPress?: () => void;
  disabled?: boolean;
  name: string;
  size: number;
  color: string;
};
export function ButtonHome({ onPress, disabled, name, size, color }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={style.conteiner}
      onPress={onPress}
      disabled={disabled}
    >
      <FontAwesome5 name={name} size={size} color={color} solid />
    </TouchableOpacity>
  );
}
