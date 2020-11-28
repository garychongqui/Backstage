import React, { useState, useEffect } from 'react';
import './artistCollab.css';
import Stage from './Stage';
import Draggable from 'react-draggable';
import equipLists, { lastIndexOf } from '../../artistEquip';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const categoryList = [
  'Guitars',
  'Keys',
  'Percussion',
  'Wind',
  'Mixers',
  'Mics & Cables',
  'Speakers',
  'Other'
];

const ArtistCollab = () => {
  const [activeCategory, setActiveCategory] = useState(equipLists[0]);
  const [iconsForStage, setIconsForStage] = useState([]);
  const [eventData, setEventData] = useState(null);
  const [equipData, setEquipData] = useState([]);
  const history = useHistory();

  const getEquipInfo = async () => {
    await axios
      .get('/api/equipment')
      .then((results) => setEquipData(results.data));
  };

  const getEventInfo = async () => {
    await axios
      .get(`/artist/${history.location.pathname.slice(8)}`)
      .then((results) => setEventData(results.data));
  };

  useEffect(() => {
    getEventInfo();
    getEquipInfo();
  }, [iconsForStage]);

  const handleCategorySelect = (event) => {
    setActiveCategory(equipLists[event.target.value]);
  };

  const handleIconClick = (event) => {
    setIconsForStage(iconsForStage.concat(event.target.value));
    console.log(iconsForStage);
  };

  // const iconRatio = (eventData?.width * eventData?.depth) / 120;

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
                fontWeight: 'bold',
                outline: 'none'
              }}
            ></button>
          ))}

          <div className="icon-to-select"></div>
        </div>
        <div className="stage-and-characteristics-container">
          <Stage iconsForStage={iconsForStage} />
          <div className="stage-characteristics">
            <h2>
              <strong>Stage Characteristics</strong>
            </h2>
            <span>
              Stage Dimensions: {eventData?.selectedPackage.width} x
              {eventData?.selectedPackage.depth} ft.
            </span>
            <br />
            <span>
              Comments from venue: {eventData?.selectedPackage.comments}
            </span>
          </div>
        </div>
        <div className="venue-equip-container">
          <h2>Equip offered by venue:</h2>
          {equipData?.map((item) => {
            return (
              <div>
                <span>{item.name}</span>
                <span>{item.quantity}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ArtistCollab;
