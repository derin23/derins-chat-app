import React from 'react';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyDDL1iLEzxv3AzstL-h2OSTDeFFVAiQm-w",
  authDomain: "derins-chat-app.firebaseapp.com",
  projectId: "derins-chat-app",
  storageBucket: "derins-chat-app.appspot.com",
  messagingSenderId: "460331765606",
  appId: "1:460331765606:web:fe871474d220ca0b3242a7"
})

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
