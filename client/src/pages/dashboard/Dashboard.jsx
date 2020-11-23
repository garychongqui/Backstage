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
import CreateEvent from '../../components/createEvent/CreateEvent';
import PackageDetails from '../../components/packageDetails/PackageDetails';

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
          <Link to="/packages">My Packages</Link>
          <br />
          <Link to="/packages/new">New Package</Link>
          <br />
          <Link to="/events">My Events</Link>
          <br />
          <br />
          <Switch>
            <Route exact path="/packages" component={MyPackages} />
            <Route exact path="/packages/new" component={NewPackage} />
            <Route exact path="/events" component={MyEvents} />
            <Route exact path="/packages/:id" component={PackageDetails} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Dashboard;
