import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

type UserData = {
  curso?: string;
  name?: string;
  email?: string;
  password?: string;
  nivel?: number;
  fase?: number;
};

export const getUserData = async (): Promise<UserData | null> => {
  const user = auth().currentUser;
  if (!user) return null;

  try {
    const doc: FirebaseFirestoreTypes.DocumentSnapshot = await firestore()
      .collection('users')
      .doc(user.uid)
      .get();

    if (doc.exists) {
      return doc.data() as UserData; // 👉 aqui está o cast para UserData
    } else {
      console.warn('Documento do usuário não encontrado.');
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar dados do Firestore:', error);
    return null;
  }
};
