import React from 'react';
import Draggable from 'react-draggable';
import './studio.css';
import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';

const Studio = () => {
  const generatePdf = () => {
    const newPlot = document.getElementById('stagePlot');

    html2canvas(newPlot).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'in', [10, 9]);
      // var width = 152;
      // var height = 111;
      // pdf.setFontSize(40);
      // pdf.text("hey guyz", 35, 25);
      pdf.addImage(imgData, 'png', 0, 0);
      pdf.save('test.pdf');
      // Pdf.addImage("../musicIcons/acoustic-guitar.svg", "SVG", 15, 40, 180, 180);
    });
  };
  return (
    <div className="container">
      <div className="stageArea" id="stageArea">
        <div className="stagePlot" id="stagePlot">
          <h1>Set your stage!</h1>

          <div className="instruments">
            <div className="acoustic-guitar">
              <Draggable>
                <section>
                  <img
                    src="../musicIcons/acoustic-guitar.png"
                    alt="acoustic guitar icon"
                  />
                </section>
              </Draggable>
            </div>
            <div className="microphone">
              <Draggable>
                <section>
                  <img
                    src="../musicIcons/microphone-with-wire.png"
                    alt="microphone icon"
                  />
                </section>
              </Draggable>
            </div>
            <div className="dj">
              <Draggable>
                <section>
                  <img
                    src="../musicIcons/dj-with-headphones.png"
                    alt="dj icon"
                  />
                </section>
              </Draggable>
            </div>
            <div className="drum-kit">
              <Draggable>
                <section>
                  <img src="../musicIcons/drum-kit.png" alt="drum kit icon" />
                </section>
              </Draggable>
            </div>
          </div>
        </div>
        <button className="button" onClick={generatePdf}>
          Download PDF
        </button>
      </div>
    </div>
  );
};
export default Studio;
