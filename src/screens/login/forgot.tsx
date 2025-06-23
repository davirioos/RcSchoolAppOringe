import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm, FieldError } from 'react-hook-form';
import { RootStackParamList } from '../../routes/authRoutes';
import { InputPrincipal } from '../../components/input';
import { Button } from '../../components/button';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function ForgotPasswordScreen() {
  const [disabled, setDisabled] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const email = watch('email');
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const handleResetPassword = async () => {
    if (!email) {
      Alert.alert('Erro', 'Digite seu e-mail.');
      return;
    }

    setDisabled(true);

    try {
      await auth().sendPasswordResetEmail(email);
      Alert.alert('Sucesso', 'Um link de redefinição de senha foi enviado para seu e-mail.');
      navigation.navigate('Login');
    } catch (error: any) {
      console.error(error);
      Alert.alert(
        'Erro',
        'Não foi possível enviar o e-mail. Verifique o endereço e tente novamente.',
      );
    } finally {
      setDisabled(false);
    }
  };

  return (
    <View style={{ padding: 20, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Redefinir senha</Text>
      <InputPrincipal
        formProps={{
          control,
          name: 'email',
          rules: {
            required: 'Digite seu e-mail.',
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
      <Button
        title={'Entrar no App'}
        onPress={handleSubmit(handleResetPassword)}
        disabled={disabled}
      />
    </View>
  );
}
