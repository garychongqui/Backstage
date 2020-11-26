import React, { useState, useEffect } from 'react';
import './artistCollab.css';
import Stage from './Stage';
import Draggable from 'react-draggable';
import equipLists, { lastIndexOf } from '../../helper';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const categoryList = [
  'Cables',
  'DJ Equipment',
  'Microphones',
  'Speakers',
  'Stands'
];

const ArtistCollab = () => {
  const [activeCategory, setActiveCategory] = useState(equipLists[0]);
  const [iconsForStage, setIconsForStage] = useState([]);
  const [eventData, setEventData] = useState(null);

  const history = useHistory();
  const getEventInfo = async () => {
    await axios
      .get(`/artist/${history.location.pathname.slice(8)}`)
      .then((results) => setEventData(results.data));
  };

  useEffect(() => {
    getEventInfo();
  }, [iconsForStage]);

  const handleCategorySelect = (event) => {
    setActiveCategory(equipLists[event.target.value]);
  };

  const handleIconClick = (event) => {
    setIconsForStage(iconsForStage.concat(event.target.value));
    console.log(iconsForStage);
  };
  return (
    <>
      <h1>This is the artist collab page</h1>

      <div className="info-header">
        <h2>{eventData?.eventTitle}</h2>
        <h2>{eventData?.eventDate}</h2>
      </div>
      <div className="artist-collab-container">
        <div className="icon-selection-container">
          <select onChange={handleCategorySelect}>
            {categoryList.map((category, index) => {
              return <option value={index}>{category}</option>;
            })}
          </select>
          {activeCategory.map((object, index) => (
            <button
              className="icon-to-select"
              key={index}
              value={object.name}
              onClick={(event) => handleIconClick(event)}
              style={{
                backgroundImage: `url(${object.iconURL})`,
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              {object.name}
            </button>
          ))}

          <div className="icon-to-select"></div>
        </div>
        <div className="stage-and-characteristics-container">
          <Stage iconsForStage={iconsForStage} />
          <div className="stage-characteristics">
            <h2>
              <strong>Stage Characteristics </strong>
            </h2>
            <span>
              Stage Dimensions: {eventData?.selectedPackage.width} x
              {eventData?.selectedPackage.depth}
            </span>
            <br />
            <span>
              Comments from venue: {eventData?.selectedPackage.anythingElse}
            </span>
          </div>
        </div>
        <div className="venue-equip-container">
          <h2>Equip offered by venue:</h2>
        </div>
      </div>
    </>
  );
};

export default ArtistCollab;
