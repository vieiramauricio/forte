import React from 'react';
import GlobalStyle from './styles/global';
import Login from './pages/Login';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Login />
    </>
  );
};

export default App;
