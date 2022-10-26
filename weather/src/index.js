import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename = {process.env.PUBLIC_URL}>
    <App />
  
  </BrowserRouter>
);



//터미널에 npm install react-router-dom 설치
// package.json에 라우터 설치 확인
//index.js에 import {BrowserRouter} 
// render 밑에 <browswerRouter> 연결