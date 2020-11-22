import React, { useEffect, useState } from 'react';
import './myPackages.css';
import '../../../App.css';
import axios from 'axios';

const MyPackages = () => {
  const [packages, setPackages] = useState([]);

  const getPackages = async () => {
    try {
      let res = await axios({
        method: 'GET',
        url: `/api/packages`,
        withCredentials: true
      });
      setPackages(res.data);
      console.log(packages);
    } catch (error) {
      console.log(error);
    }
  };

  // getPackages();
  // commented out for now; why does the 'try' statement execute infinitely when state is changed?

  return (
    <div>
      <h1>My Packages</h1>
      <button>Add Package</button>
      <h2>Package 1</h2>
      <div className="saved-stage bg-blue-200">
        <p>Description goes here</p>
        <img
          src="https://source.unsplash.com/random/120x100"
          alt="random-image"
        />
        <button>Edit </button>
        <button>Delete</button>
        <button>See more</button>
      </div>
      <h2>Package 2</h2>
      <div className="saved-stage">
        <p>Description goes here</p>
        <img
          src="https://source.unsplash.com/random/120x100"
          alt="random-image"
        />
        <button>Edit</button>
        <button>Delete</button>
        <button>See more</button>
      </div>
    </div>
  );
};

export default MyPackages;
