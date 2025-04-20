// src/components/phases/MultipleChoice.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type Props = {
  pergunta: string;
  opcoes: string[];
  resposta: string;
  onNext: () => void; // Função chamada para avançar para a próxima fase
};

export default function MultipleChoice({ pergunta, opcoes, resposta, onNext }: Props) {
  const [selected, setSelected] = useState<string | null>(null); // Estado para a opção selecionada

  function handleSelect(opcao: string) {
    setSelected(opcao); // Atualiza a opção selecionada

    const isCorrect = opcao === resposta; // Verifica se a resposta está correta

    setTimeout(() => {
      onNext(); // Chama a função para ir para a próxima fase após 1 segundo
    }, 1000); // Delay de 1 segundo para mostrar o feedback da resposta
  }

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>{pergunta}</Text>
      {opcoes.map((opcao, index) => {
        const isSelected = selected === opcao;
        const isCorrect = opcao === resposta;

        return (
          <TouchableOpacity
            key={index}
            style={[
              styles.opcao,
              selected &&
                (isSelected ? (isCorrect ? styles.correto : styles.errado) : styles.opcao),
            ]}
            onPress={() => handleSelect(opcao)} // Quando a opção é pressionada
            disabled={!!selected} // Desabilita as opções após seleção
          >
            <Text style={styles.opcaoTexto}>{opcao}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 16,
  },
  pergunta: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  opcao: {
    backgroundColor: '#e0e0e0',
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },
  opcaoTexto: {
    fontSize: 16,
  },
  correto: {
    backgroundColor: '#A8E6CF', // Cor verde claro para a resposta correta
  },
  errado: {
    backgroundColor: '#FF8A80', // Cor vermelha para a resposta errada
  },
});
