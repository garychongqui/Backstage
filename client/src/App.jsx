import React from 'react';
import { AppContextProvider } from './context/AppContext';
import Home from './pages/Home';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useHistory
} from 'react-router-dom';
import MainNav from './components/mainNav/MainNav';
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ArtistCollab from './pages/collaboration/ArtistCollab';
import MyEvents from './components/events/MyEvents';
import MyStages from './components/stages/MyStages';
import MyEquipment from './components/equipment/MyEquipment';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/dashboard/events">
            <Dashboard />
          </Route>
          <Route exact path="/dashboard/stages">
            <Dashboard />
          </Route>
          <Route exact path="/dashboard/equipment">
            <Dashboard />
          </Route>
          <Route path="/artist" component={ArtistCollab} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;
