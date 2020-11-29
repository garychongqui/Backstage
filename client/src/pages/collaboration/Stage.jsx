import React from 'react';
import Draggable from 'react-draggable';
import equipLists from '../../artistEquip';
import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';
import autotable from 'jspdf-autotable';

class Stage extends React.Component {
  constructor(props) {
    super(props);
  }

  rows = this.props.eventData;

  generatePdf = () => {
    const newPlot = document.getElementById('theStage');
    html2canvas(newPlot).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.text(`${this.props.eventData?.eventDate}`, 20, 20).setFontSize(32);
      pdf.text(`${this.props.eventData?.eventTitle}`, 20, 32).setFontSize(16);
      pdf.addImage(imgData, 'PNG', 15, 55, 120, 110);
      pdf.text(
        this.props.items?.map((item) => item),
        20,
        140
      );
      // pdf.text(['Item'].concat(this.props.items?.map((item) => item)), 20, 180);
      pdf.text(
        this.props.descriptions?.map((item) => item),
        80,
        140
      );
      // pdf.text(
      //   this.props.quantities?.map((item) => item),
      //   90,
      //   180
      // );
      pdf.save(
        `${this.props.eventData?.eventTitle} / ${this.props.eventData?.eventDate}`
      );
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
      <div class="w-3/4 relative">
        <div
          className="the-stage w-full  rounded-md  flex flex-wrap items-start"
          id="theStage"
          style={{
            height: '36.25rem',
            backgroundColor: '#FFF7F1',
            border: '4px solid #A6271F',
            marginBottom: '0.25rem',
            top: '0'
          }}
        >
          {this.props.iconsForStage?.map((icon) => {
            return (
              <Draggable bounds="parent" {...dragHandlers}>
                <div
                  className="icon-on-stage hover: cursor-pointer"
                  style={{
                    backgroundImage: `url("${icon}")`,
                    height: `7.5rem`,
                    width: `7.5rem`,
                    backgroundSize: '100% 100%'
                  }}
                ></div>
              </Draggable>
            );
          })}
        </div>
        <button
          className="btn-3"
          onClick={this.generatePdf}
          stlye={{ position: 'absolute', top: '40rem' }}
        >
          Download PDF
        </button>
      </div>
    );
  }
}
export default Stage;
