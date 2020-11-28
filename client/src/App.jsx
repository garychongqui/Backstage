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
// import Studio from './collaboration/Studio';
import test from './components/test';
import ArtistCollab from './pages/collaboration/ArtistCollab';

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <MainNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route path="/artist" component={ArtistCollab} />
        </Switch>
      </BrowserRouter>
    </AppContextProvider>
  );
}
export default App;
