import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background: #FBF9EE;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>Hello World!</div>
    </>
  );
}

export default App;