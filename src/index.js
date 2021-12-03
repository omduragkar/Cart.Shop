import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Context from './context/Context';
ReactDOM.render(
  <React.StrictMode>
    <Context>
      <App/>
    </Context>
  </React.StrictMode>,
  document.getElementById('root')
);

