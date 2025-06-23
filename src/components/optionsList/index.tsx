import React from 'react';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

interface OptionListProps {
  options: string[];
  onPress: (registSelecionado: string) => void;
}

const OptionList: React.FC<OptionListProps> = ({ options, onPress }) => {
  return (
    <ScrollView showsHorizontalScrollIndicator={false}>
      {options.map((nome, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          activeOpacity={0.8}
          onPress={() => onPress(nome)}
        >
          <Text style={styles.texto}>{nome}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default OptionList;
