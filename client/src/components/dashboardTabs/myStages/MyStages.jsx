import React from 'react';
import './myStages.css';

const myStages = () => {
  return (
    <div>
      <h1>My Stages</h1>
      <button>Add Stage</button>
      <h3>Stage 1</h3>
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
      <h3>Stage 2</h3>
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

export default myStages;
