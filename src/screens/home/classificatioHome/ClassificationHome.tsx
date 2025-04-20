import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { style } from './styles';
import { styleGlobal } from '../../../styles/styleGlobal';
import { FIREBASE_API_KEY } from '@env';

export default function ClassificationHome() {
  return (
    <View style={style.directorContainer}>
      <Image
        source={require('../../../assets/img/Coffee1.png')}
        style={{ width: 200, height: 200 }}
      />
      <Text>Participe de nosso jogos e competições.</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styleGlobal.ContainerBackground, style.buttonContainer]}
      >
        <View>
          <Image
            source={require('../../../assets/img/alvo-de-dardos.png')}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <View>
          <Text style={style.textPratica}>Competição de Pergutnas</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
