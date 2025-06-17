import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';

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

  const handleVerification = () => {
    // Compara a entrada do usuário (ignorando maiúsculas/minúsculas e espaços)
    if (userInput.trim().toLowerCase() === palavraCorreta.toLowerCase()) {
      onComplete();
    } else {
      Alert.alert('Resposta incorreta, tente novamente!');
    }
  };

  return (
    <View>
      <Text>
        {frasePartes[0]}
        <Text style={{ fontWeight: 'bold' }}>______</Text>
        {frasePartes[1]}
      </Text>
      <TextInput
        placeholder="Digite a palavra que falta"
        value={userInput}
        onChangeText={setUserInput}
        style={{ borderWidth: 1, padding: 8, marginVertical: 10 }}
      />
      <Button title="Verificar" onPress={handleVerification} />
    </View>
  );
}

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
