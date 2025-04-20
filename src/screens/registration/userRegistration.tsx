import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm, FieldError } from 'react-hook-form';
import { style } from './styles';
import ProgressoAnimado from '../../components/barraProgress';
import { RootStackParamList } from '../../routes/authRoutes';
import { InputPrincipal } from '../../components/input';
import { Button } from '../../components/button';
import { auth, db, createUserWithEmailAndPassword } from '../../config/firebase'; // Importando a função corretamente

import { doc, setDoc, serverTimestamp } from 'firebase/firestore'; // Firestore modular

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function UserRegistration() {
  const [disabled, setDisabled] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const registrationSearch = async (data: any) => {
    if (disabled) return;
    setDisabled(true);

    const { users, email, password } = data;

    try {
      // Criação de usuário com e-mail e senha no Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password); // Usando a função importada
      const uid = userCredential.user.uid;

      // Salva os dados adicionais no Firestore
      const userRef = doc(db, 'users', uid); // Referência para o documento do usuário
      await setDoc(userRef, {
        uid,
        email,
        apelido: users,
        createdAt: serverTimestamp(), // Usando o timestamp do Firestore
      });

      // Redireciona para a tela principal
      navigation.navigate('HomeScreenDirector');
    } catch (error: any) {
      console.error('Erro ao registrar usuário:', error);
      Alert.alert('Erro no cadastro', error.message);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <View style={style.container}>
      <ProgressoAnimado progresso={1} />
      <Text style={style.textPrincipal}>Já vamos começar</Text>
      <Text style={style.textSecundario}>Finalizando Cadastro</Text>

      <InputPrincipal
        formProps={{
          control,
          name: 'users',
          rules: {
            required: 'O apelido é obrigatório',
          },
          defaultValue: '',
        }}
        inputProps={{
          placeholder: 'Digite seu apelido',
        }}
      />
      {errors.users && <Text>{(errors.users as FieldError)?.message}</Text>}

      <InputPrincipal
        formProps={{
          control,
          name: 'email',
          rules: {
            required: 'O e-mail é obrigatório.',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: 'Formato de e-mail inválido.',
            },
          },
          defaultValue: '',
        }}
        inputProps={{
          placeholder: 'Digite seu e-mail',
        }}
      />
      {errors.email && <Text>{(errors.email as FieldError)?.message}</Text>}

      <InputPrincipal
        formProps={{
          control,
          name: 'password',
          rules: { required: 'A senha é obrigatória.' },
          defaultValue: '',
        }}
        inputProps={{
          placeholder: 'Digite sua senha',
        }}
        isPassword={true}
      />
      {errors.password && <Text>{(errors.password as FieldError)?.message}</Text>}

      <Button
        title={'Finalizar Cadastro'}
        onPress={handleSubmit(registrationSearch)}
        disabled={disabled}
      />
    </View>
  );
}
