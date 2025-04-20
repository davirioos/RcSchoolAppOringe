import { View, Text, ScrollView, Image } from 'react-native';
import { style } from './styles';
import { styleGlobal } from '../../../styles/styleGlobal';
import { IconGlobal } from '../../../components/iconsHome/icons';

export default function ProfiledHome() {
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
            <IconGlobal name="sapphire" />
            <Text style={style.textInf}>150</Text>
          </View>
          <View style={[style.infContainer, styleGlobal.ContainerBackground]}>
            <IconGlobal name="fire" />
            <Text style={style.textInf}>03</Text>
          </View>
          <View style={[style.infContainer, styleGlobal.ContainerBackground]}>
            <IconGlobal name="fire" />
            <Text style={style.textInf}>400</Text>
          </View>
        </View>
        <View style={style.infDirectorContainer}>
          <View style={[style.conquestCursosContainer, styleGlobal.ContainerBackground]}></View>
        </View>
        <View style={style.infDirectorContainer}>
          <View style={[style.conquestCursosContainer, styleGlobal.ContainerBackground]}></View>
        </View>
      </View>
    </ScrollView>
  );
}
2;
