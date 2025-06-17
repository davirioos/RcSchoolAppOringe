import { ScrollView, View, Text, Image, TouchableOpacity } from 'react-native';
import { style } from './styles';
import { styleGlobal } from '../../../styles/styleGlobal';

export default function StoryHome() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.directorContainer}>
        <Image
          source={require('../../../assets/img/Coffee1.png')}
          style={{ width: 200, height: 200 }}
        />
        <Text style={style.descricaoTextShop}>
          Alunos com o plano VIP tem mais{'\n'}chances de concluir os cursos
        </Text>
        <TouchableOpacity
          style={[styleGlobal.ContainerBackgroundDark, style.buttonPlanos]}
          activeOpacity={0.8}
        >
          <View>
            <Text style={style.textPlanosVipPrincpal}>Plano sem ADS</Text>
            <Text style={style.textPlanos}>Plano sem Anuncios</Text>
          </View>
          <View style={style.textPlanosPrecoContainer}>
            <Text style={style.textPlanosPreco}>R$ 4,99 / Mês</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={style.descricaoTextShopCancelar}>
        Você pode cancelar a qualquer momento{'\n'}na PlayStory
      </Text>
    </ScrollView>
  );
}
