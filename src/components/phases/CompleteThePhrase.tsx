import React, { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet } from 'react-native';
import { useUserStore } from '../../store/userStore';
import { Button } from '../button';
import { ButtonSecondary } from '../buttonSecondary';

interface CompleteThePhraseProps {
  frasePartes: [string, string]; // Ex: ["A maçã é ", "."]
  palavraCorreta: string;
  onComplete: () => void;
}

export function CompleteThePhrase({
  frasePartes,
  palavraCorreta,
  onComplete,
}: CompleteThePhraseProps) {
  const [userInput, setUserInput] = useState('');
  const decreaseLife = useUserStore(state => state.decreaseLife);

  const handleVerification = () => {
    // Compara a entrada do usuário (ignorando maiúsculas/minúsculas e espaços)
    if (userInput.trim().toLowerCase() === palavraCorreta.toLowerCase()) {
      setTimeout(() => {
        onComplete();
      }, 1500);
    } else {
      setTimeout(() => {
        decreaseLife();
        onComplete();
      }, 1000);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerPergunta}>
        <Text></Text>
        <Text style={styles.textStyle}>{frasePartes[0]}</Text>
        <TextInput value={userInput} onChangeText={setUserInput} style={styles.containerInput} />
        <Text style={styles.textStyle}>{frasePartes[1]}</Text>
      </View>
      <ButtonSecondary title="Verificar" onPress={handleVerification} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
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
  textStyle: {
    fontSize: 16,
    textAlign: 'center',
  },
  containerPergunta: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
  },
  containerInput: {
    alignContent: 'center',
    width: '30%',
    minHeight: 12,
    backgroundColor: '#f0eded',
    borderRadius: 20,
    marginBottom: 30,
    padding: 5,
    fontSize: 12,
  },
});

export default CompleteThePhrase;
