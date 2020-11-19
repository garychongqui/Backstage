import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import axios from 'axios';
import { saveAs } from 'file-saver';

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

import './App.css';

const App = () => {
  const [serverMessage, setServerMessage] = useState('');

  const fetchDemoData = () => {
    fetch('/api/demo')
      .then((response) => response.json())
      .then((data) => setServerMessage(data.message));
  };

  useEffect(fetchDemoData, []);

  return (
    <AppContextProvider>
      <div id="demo">
        <h3>Hello from client/src/App.js</h3>
        <ContextDemo />
        <h3>{serverMessage}</h3>
      </div>
    </AppContextProvider>
  );
};

export default App;
