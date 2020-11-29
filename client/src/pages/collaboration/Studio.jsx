import React from 'react';
import Draggable from 'react-draggable';
import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';
import './draggable.css';

const items = ['Mic Stand', 'Monitor', 'XLR Cable'];
const desc = ['Is 72 inches high', 'has one bad speaker', 'worn'];
const quant = ['2', '4', '1'];

class Studio extends React.Component {
  generatePdf = () => {
    const newPlot = document.getElementById('stagePlot');
    html2canvas(newPlot).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'in', [11.5, 8]);
      // var width = 152;
      // var height = 111;
      // pdf.setFontSize(40);
      // pdf.text("hey guyz", 35, 25);
      pdf.addImage(imgData, 'png', 0.5, 0.5, 7, 4);
      pdf.text(items, 1, 7.5);
      pdf.text(desc, 2.5, 7.5);
      pdf.text(quant, 4.5, 7.5);
      pdf.save('test.pdf');
      // Pdf.addImage("../musicIcons/acoustic-guitar.svg", "SVG", 15, 40, 180, 180);
    });
  };

  render() {
    return (
      <div className="container">
        <div className="stageArea" id="stageArea">
          <h1>Set your stage!</h1>{' '}
          <div className="stagePlot" id="stagePlot">
            <div className="instruments">
              <div className="acoustic-guitar h-20 w-20">
                <section>
                  <Draggable>
                    <img
                      src="../musicIcons/acoustic-guitar.png"
                      alt="acoustic guitar icon"
                    />
                  </Draggable>
                </section>
              </div>
              <div className="dj h-20 w-20">
                <Draggable>
                  <section>
                    <img
                      src="../musicIcons/dj-with-headphones.png"
                      alt="dj icon"
                    />
                  </section>
                </Draggable>
              </div>
              <div className="drum-kit h-20 w-20">
                <Draggable>
                  <section>
                    <img src="../musicIcons/drum-kit.png" alt="drum kit icon" />
                  </section>
                </Draggable>
              </div>
            </div>
          </div>
          <button className="button" onClick={this.generatePdf}>
            Download PDF
          </button>
        </div>
        //{' '}
      </div>
    );
  }
}
export default Studio;
