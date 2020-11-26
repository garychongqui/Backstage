import React, { useEffect, useState } from 'react';
import './stage.css';
import Draggable from 'react-draggable';

const equipArray = ['XLR Cable', 'Quarter-Inch Cable', 'Mixer', 'Headphones'];
const iconArray = [
  '../../../../icons/png/big-tambourine.png',
  'Quarter-Inch Cable',
  'Mixer',
  'Headphones'
];

class Stage extends React.Component {
  state = {
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    }
  };

  onStart = () => {
    this.setState({ activeDrags: ++this.state.activeDrags });
  };

  onStop = () => {
    this.setState({ activeDrags: --this.state.activeDrags });
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div className="the-stage">
        {this.props.iconsForStage?.map((icon) => {
          return (
            <Draggable bounds="parent" {...dragHandlers}>
              <div
                className="icon-on-stage"
                style={{
                  backgroundImage:
                    'url("https://source.unsplash.com/random/80x80")',
                  height: '4rem',
                  width: '4rem'
                }}
              >
                <span style={{ color: 'white', fontWeight: 'bold' }}>
                  {icon}
                </span>
              </div>
            </Draggable>
          );
        })}
        {/* <div className="text-xs">
        Icons made by{' '}
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>{' '}
        from{' '}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div> */}
      </div>
    );
  }
}

export default Stage;
