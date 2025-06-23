import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useUserStore } from '../../store/userStore';

interface BalloonProps {
  palavras: string[];
  fraseCorreta: string;
  onComplete: () => void;
}

export function BalloonUt({ palavras, fraseCorreta, onComplete }: BalloonProps) {
  const [baloesDisponiveis, setBaloesDisponiveis] = useState(palavras);

  const [fraseMontada, setFraseMontada] = useState<string[]>(Array(palavras.length).fill(''));

  const [statusResposta, setStatusResposta] = useState<'pendente' | 'correto' | 'errado'>(
    'pendente',
  );
  const decreaseLife = useUserStore(state => state.decreaseLife);

  const adicionarPalavra = (palavra: string) => {
    if (statusResposta !== 'pendente') return;

    // Lógica para evitar adicionar a mesma palavra duas vezes se houver duplicatas
    const indexDaPalavra = baloesDisponiveis.indexOf(palavra);
    if (indexDaPalavra > -1) {
      const novosBaloes = [...baloesDisponiveis];
      novosBaloes.splice(indexDaPalavra, 1);
      setBaloesDisponiveis(novosBaloes);
    }

    const novaFrase = [...fraseMontada];
    const posicaoVazia = novaFrase.findIndex(p => p === '');
    if (posicaoVazia !== -1) {
      novaFrase[posicaoVazia] = palavra;
      setFraseMontada(novaFrase);
    }
  };

  const removerPalavra = (index: number) => {
    if (statusResposta !== 'pendente') return;

    const novaFrase = [...fraseMontada];
    const palavraRemovida = novaFrase[index];

    if (palavraRemovida !== '') {
      novaFrase[index] = '';
      setFraseMontada(novaFrase);
      setBaloesDisponiveis([...baloesDisponiveis, palavraRemovida]);
    }
  };

  const verificarResposta = () => {
    // 1. Juntamos a frase do usuário. Ex: 'print("Hello World")'
    const respostaJunta = fraseMontada.join('');

    // 2. AGORA removemos os espaços da frase do usuário. Ex: 'print("HelloWorld")'
    const respostaUsuarioSemEspacos = respostaJunta.replace(/\s/g, '');

    // 3. Removemos os espaços da frase gabarito. Ex: 'print("HelloWorld")'
    const fraseCorretaSemEspacos = fraseCorreta.replace(/\s/g, '');

    // Agora a comparação é justa e funcionará!
    if (respostaUsuarioSemEspacos === fraseCorretaSemEspacos) {
      setStatusResposta('correto');
      setTimeout(() => {
        onComplete();
      }, 1500);
    } else {
      setStatusResposta('errado');
      decreaseLife();
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
  };

  const isFraseCompleta = !fraseMontada.includes('');

  // O resto do código (JSX e Styles) permanece o mesmo...
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
        {statusResposta === 'correto' && (
          <TouchableOpacity style={[styles.button, styles.buttonParabensAcertou]}>
            <Text style={styles.buttonText}>Parabens Voce Acertou</Text>
          </TouchableOpacity>
        )}
        {statusResposta === 'errado' && (
          <TouchableOpacity style={[styles.button, styles.buttonTentarNovamente]}>
            <Text style={styles.buttonText}>Voce errou</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

// Estilos permanecem os mesmos...
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
    minHeight: 38, // Garante altura mínima
    minWidth: 30, // Garante largura mínima
    alignItems: 'center',
    justifyContent: 'center',
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
    alignItems: 'center',
  },
  button: {
    width: '90%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonVerificar: {
    backgroundColor: '#4CAF50',
  },
  buttonParabensAcertou: {
    backgroundColor: '#A8E6CF',
    borderColor: '#02fa9e',
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
