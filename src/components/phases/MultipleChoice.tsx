// src/components/phases/MultipleChoice.tsx

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type MultipleChoiceProps = {
  pergunta: string;
  opcoes: string[];
  resposta: string;
  onNext: () => void; // Função chamada para avançar para a próxima fase
  onComplete: () => void;
};

export default function MultipleChoice({
  pergunta,
  opcoes,
  resposta,
  onNext,
  onComplete,
}: MultipleChoiceProps) {
  const [selected, setSelected] = useState<string | null>(null); // Estado para a opção selecionada

  function handleSelect(opcao: string) {
    setSelected(opcao);

    const isCorrect = opcao === resposta;

    // Apenas chame onComplete() se a resposta for correta
    if (isCorrect) {
      setTimeout(() => {
        onComplete();
      }, 1000);
    }
    // Se a resposta estiver errada, nada acontece,
    // e o usuário apenas verá o feedback visual da cor vermelha.
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
