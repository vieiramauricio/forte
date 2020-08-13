import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalAuth from './context/Auth';

ReactDOM.render(
  <React.StrictMode>
    <GlobalAuth>
      <App />
    </GlobalAuth>
  </React.StrictMode>,
  document.getElementById('root'),
);
