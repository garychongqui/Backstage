import React from 'react';
import { AppContextProvider } from './context/AppContext';
import ContextDemo from './components/ContextDemo';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';

import Home from './pages/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Studio from './pages/Studio/Studio';
import test from './components/test';

//
import ArtistCollab from './pages/artistCollab/ArtistCollab';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Login />
        <br />
        <Link to="/dashboard">Click here for dashboard</Link>
        <br />
        <Link to="/events/artist">
          Click here for artist collaboration page
        </Link>
        <br />
        <br />
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/events/artist">
          <ArtistCollab />
        </Route>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/" component={Home} />
          <Route exact path="/studio" component={Studio} />
          <Route exact path="/test" component={test} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
