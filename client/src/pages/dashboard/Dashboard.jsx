import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory
} from 'react-router-dom';
import MyPackages from '../../components/dashboardTabs/myPackages/myPackages';
import NewPackage from '../../components/dashboardTabs/newPackage/NewPackage';
import MyEvents from '../../components/dashboardTabs/myEvents/myEventsTab/MyEvents';

const Home = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button>Create Event</button>
      <br></br>
      <br></br>
      <BrowserRouter>
        <Link to="/my-packages">My Packages</Link>
        <br></br>
        <Link to="/new-package">New Package</Link>
        <br></br>
        <Link to="/my-events">My Events</Link>
        <Switch>
          <Route exact path="/my=packages" component={MyPackages} />-
          <Route exact path="/new-package" component={NewPackage} />
          <Route exact path="/my-events" component={MyEvents} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Home;
