import React, { useState, useEffect } from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import axios from 'axios';
import { saveAs } from 'file-saver';

import Dashboard from './pages/dashboard/Dashboard';

import './App.css';

const App = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default App;
