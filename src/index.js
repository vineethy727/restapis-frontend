import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Restapi1 from "./components/Restapi1";
//import "../node_modules/axios/dist/axios.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Restapi2 from './components/Restapi2';
import Restapi3 from './components/Restapi3';
import Restapi4 from './components/Restapi4';
import Restapi5 from './components/Restapi5';
import Restapi6 from './components/Restapi6';
import Postapi from './components/Postapi';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Restapi2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
