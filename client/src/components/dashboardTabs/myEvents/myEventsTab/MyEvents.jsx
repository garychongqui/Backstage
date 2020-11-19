import React from 'react';
import './myEvents.css';

const MyEvents = () => {
  return (
    <div>
      <h1>My Events Tab</h1>
      <div className="existing-event">
        <h3>Event 1</h3>
        <h4>December 10</h4>
        <p>Status: Seen by Artist</p>
        <button>See more</button>
      </div>
      <div className="existing-event">
        <h3>Event 2</h3>
        <h4>December 13</h4>
        <p>Status: Completed by Artist</p>
        <button>See more</button>
      </div>
    </div>
  );
};

export default MyEvents;
