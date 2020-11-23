import React from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import Dashboard from './pages/dashboard/Dashboard';

import Home from './pages/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Studio from './pages/Studio/Studio';

import './App.css';

function App() {
  return (
    <AppContextProvider>
      <Login />
      <br />
      <Dashboard />

      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route exact path="/studio" component={Studio} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
