import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import Header from './components/Header';
import PostList from './components/PostList';
import Post from './components/Post';

import logo from './logo.svg';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Header>
        <img src={logo} alt="facebookLogo" />
        <a href="/blank">
          Meu perfil
          <FaUserCircle />
        </a>
      </Header>
      <PostList />
      <GlobalStyles />
    </>
  );
}

export default App;
