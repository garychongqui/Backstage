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
import Dashboard from './pages/Dashboard';
import Login from './components/Login';
// import Studio from './collaboration/Studio';
import test from './components/test';
import ArtistCollab from './pages/collaboration/ArtistCollab';
import MainNav from './components/mainNav/MainNav';
import MyEvents from './components/events/MyEvents';
import MyStages from './components/stages/MyStages';
import MyEquipment from './components/equipment/MyEquipment';

function App() {
  return (
    <AppContextProvider>
      <MainNav />
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" />
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
