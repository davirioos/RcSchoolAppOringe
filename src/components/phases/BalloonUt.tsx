// src/components/phases/BalloonUt.tsx

import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// 1. Definimos as props que o componente vai receber
interface BalloonProps {
  palavras: string[]; // As palavras embaralhadas para os balões
  fraseCorreta: string; // A frase correta como uma string única
  onComplete: () => void;
}

export function BalloonUt({ palavras, fraseCorreta, onComplete }: BalloonProps) {
  // 2. O estado é inicializado a partir das props
  const [baloesDisponiveis, setBaloesDisponiveis] = useState(palavras);

  // Cria os espaços vazios com base no número de palavras da frase correta
  const espacosDaFrase = fraseCorreta.split(' ');
  const [fraseMontada, setFraseMontada] = useState<string[]>(espacosDaFrase.map(() => ''));

  // Estado para dar feedback visual ao usuário
  const [statusResposta, setStatusResposta] = useState<'pendente' | 'correto' | 'errado'>(
    'pendente',
  );

  // Função para adicionar uma palavra (lógica mantida)
  const adicionarPalavra = (palavra: string) => {
    if (statusResposta !== 'pendente') return; // Bloqueia ações após verificação

    const novosBaloes = baloesDisponiveis.filter(p => p !== palavra);
    setBaloesDisponiveis(novosBaloes);

    const novaFrase = [...fraseMontada];
    const posicaoVazia = novaFrase.findIndex(p => p === '');
    if (posicaoVazia !== -1) {
      novaFrase[posicaoVazia] = palavra;
      setFraseMontada(novaFrase);
    }
  };

  // Função para remover uma palavra (lógica mantida)
  const removerPalavra = (index: number) => {
    if (statusResposta !== 'pendente') return; // Bloqueia ações após verificação

    const novaFrase = [...fraseMontada];
    const palavraRemovida = novaFrase[index];

    if (palavraRemovida !== '') {
      novaFrase[index] = '';
      setFraseMontada(novaFrase);
      setBaloesDisponiveis([...baloesDisponiveis, palavraRemovida]);
    }
  };

  // 3. Função de verificação foi atualizada
  const verificarResposta = () => {
    const respostaUsuario = fraseMontada.join(' ');

    if (respostaUsuario === fraseCorreta) {
      setStatusResposta('correto');
      // Se a resposta estiver certa, chama onComplete após um delay
      setTimeout(() => {
        onComplete();
      }, 1500);
    } else {
      setStatusResposta('errado');
    }
  };

  // Função para resetar apenas o estado interno do componente
  const tentarNovamente = () => {
    setStatusResposta('pendente');
    setBaloesDisponiveis(palavras);
    setFraseMontada(espacosDaFrase.map(() => ''));
  };

  const isFraseCompleta = !fraseMontada.includes('');

  return (
    <View style={styles.container}>
      {/* Área onde a frase é montada */}
      <View
        style={[
          styles.fraseContainer,
          statusResposta === 'correto' && styles.bordaCorreta,
          statusResposta === 'errado' && styles.bordaErrada,
        ]}
      >
        {fraseMontada.map((palavra, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => removerPalavra(index)}
            style={styles.palavraMontada}
          >
            <Text style={styles.palavraTexto}>{palavra || ''}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Área dos balões de palavras disponíveis */}
      <View style={styles.baloesContainer}>
        {baloesDisponiveis.map((palavra, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => adicionarPalavra(palavra)}
            style={styles.balao}
          >
            <Text style={styles.palavraTexto}>{palavra}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Botões de Ação */}
      <View style={styles.actionContainer}>
        {isFraseCompleta && statusResposta === 'pendente' && (
          <TouchableOpacity
            onPress={verificarResposta}
            style={[styles.button, styles.buttonVerificar]}
          >
            <Text style={styles.buttonText}>Verificar</Text>
          </TouchableOpacity>
        )}
        {statusResposta === 'errado' && (
          <TouchableOpacity
            onPress={tentarNovamente}
            style={[styles.button, styles.buttonTentarNovamente]}
          >
            <Text style={styles.buttonText}>Tentar Novamente</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

// 4. Adicionei alguns estilos para a experiência ficar melhor
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  fraseContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    minHeight: 50,
    borderBottomWidth: 2,
    borderColor: '#e0e0e0',
    width: '100%',
    marginBottom: 30,
    padding: 5,
  },
  bordaCorreta: {
    borderColor: '#A8E6CF',
  },
  bordaErrada: {
    borderColor: '#FF8A80',
  },
  palavraMontada: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  baloesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  balao: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 5,
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
  },
  palavraTexto: {
    fontSize: 16,
  },
  actionContainer: {
    width: '100%',
    marginTop: 30,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonVerificar: {
    backgroundColor: '#4CAF50',
  },
  buttonTentarNovamente: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
