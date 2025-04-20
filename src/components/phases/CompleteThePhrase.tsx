import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

const CompleteThePhrase = () => {
  const [input, setInput] = useState('');
  const [phrase, setPhrase] = useState('Eu estou aprendendo');

  // Função para verificar se a resposta está correta
  const checkAnswer = () => {
    if (input.trim().toLowerCase() === 'react native') {
      Alert.alert('Parabéns!', 'Você completou a frase corretamente.');
    } else {
      Alert.alert('Tente novamente', 'A resposta está incorreta. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complete a frase:</Text>
      <View style={styles.phraseContainer}>
        <Text style={styles.phrase}>{phrase} </Text>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="_____"
          autoCorrect={false}
          autoCapitalize="none"
          keyboardType="default"
        />
        <Text style={styles.phrase}>.</Text>
      </View>
      <Button title="Verificar Resposta" onPress={checkAnswer} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  phraseContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  phrase: {
    fontSize: 20,
  },
  input: {
    height: 40,
    width: 150,
    borderColor: '#ccc',
    borderWidth: 1,
    paddingLeft: 5,
    fontSize: 18,
    marginHorizontal: 5,
  },
});

export default CompleteThePhrase;
