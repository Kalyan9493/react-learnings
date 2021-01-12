import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import EventBind from './components/EventBind';
import Greet from './components/Greet'
import Parent from './components/Parent'
import COnditional from './components/Conditional'
import Conditional from './components/Conditional';

ReactDOM.render(
  <React.StrictMode>
    <Conditional />
    {/* <Parent /> */}
    {/* <App /> */}
    {/* <EventBind /> */}
    {/* <Greet name="kalyan" age="20"></Greet>
    <Greet name="kalyan reddy" age="23"></Greet> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
