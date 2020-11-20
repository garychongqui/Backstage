import React from 'react';
import Draggable from 'react-draggable';
import './studio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGuitar,
  faMicrophone,
  faMicrophoneAlt,
  faMicrophoneAltSlash
} from '@fortawesome/free-solid-svg-icons';
import { faSpeakerDeck } from '@fortawesome/free-brands-svg-icons';

// https://www.freecodecamp.org/news/reactjs-implement-drag-and-drop-feature-without-using-external-libraries-ad8994429f1a/

const guitar = <FontAwesomeIcon icon={faGuitar} />;
const speakerDeck = <FontAwesomeIcon icon={faSpeakerDeck} />;
const microphone = <FontAwesomeIcon icon={faMicrophoneAlt} />;

class Studio extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="instruments">
          <div className="guitar">
            <Draggable>
              <section>
                <FontAwesomeIcon icon={faGuitar} size="5x" />
              </section>
            </Draggable>
          </div>

          <div className="speakerDeck">
            <Draggable>
              <section>
                <FontAwesomeIcon icon={faSpeakerDeck} size="5x" />
              </section>
            </Draggable>
          </div>

          <div className="microphone">
            <Draggable>
              <section>
                <FontAwesomeIcon icon={faMicrophoneAlt} size="5x" />
              </section>
            </Draggable>
          </div>
        </div>
      </div>
    );
  }
}

{
  /* <div className="red-box"></div>
          <div className="blue-box-container"> */
}
export default Studio;
