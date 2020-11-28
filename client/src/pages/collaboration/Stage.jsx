import React from 'react';
import Draggable from 'react-draggable';
import equipLists from '../../artistEquip';

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
      <div
        className="the-stage border border-gray-200 shadow-lg w-3/4 rounded-md relative flex flex-wrap"
        style={{
          height: '32rem'
        }}
      >
        {this.props.iconsForStage?.map((icon) => {
          return (
            <Draggable bounds="parent" {...dragHandlers}>
              <div
                className="icon-on-stage"
                style={{
                  backgroundImage: `url("${icon}")`,
                  height: `5.5rem`,
                  width: `5.5rem`,
                  backgroundSize: '100% 100%'
                }}
              ></div>
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
