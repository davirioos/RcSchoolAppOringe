import React, { createContext, useContext, useState, ReactNode } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { Alert } from 'react-native';

// Tipo para os dados de registro
type RegisterData = {
  tempo?: string;
  curso?: string;
  motivo?: string;
  ondeConheceu?: string;
  name?: string;
  email?: string;
  password?: string;
  nivel?: number;
  fase?: number;
};

// Tipo do contexto
type RegisterContextType = {
  registerData: RegisterData;
  setRegisterData: (data: Partial<RegisterData>) => void;
  clearRegisterData: () => void;
  registerUser: (data: RegisterData) => void;
};

// Criando o contexto
const RegisterContext = createContext<RegisterContextType>({} as RegisterContextType);

// Provedor do contexto
export const RegisterProvider = ({ children }: { children: ReactNode }) => {
  const [registerData, setData] = useState<RegisterData>({});

  // Função para atualizar os dados de registro
  const setRegisterData = (data: Partial<RegisterData>) => {
    setData(prev => ({ ...prev, ...data }));
  };

  // Função para limpar os dados de registro
  const clearRegisterData = () => {
    setData({});
  };

  // Função para registrar o usuário no Firebase
  // Registro do usuário no Firebase + Firestore
  const registerUser = async (data: RegisterData) => {
    try {
      console.log('🔐 Criando usuário com email e senha...');
      const userCredential = await auth().createUserWithEmailAndPassword(
        data.email!,
        data.password!,
      );

      const user = userCredential.user;
      console.log('✅ Usuário criado. UID:', user.uid);

      // Prepare os dados sem campos undefined
      const userData = {
        name: data.name ?? '',
        email: data.email ?? '',
        tempo: data.tempo ?? '',
        curso: data.curso ?? '',
        motivo: data.motivo ?? '',
        ondeConheceu: data.ondeConheceu ?? '',
        modulo: 1,
        nivel: 0,
        fase: 0,
        vida: 3,
        moeda: 100,
      };

      console.log('📦 Salvando dados no Firestore...', userData);

      // Agora sim, salvar no Firestore com dados limpos
      await firestore().collection('users').doc(user.uid).set(userData);

      console.log('✅ Registro completo.');

      setRegisterData({
        name: data.name,
        email: data.email,
        tempo: data.tempo,
        curso: data.curso,
        motivo: data.motivo,
        ondeConheceu: data.ondeConheceu,
      });
    } catch (error: any) {
      console.log('❌ Erro ao registrar usuário:', error.code, error.message);

      if (error.code === 'auth/email-already-in-use') {
        Alert.alert('Erro', 'Este e-mail já está em uso. Tente com outro.');
      } else {
        Alert.alert('Erro', error.message || 'Erro inesperado.');
      }
    }
  };

  return (
    <RegisterContext.Provider
      value={{ registerData, setRegisterData, clearRegisterData, registerUser }}
    >
      {children}
    </RegisterContext.Provider>
  );
};

// Hook para acessar o contexto
export const useRegister = () => useContext(RegisterContext);
