//라이브러리에서 꺼내써요
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//↓가상 DOM을 만들어서 기존의 DOM과 계속 비교해가면서 업데이트 시킨다.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //import React from 'react'; 여기 있는 태그
  <React.StrictMode> 
  {/* improt Att from './App'; 여기랑 매칭*/}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
