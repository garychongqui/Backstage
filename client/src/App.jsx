import React from 'react';
import { AppContextProvider } from './context/AppContext';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './components/Login';
import Studio from './pages/collaboration/Studio';
import test from './components/test';
import MainNav from './components/mainNav/MainNav';

import ArtistCollab from './pages/collaboration/ArtistCollab';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <MainNav />
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
          <Route exact path="/" component={Home} />
          <Route exact path="/studio" component={Studio} />
          <Route exact path="/test" component={test} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
