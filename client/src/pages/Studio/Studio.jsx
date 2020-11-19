import React from 'react';
import Draggable from 'react-draggable';
import './studio.css';

// https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/

class Studio extends React.Component {
  state = {
    tasks: [
      {
        name: 'Guitar',
        category: 'offStage',
        bgcolor: 'yellow'
      },
      { name: 'Monitor', category: 'offStage', bgcolor: 'pink' }
    ]
  };

  render() {
    return (
      <div className="instruments">
        <Draggable>
          <h1>Guitar</h1>
          {/* <img src="https://www.flaticon.com/svg/static/icons/svg/3011/3011104.svg" /> */}
        </Draggable>

        <Draggable>
          <h1>Monitor</h1>
        </Draggable>
      </div>
    );
  }
}

{
  /* <div className="red-box"></div>
          <div className="blue-box-container"> */
}
export default Studio;
