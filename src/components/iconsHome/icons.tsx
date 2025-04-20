import { Image, ImageSourcePropType } from 'react-native';

type Props = {
  name: string;
};
export function IconGlobal({ name }: Props) {
  const icons: { [key: string]: ImageSourcePropType } = {
    diamond: require('../../assets/icons/DiamondHeart.png'),
    fire: require('../../assets/icons/Fire.png'),
    sapphire: require('../../assets/icons/Sapphire.png'),
  };

  return <Image source={icons[name]} />;
}
