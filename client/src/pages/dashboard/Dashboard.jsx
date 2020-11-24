import React from 'react';

import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory
} from 'react-router-dom';
import MyStages from '../../components/dashboardTabs/myStages/MyStages';
import NewStage from '../../components/dashboardTabs/newStage/NewStage';
import MyEvents from '../../components/dashboardTabs/myEvents/myEventsTab/MyEvents';
import CreateEvent from '../../components/createEvent/CreateEvent';
import PackageDetails from '../../components/dashboardTabs/myStages/packageDetails/PackageDetails';
import MyEquipment from '../../components/dashboardTabs/myEquipment/MyEquipment';
import ProfileHeader from './ProfileHeader.jsx';

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
        <h1>Venue Name Goes Here</h1>

        <br></br>
        <CreateEvent show={this.state.show} handleClose={this.hideModal} />
        <button type="button" onClick={this.showModal}>
          Create Event
        </button>

        <br />
        <br />
        <BrowserRouter>
          {/* <ProfileHeader /> */}
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
              component={PackageDetails}
            />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Dashboard;
