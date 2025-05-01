import { View, Text, ScrollView } from 'react-native';
import styles from './style';
import { Button } from '../../button';

type Props = {
  textInf: string;
};

export default function Theoretical({ textInf }: Props) {
  return (
    <ScrollView>
      <View style={styles.headContainer}>
        <Text style={styles.texttitle}>Teorico</Text>
      </View>
      <ScrollView>
        <View style={styles.textInfContainer}>
          <Text style={styles.texInf}>{textInf}</Text>
        </View>
      </ScrollView>
      <View style={styles.buttonContainer}>
        <Button title="Avançar" />
      </View>
    </ScrollView>
  );
}
