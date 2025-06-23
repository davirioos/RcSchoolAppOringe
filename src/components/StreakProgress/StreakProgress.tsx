import React from 'react';
import { Modal, View, Text, FlatList, StyleSheet, Pressable } from 'react-native';
import styles from './styles';
type Props = {
  visible: boolean;
  onClose: () => void;
  userStreak: number; // Agora é número, ex: 20
};

export default function StreakModal({ visible, onClose, userStreak }: Props) {
  // totalDays começa em 30, aumenta +30 sempre que estiver faltando menos de 10 para userStreak
  let totalDays = 30;
  while (userStreak >= totalDays - 10) {
    totalDays += 30;
  }

  // Cria array de dias para renderizar
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose} transparent>
      <View style={styles.overlay}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>🔥 Dias estudando: {userStreak} dias</Text>

          <FlatList
            data={daysArray}
            keyExtractor={item => item.toString()}
            numColumns={5}
            renderItem={({ item }) => {
              const isCompleted = item <= userStreak;
              return (
                <View
                  style={[
                    styles.dayBox,
                    isCompleted ? styles.dayBoxCompleted : styles.dayBoxPending,
                  ]}
                >
                  <Text style={styles.dayText}>{item}</Text>
                </View>
              );
            }}
            columnWrapperStyle={styles.row}
            contentContainerStyle={styles.grid}
            scrollEnabled={true}
          />

          <Pressable onPress={onClose} style={styles.closeButton}>
            <Text style={styles.closeText}>Fechar</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}
