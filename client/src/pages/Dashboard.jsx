import React, { useContext } from 'react';

import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import MyStages from '../components/stages/MyStages';
import NewStage from '../components/stages/NewStage';
import MyEvents from '../components/events/MyEvents';
import CreateEvent from '../components/events/createEvent/CreateEvent';
import MyEquipment from '../components/equipment/MyEquipment';
import StageDetails from '../components/stages/StageDetails';
import axios from 'axios';

class Dashboard extends React.Component {
  state = { show: false, image: null, preview: null };
  context = {};

  handleImageSelect = (e) => {
    this.setState({ preview: URL.createObjectURL(e.target.files[0]) });
    this.setState({ image: e.target.files[0] });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const avatar = new FormData();
    avatar.append('avatar');
    try {
      const updatedUser = await axios({
        method: 'POST',
        url: '/api/users/avatar',
        data: avatar,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      this.setState({
        currentUser: [...this.state.currentUser],
        avatar: updatedUser.data.secure_url
      });
    } catch (error) {
      console.log(error);
    }
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div className="container">
        {/* <h1>Dashboard</h1>

        <br></br>
        <CreateEvent show={this.state.show} handleClose={this.hideModal} />
        <button className="btn-1" type="button" onClick={this.showModal}>
          Create Event
        </button>

        <br /> */}
        <br />
        <div className="mt-4">
          <img
            src={
              this.state.preview
                ? this.state.preview
                : this.state.currentUser?.avatar
                ? this.currentUser.avatar
                : 'https://files.willkennedy.dev/wyncode/wyncode.png'
            }
            alt="profile-picture"
            width={250}
            height={250}
            roundedCircle
          />
        </div>
        <div className="mt-4">
          <form className="d-flex flex-column" onSubmit={this.handleSubmit}>
            <input
              type="file"
              accept="image/*"
              onChange={this.handleImageSelect}
            />
            <button type="submit" size="sm" className="mt-4">
              Save Image
            </button>
          </form>
        </div>
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
              <Route exact path="/dashboard/stages/new" component={NewStage} />
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
