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
// import Studio from './collaboration/Studio';
import test from './components/test';
import ArtistCollab from './pages/collaboration/ArtistCollab';
import MainNav from './components/mainNav/MainNav';

function App() {
  return (
    <AppContextProvider>
      <MainNav />
      <BrowserRouter>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/artist" component={ArtistCollab} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;
