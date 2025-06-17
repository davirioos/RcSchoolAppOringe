import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { style } from './styles';
import { styleGlobal } from '../../../styles/styleGlobal';
import CustomAlert from '../../../components/notice/notice';
import { useState } from 'react';
export default function ClassificationHome() {
  const [statusNotice, setStatusNotice] = useState<boolean>(false);

  function alertNotice() {
    setStatusNotice(true);
  }

  return (
    <View style={style.directorContainer}>
      <Image
        source={require('../../../assets/img/Coffee1.png')}
        style={{ width: 200, height: 200 }}
      />
      <Text>Participe de nosso jogos e competições.</Text>
      <CustomAlert
        title="Em breve"
        message="Fique atento! A funcionalidade estará disponível na próxima atualização."
        visible={statusNotice}
        onClose={() => setStatusNotice(false)}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styleGlobal.ContainerBackground, style.buttonContainer]}
        onPress={alertNotice}
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
