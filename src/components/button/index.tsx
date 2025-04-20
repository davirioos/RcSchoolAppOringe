import { TouchableOpacity, Text } from 'react-native';
import { style } from './styles';

type Props = {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
};
export function Button({ title, onPress, disabled }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={style.conteiner}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
}
