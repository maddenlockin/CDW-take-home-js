import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDnjfrZ37YE5LWkE8E3yZHTF96LSLVH3wo",
  authDomain: "js-take-home.firebaseapp.com",
  projectId: "js-take-home",
  storageBucket: "js-take-home.appspot.com",
  messagingSenderId: "495525663893",
  appId: "1:495525663893:web:09f0f547ca414d69a7379c",
  measurementId: "G-NRWNTWSZR7",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

