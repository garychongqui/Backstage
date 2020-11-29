import React from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MyStages from '../components/stages/MyStages';
import NewStage from '../components/stages/NewStage';
import MyEvents from '../components/events/MyEvents';
import CreateEvent from '../components/events/createEvent/CreateEvent';
import MyEquipment from '../components/equipment/MyEquipment';
import StageDetails from '../components/stages/StageDetails';
import AddImage from '../components/AddImage';
import axios from 'axios';

class Dashboard extends React.Component {
  state = { show: false, image: null, preview: null };
  // context = { currentUser: null };

  // async componentDidMount() {
  //   await axios
  //     .get('/api/users/me')
  //     .then((response) => this.setState({ currentUser: response.user }));
  // }

  // handleImageSelect = (e) => {
  //   this.setState({ preview: URL.createObjectURL(e.target.files[0]) });
  //   this.setState({ image: e.target.files[0] });
  // };

  // handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const avatar = new FormData();
  //   avatar.append('avatar', this.state.image, this.state.image.name);
  //   try {
  //     await axios({
  //       method: 'POST',
  //       url: '/api/users/avatar',
  //       data: avatar,
  //       headers: {
  //         'Content-Type': 'multipart/form-data'
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <div className="container">
          <br />
        </div>
        <div
          className="header-container bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('dashboard-images/jennyblock2.png')" }}
        >
          <AddImage />
          <div className="profile-picture"></div>

          {/*  <div className="container">
        <br />
        <div className="mt-4">
         */}
        </div>

        <CreateEvent show={this.state.show} handleClose={this.hideModal} />
        <button className="btn-1" type="button" onClick={this.showModal}>
          Create Event
        </button>
        <BrowserRouter>
          <div className="dash-nav-area">
            <nav className="dash-nav">
              <Link to="/dashboard/events" className="dash-nav-btn">
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
