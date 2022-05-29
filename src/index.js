import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDnjfrZ37YE5LWkE8E3yZHTF96LSLVH3wo",
  authDomain: "js-take-home.firebaseapp.com",
  projectId: "js-take-home",
  storageBucket: "js-take-home.appspot.com",
  messagingSenderId: "495525663893",
  appId: "1:495525663893:web:09f0f547ca414d69a7379c",
  measurementId: "G-NRWNTWSZR7",
};
// const app = 
initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

