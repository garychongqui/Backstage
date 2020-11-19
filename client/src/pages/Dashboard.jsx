import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory
} from 'react-router-dom';
import MyEquip from './myEquip/MyEquip';
import MyStages from './myStages/MyStages';
import NewStage from './newStage/NewStage';

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
        <Switch>
          <Route exact path="/equipment" component={MyEquip} />
          <Route exact path="/stages" component={MyStages} />
          <Route exact path="/new-stage" component={NewStage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default Home;
