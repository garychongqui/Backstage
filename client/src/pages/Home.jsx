import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <Link className="mt-4" to="/studio">
        Drag n Drop
      </Link>
    </div>
  );
};

export default Home;
