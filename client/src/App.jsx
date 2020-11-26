import React from 'react';
import { AppContextProvider } from './context/AppContext';
import Home from './pages/Home';


function App() {
  return (
    <AppContextProvider>

      <Home />

    </AppContextProvider>
  );
}
export default App;
