import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDH3I58LzayZUaQ6_hJBWZsJEWCh0aKT1E",
  authDomain: "shoppingcartreactjs.firebaseapp.com",
  databaseURL: "https://shoppingcartreactjs.firebaseio.com",
  projectId: "shoppingcartreactjs",
  storageBucket: "shoppingcartreactjs.appspot.com",
  messagingSenderId: "842927852070",
  appId: "1:842927852070:web:c346198ad356754fdff4e7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
