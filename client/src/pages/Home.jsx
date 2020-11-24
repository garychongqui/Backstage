import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';

import Studio from '../pages/Studio/Studio';
import ArtistCollab from '../pages/artistCollab/ArtistCollab';

const Home = () => {
  return (
    <div>
      <BrowserRouter>
        <h1>This is the Home Page</h1>
        <br />
        <Link to="/dashboard">Click here for dashboard</Link>
        <br />
        <Link to="/events/artist">
          Click here for artist collaboration page
        </Link>
        <br />
        <Link className="mt-4" to="/studio">
          Drag n Drop
        </Link>
        <br />
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/events/artist">
          <ArtistCollab />
        </Route>
        {/* <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/studio" component={Studio} />
        </Switch> */}
      </BrowserRouter>
    </div>
  );
};

export default Home;
