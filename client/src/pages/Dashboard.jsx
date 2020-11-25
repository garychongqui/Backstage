import React from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MyStages from '../components/stages/MyStages';
import NewStage from '../components/stages/NewStage';
import MyEvents from '../components/events/MyEvents';
import CreateEvent from '../components/events/createEvent/CreateEvent';
import MyEquipment from '../components/equipment/MyEquipment';
import StageDetails from '../components/stages/StageDetails';

class Dashboard extends React.Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>Dashboard</h1>

        <br></br>
        <CreateEvent show={this.state.show} handleClose={this.hideModal} />
        <button type="button" onClick={this.showModal}>
          Create Event
        </button>

        <br />
        <br />

        <BrowserRouter>
          <Link to="/dashboard/equipment">My Equipment</Link>
          <br />
          <Link to="/dashboard/stages">My Stages</Link>
          <br />
          <Link to="/dashboard/events">My Events</Link>
          <br />
          <br />
          <Switch>
            <Route exact path="/dashboard/equipment" component={MyEquipment} />
            <Route exact path="/dashboard/stages" component={MyStages} />
            <Route
              exact
              path="/dashboard/stages/new"
              component={NewStage} //should this be somewhere else?
            />
            <Route exact path="/dashboard/events" component={MyEvents} />
            <Route
              exact
              path="/dashboard/stages/:id"
              component={StageDetails}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Dashboard;
