// App.tsx
import React from 'react';
import Routes from './src/routes/tab.routes';
import { UserProvider } from './src/contexts/UserContexts';

export default function App() {
  return (
    <UserProvider>
      <Routes />
    </UserProvider>
  );
}
