import React, { useRef } from 'react';
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
  state = { show: false, image: null, preview: null, currentTab: 'events' };

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
      <div class="w-full">
        <div
          className="header-container bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: "url('../dashboard-images/jennyblock2.png')",
            height: '36vh'
          }}
        >
          <div className="profile-picture">
            <div className="mt-4">
              <form className="d-flex flex-column" onSubmit={this.handleSubmit}>
                <label for="image">
                  <input
                    type="file"
                    name="image"
                    id="image"
                    style={{ display: 'none' }}
                    onChange={this.handleImageSelect}
                  />
                  <img
                    class={!this.state.show ? 'block' : 'hidden'}
                    src={
                      this.state.preview
                        ? this.state.preview
                        : this.state.currentUser?.avatar
                        ? this.currentUser.avatar
                        : 'https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1950&q=80'
                    }
                    width={250}
                    height={250}
                    roundedCircle
                    style={{
                      position: 'absolute',
                      top: '30.5vh',
                      left: '3rem',
                      height: '18rem',
                      width: '18rem',
                      zIndex: '99'
                    }}
                  />
                </label>
                <button
                  type="submit"
                  size="sm"
                  className="mt-4"
                  style={{ color: 'white', zIndex: '99', fontSize: '2rem' }}
                >
                  Save Image
                </button>
              </form>
            </div>
          </div>

          {/*  <div className="container">
        <br />
        <div className="mt-4">
         */}

          <CreateEvent show={this.state.show} handleClose={this.hideModal} />
          <button
            type="button"
            onClick={this.showModal}
            style={{
              position: 'relative',
              left: '54vw',
              margin: '0px',
              top: '27vh',
              height: '5rem',
              width: '15.5rem'
            }}
            class={
              !this.state.show
                ? 'block btn-1 text-2xl red-button'
                : 'hidden btn-1 text-2xl red-button'
            }
          >
            Create Event
          </button>
        </div>
        <BrowserRouter>
          <div className="bg-gray-dark w-full">
            <div
              className="nav-div"
              style={{
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                position: 'relative',
                left: '10rem',
                color: '#fff7f1',
                top: '-6rem'
              }}
            >
              <nav
                class={!this.state.show ? 'flex' : 'hidden'}
                className="flex"
                style={{
                  width: '80%',
                  height: '4rem',
                  marginTop: '.5rem'
                }}
              >
                <Link to="/dashboard/events" class="w-1/3 react-link">
                  <h2
                    onClick={() => this.setState({ currentTab: 'events' })}
                    class={`h-full font-medium text-2xl hover:text-red text-center flex items-center justify-center ${
                      this.state.currentTab === 'events' ? 'selected-tab' : ' '
                    }`}
                    style={{
                      margin: '0px',
                      color: '#fff7f1'
                    }}
                  >
                    My Events
                  </h2>
                </Link>
                <br />
                <Link to="/dashboard/stages" class="w-1/3 react-link">
                  <h2
                    onClick={() => this.setState({ currentTab: 'stages' })}
                    class={`h-full font-medium text-2xl hover:text-red text-center flex items-center justify-center ${
                      this.state.currentTab === 'stages' ? 'selected-tab' : ' '
                    }`}
                    style={{
                      margin: '0px',
                      color: '#fff7f1'
                    }}
                  >
                    My Stages
                  </h2>
                </Link>
                <br />
                <Link to="/dashboard/equipment" className="w-1/3 react-link">
                  <h2
                    onClick={() => this.setState({ currentTab: 'equip' })}
                    class={`h-full font-medium text-2xl text-center flex items-center justify-center ${
                      this.state.currentTab === 'equip' ? 'selected-tab' : ' '
                    }`}
                    style={{
                      margin: '0px',
                      color: '#fff7f1'
                    }}
                  >
                    My Equipment{' '}
                  </h2>
                </Link>
                <br />
                <br />
              </nav>
            </div>

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
