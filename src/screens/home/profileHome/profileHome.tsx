import { View, Text, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { style } from './styles';
import { styleGlobal } from '../../../styles/styleGlobal';
import { IconGlobal } from '../../../components/iconsHome/icons';
import { getAuth, signOut } from 'firebase/auth';
import { Button } from '../../../components/button';
import { RootStackParamList } from '../../../routes/authRoutes';
type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function ProfiledHome() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
        <View style={style.headContainer}>
          <Text style={style.headText}>Perfil</Text>
        </View>
        <View style={style.imageContainer}>
          <Image
            source={require('../../../assets/img/alvo-de-dardos.png')}
            style={{ width: 140, height: 140 }}
          />
        </View>
        <View style={style.infDirectorContainer}>
          <View style={[style.infContainer, styleGlobal.ContainerBackground]}>
            <IconGlobal name="sapphire" lar={26} />
            <Text style={style.textInf}>150</Text>
          </View>
          <View style={[style.infContainer, styleGlobal.ContainerBackground]}>
            <IconGlobal name="fire" lar={26} />
            <Text style={style.textInf}>03</Text>
          </View>
          <View style={[style.infContainer, styleGlobal.ContainerBackground]}>
            <IconGlobal name="fire" lar={26} />
            <Text style={style.textInf}>400</Text>
          </View>
        </View>
        <View style={style.infDirectorContainer}>
          <View style={[style.conquestCursosContainer, styleGlobal.ContainerBackground]}>
            <Text>Em um futuro próximo</Text>
          </View>
        </View>
        <View style={style.infDirectorContainer}>
          <View style={[style.conquestCursosContainer, styleGlobal.ContainerBackground]}>
            <Text>Em um futuro próximo</Text>
          </View>
        </View>
        <Button title="Sair" />
      </View>
    </ScrollView>
  );
}
2;
