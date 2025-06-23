import { TouchableOpacity, Text } from 'react-native';
import { style } from './styles';

type Props = {
  title: string;
  onPress?: () => void;
};

export function ButtonSecondary({ title, onPress }: Props) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={style.conteiner}
      onPress={onPress}
    >
      <Text style={style.text}>{title}</Text>
    </TouchableOpacity>
  );
}
