import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #FBF9EE;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>Hello World!</TodoTemplate>
    </>
  );
}

export default App;