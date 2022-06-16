import React from 'react';
import ReactDOM from 'react-dom';
//Importamos nuestro diseño que sera desde el index usando tailwind
import './index.css';
import App from './App';

//Renderizamos nuestro proyecto de forma grafica
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

