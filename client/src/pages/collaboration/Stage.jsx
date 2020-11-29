import React from 'react';
import Draggable from 'react-draggable';
import equipLists from '../../artistEquip';
import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';

class Stage extends React.Component {
  generatePdf = () => {
    const newPlot = document.getElementById('theStage');
    html2canvas(newPlot).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'in', [11.5, 8]);
      pdf.addImage(imgData, 'png', 0.5, 0.5, 7, 4);
      pdf.save('test.pdf');
    });
  };
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
        className="the-stage"
        id="theStage"
        style={{
          height: '32rem'
        }}
      >
        {this.props.iconsForStage?.map((icon) => {
          return (
            <Draggable bounds="parent" {...dragHandlers}>
              <div
                className="icon-on-stage hover: cursor-pointer"
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
        <button className="btn-3" onClick={this.generatePdf}>
          Download PDF
        </button>
      </div>
    );
  }
}
export default Stage;
