import { Image, ImageSourcePropType } from 'react-native';

type Props = {
  name: string;
  lar: number;
};
export function RankIconGlobal({ name, lar }: Props) {
  const icons: { [key: string]: ImageSourcePropType } = {
    wood1: require('../../assets/img/ranking/shield-wood-1.png'),
    wood2: require('../../assets/img/ranking/shield-wood-2.png'),
    wood3: require('../../assets/img/ranking/shield-wood-3.png'),
    wood4: require('../../assets/img/ranking/shield-wood-4.png'),
    wood5: require('../../assets/img/ranking/shield-wood-5.png'),
    wood6: require('../../assets/img/ranking/shield-wood-6.png'),
    wood7: require('../../assets/img/ranking/shield-wood-7.png'),
    wood8: require('../../assets/img/ranking/shield-wood-8.png'),
    wood9: require('../../assets/img/ranking/shield-wood-9.png'),
    wood10: require('../../assets/img/ranking/shield-wood-10.png'),
  };

  return <Image source={icons[name]} style={{ width: lar, height: lar }} />;
}
