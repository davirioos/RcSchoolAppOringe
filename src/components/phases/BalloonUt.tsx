import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { useState, useEffect } from 'react';

export default function BalloonUt() {
  // Frase de teste, no futuro será recebida do Firebase
  const fraseCorreta = ['I', 'am', 'happy'];

  // Estado para os balões e a frase montada
  const [baloesDisponiveis, setBaloesDisponiveis] = useState(['happy', 'I', 'am']);
  const [fraseMontada, setFraseMontada] = useState(['', '', '']);

  // Função para adicionar uma palavra na frase montada
  const adicionarPalavra = (palavra: string) => {
    const novosBaloes = baloesDisponiveis.filter(p => p !== palavra);
    setBaloesDisponiveis(novosBaloes);

    const novaFrase = [...fraseMontada];
    const posicaoVazia = novaFrase.findIndex(p => p === '');
    if (posicaoVazia !== -1) {
      novaFrase[posicaoVazia] = palavra;
      setFraseMontada(novaFrase);
    }
  };

  // Função para remover uma palavra da frase montada
  const removerPalavra = (index: number) => {
    const novaFrase = [...fraseMontada];
    const palavraRemovida = novaFrase[index];

    if (palavraRemovida !== '') {
      novaFrase[index] = '';
      setFraseMontada(novaFrase);
      setBaloesDisponiveis([...baloesDisponiveis, palavraRemovida]);
    }
  };

  // Função para verificar a resposta
  const verificarResposta = () => {
    const respostaCorreta = fraseCorreta.join(' ');
    const respostaUsuario = fraseMontada.join(' ');

    if (respostaCorreta === respostaUsuario) {
      Alert.alert('✅ Correto!');
    } else {
      Alert.alert('❌ Errado! Tente novamente.');
    }
  };

  // Função para resetar o exercício
  const resetarExercicio = () => {
    setFraseMontada(['', '', '']);
    setBaloesDisponiveis(['happy', 'I', 'am']);
  };

  // Exemplo de uso do useEffect para buscar a frase do Firebase no futuro (comentado por enquanto)
  // useEffect(() => {
  //   const fetchPhrase = async () => {
  //     // Aqui você faria a chamada ao Firebase para buscar a frase
  //     const fetchedPhrase = ['I', 'am', 'happy']; // Isso é um exemplo
  //     setFraseCorreta(fetchedPhrase);
  //     setBaloesDisponiveis(fetchedPhrase.reverse()); // Exemplo de como os balões podem vir
  //   };

  //   fetchPhrase();
  // }, []);

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <View style={{ flexDirection: 'row', marginBottom: 20 }}>
        {fraseMontada.map((palavra, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => removerPalavra(index)}
            style={{ borderWidth: 1, padding: 10, margin: 5 }}
          >
            <Text>{palavra || '___'}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {baloesDisponiveis.map((palavra, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => adicionarPalavra(palavra)}
          style={{ padding: 10, backgroundColor: '#eee', margin: 5 }}
        >
          <Text>{palavra}</Text>
        </TouchableOpacity>
      ))}
      {!fraseMontada.includes('') && (
        <TouchableOpacity
          onPress={verificarResposta}
          style={{ backgroundColor: '#4CAF50', padding: 10, marginTop: 20, borderRadius: 10 }}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>Verificar</Text>
        </TouchableOpacity>
      )}
      {!fraseMontada.includes('') && (
        <TouchableOpacity
          onPress={resetarExercicio}
          style={{ backgroundColor: '#f44336', padding: 10, marginTop: 10, borderRadius: 10 }}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>Tentar novamente</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
