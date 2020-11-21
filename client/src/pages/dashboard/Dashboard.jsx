import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory
} from 'react-router-dom';
import MyEquip from '../../components/dashboardTabs/myEquip/MyEquip';
import MyStages from '../../components/dashboardTabs/myStages/MyStages';
import NewStage from '../../components/dashboardTabs/newStage/NewStage';
import MyEvents from '../../components/dashboardTabs/myEvents/myEventsTab/MyEvents';

const Home = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <button>Create Event</button>
      <br></br>
      <br></br>
      <BrowserRouter>
        <Link to="/equipment">My Equipment</Link>
        <br></br>
        <Link to="/stages">Stages</Link>
        <br></br>
        <Link to="/new-stage">New Stage</Link>
        <br></br>
        <Link to="/my-events">My Events</Link>
        <Switch>
          <Route exact path="/equipment" component={MyEquip} />
          <Route exact path="/stages" component={MyStages} />
          <Route exact path="/new-stage" component={NewStage} />
          <Route exact path="/my-events" component={MyEvents} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Home;
