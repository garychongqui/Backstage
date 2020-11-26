import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from '../components/Login';
import Studio from './collaboration/Studio';
import test from '../components/test';
import ArtistCollab from './collaboration/ArtistCollab';

const Home = () => {
  return (
    <div>
      <h1>This is the Home Page</h1>
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
          <Route exact path="/studio" component={Studio} />
          <Route exact path="/test" component={test} />
        </Switch>

        <Link className="mt-4" to="/studio">
          Drag n Drop
        </Link>
      </BrowserRouter>
    </div>
  );
};

export default Home;
