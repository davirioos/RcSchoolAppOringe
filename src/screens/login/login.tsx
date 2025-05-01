import React, { useState } from 'react';
import { View, Text, Alert, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useForm, FieldError } from 'react-hook-form';
import auth from '@react-native-firebase/auth';
import { style } from './styles';
import { RootStackParamList } from '../../routes/authRoutes';
import { InputPrincipal } from '../../components/input';
import { Button } from '../../components/button';

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;

export default function Login() {
  const [disabled, setDisabled] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const registrationSearch = async (data: any) => {
    auth()
      .signInWithEmailAndPassword(data.email, data.password)
      .then(() => {})
      .catch(error => {
        Alert.alert('e-mail ou senha inválidos');
      });
  };

  const signUp = () => {
    navigation.navigate('Registration');
  };

  return (
    <View style={style.container}>
      <Text style={style.textPrincipal}>Faça seu Login</Text>

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

      <InputPrincipal
        formProps={{
          control,
          name: 'password',
          rules: { required: 'Digite sua Senha' },
          defaultValue: '',
        }}
        inputProps={{
          placeholder: 'Digite sua senha',
        }}
        isPassword={true}
      />
      {errors.password && <Text>{(errors.password as FieldError)?.message}</Text>}

      <Button
        title={'Entrar no App'}
        onPress={handleSubmit(registrationSearch)}
        disabled={disabled}
      />
      <TouchableOpacity onPress={signUp}>
        <Text style={style.textLink}>Preciso de uma Conta</Text>
      </TouchableOpacity>
    </View>
  );
}
