// App.tsx (Corrigido)
import React from 'react';

// 1. Corrija o caminho do import para apontar para o arquivo principal de rotas
// 2. Use a importação nomeada com chaves { }, pois mudamos para `export function Routes()`
import { Routes } from './src/routes/tab.routes'; // O React Native resolve './src/routes/index.tsx' automaticamente

export default function App() {
  // Agora o componente <Routes /> será encontrado e renderizado corretamente
  return <Routes />;
}
