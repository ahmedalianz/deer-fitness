import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/js/bootstrap.bundle'
import "swiper/css";
import "swiper/css/effect-creative"
import "swiper/css/effect-cards"
import "swiper/css/navigation"
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'

ReactDOM.render(
    <>
      <App />
      <ToastContainer/>
    </>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
