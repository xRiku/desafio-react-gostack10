import React from 'react';
import Header from './components/Header';
import logo from './logo.svg';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Header>
        <img src={logo} alt="facebookLogo" />
        <h1>Meu perfil</h1>
      </Header>
      <GlobalStyles />
    </>
  );
}

export default App;
