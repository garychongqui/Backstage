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
      <div className="container">
        <h1>Dashboard</h1>

        <br></br>
        <CreateEvent show={this.state.show} handleClose={this.hideModal} />
        <button className="btn-1" type="button" onClick={this.showModal}>
          Create Event
        </button>

        <br />
        <br />

        <BrowserRouter>
          <div className="dash-nav-area">
            <nav className="dash-nav">
              <Link to="/dashboard/events" className="dash-nav-1">
                My Events
              </Link>
              <br />
              <Link to="/dashboard/stages" className="dash-nav-btn">
                My Stages
              </Link>
              <br />
              <Link to="/dashboard/equipment" className="dash-nav-btn">
                My Equipment
              </Link>
              <br />
              <br />
            </nav>

            <Switch>
              <Route exact path="/dashboard/events" component={MyEvents} />
              <Route
                exact
                path="/dashboard/stages/new"
                component={NewStage} //should this be somewhere else?
              />
              <Route
                exact
                path="/dashboard/stages/:id"
                component={StageDetails}
              />
              <Route exact path="/dashboard/stages" component={MyStages} />
              <Route
                exact
                path="/dashboard/equipment"
                component={MyEquipment}
              />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default Dashboard;
