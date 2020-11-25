import React from 'react';
import Draggable from 'react-draggable';
import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';
import './draggable.css';

class Studio extends React.Component {
  generatePdf = () => {
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

  render() {
    return (
      <Draggable>
        <div className="draggable-div"></div>
      </Draggable>

      // <div className="container">
      //   <div className="stageArea" id="stageArea">
      //     <div className="stagePlot" id="stagePlot">
      //       <h1>Set your stage!</h1>

      //       <div className="instruments">
      //         <div className="acoustic-guitar h-20 w-20">
      //           <section>
      //             <Draggable>
      //               <img
      //                 src="../musicIcons/acoustic-guitar.png"
      //                 alt="acoustic guitar icon"
      //               />
      //             </Draggable>
      //           </section>
      //         </div>
      //         <div className="dj h-20 w-20">
      //           <Draggable>
      //             <section>
      //               <img
      //                 src="../musicIcons/dj-with-headphones.png"
      //                 alt="dj icon"
      //               />
      //             </section>
      //           </Draggable>
      //         </div>
      //         <div className="drum-kit h-20 w-20">
      //           <Draggable>
      //             <section>
      //               <img src="../musicIcons/drum-kit.png" alt="drum kit icon" />
      //             </section>
      //           </Draggable>
      //         </div>
      //       </div>
      //     </div>
      //     <button className="button" onClick={this.generatePdf}>
      //       Download PDF
      //     </button>
      //   </div>
      // </div>
    );
  }
}
export default Studio;
