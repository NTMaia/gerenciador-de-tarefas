import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './src/rota';



export default function App() {
  return (
    <NavigationContainer>
      <Rotas />
    </NavigationContainer>
  );
}