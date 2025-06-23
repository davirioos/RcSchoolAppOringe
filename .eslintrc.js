module.exports = {
  root: true, // Para garantir que o ESLint procure configurações apenas no diretório raiz
  extends: [
    '@react-native',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all',
    'plugin:jsx-a11y/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/style',
  ],
  parser: 'babel-eslint', // Para garantir que o ESLint entenda as sintaxes mais recentes do JS
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  env: {
    es6: true,
    node: true,
    browser: true,
  },
  rules: {
    // Aqui você pode adicionar regras específicas para seu projeto
    'react/prop-types': 'off', // Desativa a verificação de prop-types, caso você não use
    quotes: ['error', 'single'], // Força o uso de aspas simples
    'no-console': ['warn'], // Aviso para o uso de console.log
    'react-native/no-unused-styles': 'warn', // Alerta sobre estilos não utilizados no React Native
    'react-native/split-platform-components': 'warn', // Alerta sobre componentes específicos para plataformas
    'import/no-unresolved': 'error', // Garante que imports resolvam corretamente
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
      },
    ],
    'jsx-a11y/anchor-is-valid': 'off', // Desativa uma regra do a11y para React Native
  },
  settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React
    },
  },
};
