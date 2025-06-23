import React from 'react';
import {
  Modal,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

type Curso = {
  id: string;
  titulo: string;
  descricao: string;
  thumbnail: string; // URL da imagem (pode ser local ou web)
};

type Props = {
  visible: boolean;
  onClose: () => void;
  cursos: Curso[];
};

export default function CursosModal({ visible, onClose, cursos }: Props) {
  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose} transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>Cursos Disponíveis</Text>

          <FlatList
            data={cursos}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity activeOpacity={0.8} style={styles.cursoContainer}>
                <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
                <View style={styles.textContainer}>
                  <Text style={styles.titulo}>{item.titulo}</Text>
                  <Text style={styles.descricao}>{item.descricao}</Text>
                </View>
              </TouchableOpacity>
            )}
            contentContainerStyle={{ paddingBottom: 20 }}
          />

          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
