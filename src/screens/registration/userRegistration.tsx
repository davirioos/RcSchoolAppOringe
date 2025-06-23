import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useForm, FieldError } from 'react-hook-form';
import { style } from './styles';
import ProgressoAnimado from '../../components/barraProgress';
import { InputPrincipal } from '../../components/input';
import { Button } from '../../components/button';
import { useRegister } from '../../contexts/RegisterContext';

export default function UserRegistration() {
  const [disabled, setDisabled] = useState(false);
  const { registerUser, registerData } = useRegister();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (formData: any) => {
    setDisabled(true);

    const dadosCompletos = {
      ...registerData,
      name: formData.users,
      email: formData.email,
      password: formData.password,
    };

    try {
      await registerUser(dadosCompletos); // todos os dados reunidos
    } catch (error) {
      console.log('❌ Erro ao registrar:', error);
    } finally {
      setDisabled(false);
    }
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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
              minLength: {
                value: 3,
                message: 'Mínimo de 3 caracteres',
              },
              maxLength: {
                value: 20,
                message: 'Máximo de 20 caracteres',
              },
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
            rules: {
              required: 'A senha é obrigatória.',
              minLength: {
                value: 8,
                message: 'Mínimo de 8 caracteres',
              },
              maxLength: {
                value: 20,
                message: 'Máximo de 20 caracteres',
              },
            },
            defaultValue: '',
          }}
          inputProps={{
            placeholder: 'Digite sua senha',
          }}
          isPassword={true}
        />
        {errors.password && <Text>{(errors.password as FieldError)?.message}</Text>}

        <Button
          title={disabled ? 'Carregando...' : 'Finalizar Cadastro'}
          onPress={handleSubmit(handleRegister)}
          disabled={disabled}
        />
      </View>
    </ScrollView>
  );
}
