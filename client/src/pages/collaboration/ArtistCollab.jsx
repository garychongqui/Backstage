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
  const [iconsForStage, setIconsForStage] = useState(['d', 'the']);
  const [eventData, setEventData] = useState(null);

  const history = useHistory();
  const getEventInfo = async () => {
    await axios
      .get(`/artist/${history.location.pathname.slice(8)}`)
      .then((results) => setEventData(results.data));
  };

  useEffect(() => {
    getEventInfo();
  }, []);

  const handleCategorySelect = (event) => {
    setActiveCategory(equipLists[event.target.value]);
  };

  const handleIconClick = (event) => {
    setIconsForStage(iconsForStage.concat(event.target.value));
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
                backgroundImage: `url(${object.iconURL})`
              }}
            />
          ))}

          <div className="icon-to-select"></div>
        </div>
        <Stage iconsForStage={['hello', 'wonton']} />
      </div>
    </>
  );
};

export default ArtistCollab;
