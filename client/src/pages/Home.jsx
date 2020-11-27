import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>This is the Home Page (Landing Page)</h1>
      <br />
      <br />
      <Link to="/login">Click here for login page</Link>
      <br />
      <Link to="/signup">Click here for signup page</Link>
    </div>
  );
};
export default Home;
