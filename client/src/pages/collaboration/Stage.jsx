import React from 'react';
import Draggable from 'react-draggable';
import equipLists from '../../artistEquip';
import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';

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

  generatePdf = () => {
    const newPlot = document.getElementById('to-canvas');
    html2canvas(newPlot).then((canvas) => {
      try {
        const imgData = canvas?.toDataURL('image/png');
        const pdf = new jsPDF('p', 'in', [11.5, 8]);
        // var width = 152;
        // var height = 111;
        // pdf.setFontSize(40);
        // pdf.text("hey guyz", 35, 25);
        pdf.addImage(imgData, 'png', 0.5, 0.5, 7, 4);
        pdf.save('test.pdf');
      } catch (error) {
        alert();
      }

      // Pdf.addImage("../musicIcons/acoustic-guitar.svg", "SVG", 15, 40, 180, 180);
    });
  };

  render() {
    const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
    return (
      <div
        className="the-stage shadow-xl w-3/4 rounded-md relative flex flex-wrap items-start to-canvas"
        style={{
          height: '36.25rem',
          backgroundColor: '#FFF7F1',
          border: '4px solid #A6271F',
          marginBottom: '0.25rem'
        }}
      >
        {this.props.iconsForStage?.map((icon) => {
          return (
            <Draggable bounds="parent" {...dragHandlers}>
              <div
                className="icon-on-stage hover: cursor-pointer"
                style={{
                  backgroundImage: `url("${icon}")`,
                  height: `8.5rem`,
                  width: `8.5rem`,
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
