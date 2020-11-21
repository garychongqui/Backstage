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
import CreateEvent from '../../components/dashboardTabs/createEvent/createEvent';

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
          <Link to="/my-packages">My Packages</Link>
          <br />
          <Link to="/new-package">New Package</Link>
          <br />
          <Link to="/my-events">My Events</Link>
          <br />
          <br />
          <Switch>
            <Route exact path="/my-packages" component={MyPackages} />
            <Route exact path="/new-package" component={NewPackage} />
            <Route exact path="/my-events" component={MyEvents} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Dashboard;
