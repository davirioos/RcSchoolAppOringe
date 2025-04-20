import { StyleSheet } from 'react-native';

export const style = StyleSheet.create({
  directorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    padding: 10,
  },
  descricaoTextShop: {
    color: '#494949',
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
  },
  buttonPlanos: {
    width: 300,
    height: 80,
    gap: 40,
    color: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPlanos: {
    color: '#fff',
  },
  textPlanosPrecoContainer: {
    alignItems: 'flex-end',
  },
  textPlanosPreco: {
    color: '#fff',
  },
  buttonPlanosVip: {
    width: 300,
    height: 120,
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textPlanosVipPrincpal: {
    color: '#fff',
    fontFamily: 'Roboto-Black',
    fontSize: 20,
  },
  textPlanosVip: {
    color: '#fff',
    fontSize: 12,
  },
  descricaoTextShopCancelar: {
    color: '#494949',
    fontSize: 15,
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    marginBottom: 25,
  },
});
