import { Image, ImageSourcePropType } from 'react-native';

type Props = {
  name: string;
  lar: number;
};
export function IconGlobal({ name, lar }: Props) {
  const icons: { [key: string]: ImageSourcePropType } = {
    diamond: require('../../assets/icons/DiamondHeart.png'),
    fire: require('../../assets/icons/Fire.png'),
    sapphire: require('../../assets/icons/Sapphire.png'),
    menu: require('../../assets/icons/barra-de-menu.png'),
  };

  return <Image source={icons[name]} style={{ width: lar, height: lar }} />;
}
