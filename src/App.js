import React from 'react';
import Header from './components/Header';
import logo from './logo.svg';

function App() {
  return (
    <Header>
      <img src={logo} alt="facebookLogo" />
    </Header>
  );
}

export default App;
