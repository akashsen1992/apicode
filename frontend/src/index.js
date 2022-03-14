import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


import Footer from './Component/Common/Footer';

ReactDOM.render(
  <React.StrictMode>
     <App />
    <Footer /> 
  </React.StrictMode>,
  document.getElementById('root')
);


