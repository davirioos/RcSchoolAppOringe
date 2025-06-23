import React from 'react';
import { View } from 'react-native';
import styles from './styles'; // Importa o estilo do arquivo externo
import { ProgressBar } from 'react-native-paper';

type ProgressoAnimadoProps = {
  progresso: number; // Aceita valores de 0 a 1 (ex: 0.25 para 25%)
};

const ProgressoAnimado: React.FC<ProgressoAnimadoProps> = ({ progresso }) => {
  return (
    <View style={styles.container}>
      <ProgressBar progress={progresso} color="#69322D" style={styles.progressBar} />
    </View>
  );
};

export default ProgressoAnimado;
