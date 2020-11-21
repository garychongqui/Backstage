import React from 'react';
import './myPackages.css';
import '../../../App.css';

const myPackages = () => {
  return (
    <div>
      <h1>My Stages</h1>
      <button>Add Stage</button>
      <h2>Stage 1</h2>
      <div className="saved-stage bg-blue-700">
        <p>Description goes here</p>
        <img
          src="https://source.unsplash.com/random/120x100"
          alt="random-image"
        />
        <button>Edit</button>
        <button>Delete</button>
        <button>See more</button>
      </div>
      <h2>Stage 2</h2>
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

export default myPackages;
