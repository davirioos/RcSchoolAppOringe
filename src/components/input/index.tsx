import React, { forwardRef } from 'react';
import { TextInput, View, TextInputProps } from 'react-native';
import { Controller, UseControllerProps } from 'react-hook-form';
import { style } from './styles';

type Props = {
  formProps: UseControllerProps; // Configuração do campo no react-hook-form
  inputProps?: TextInputProps; // Configurações adicionais do input
  isPassword?: boolean; // Flag para campo de senha
};

const InputPrincipal = forwardRef<TextInput, Props>(
  ({ formProps, inputProps, isPassword }, ref) => {
    return (
      <Controller
        {...formProps} // Passa as configurações do hook form
        render={({ field: { onChange, onBlur, value, ref: fieldRef } }) => (
          <View style={style.group}>
            <TextInput
              ref={r => {
                fieldRef(r); // Atribui o ref para o react-hook-form
                if (typeof ref === 'function') {
                  ref(r); // Chama a função de ref externa
                } else if (ref) {
                  ref.current = r; // Atribui o ref diretamente
                }
              }}
              style={style.control}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry={isPassword} // Oculta o texto se for senha
              {...inputProps} // Permite passar configurações adicionais para o TextInput
            />
          </View>
        )}
      />
    );
  },
);

export { InputPrincipal };
