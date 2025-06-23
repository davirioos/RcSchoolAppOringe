import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Button } from '../components/button';
import { ButtonSecondary } from '../components/buttonSecondary';
import { style } from './styles';
import { RootStackParamList } from '../routes/authRoutes';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Index() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const screenLogin = () => {
    navigation.navigate('Login');
  };
  const screenRegistration = () => {
    console.log('opa');
    navigation.navigate('Registration');
  };

  return (
    <View style={style.container}>
      <Text style={style.textoPrincipal}>Rc School</Text>
      <Text style={style.descricao}>Vamos começar ?</Text>
      <Button title="Faça login" onPress={screenLogin} />
      <ButtonSecondary title="Registro" onPress={screenRegistration} />
    </View>
  );
}
