import React, { useState, useEffect } from 'react';
import Stage from './Stage';
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
    <div className="artist-collab-component text-center">
      <h1 class="text-left bold text-4xl">Welcome Backstage.</h1>

      <div className="info-header">
        <h2 class="bold text-3xl mt-6">{eventData?.eventTitle}</h2>
        <h2 class="text-xl text-gray-200">{eventData?.eventDate}</h2>
      </div>
      <div className="artist-collab-container flex flex-col items-center">
        <div class="icons-and-stage flex w-5/6 items-center justify-evenly">
          <div
            className="icon-selection-container flex flex-col items-center w-56"
            style={{ minHeight: '32rem' }}
          >
            <select onChange={handleCategorySelect} class="text-lg">
              {categoryList.map((category, index) => {
                return <option value={index}>{category}</option>;
              })}
            </select>
            <div class="flex flex-wrap overflow-auto justify-center">
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
                    outline: 'none',
                    height: '4.5rem',
                    width: '4.5rem',
                    backgroundSize: '100% 100%'
                  }}
                ></button>
              ))}
            </div>
          </div>
          <Stage iconsForStage={iconsForStage} />
        </div>
        <div
          className="venue-icons-and-characteristics-container flex w-5/6 justify-between"
          style={{ height: '24rem' }}
        >
          <div className="venue-equip-container w-7/12 overflow-y-auto">
            <h2>
              <strong>Venue's Equipment</strong>
            </h2>
            {equipData?.map((item) => {
              return (
                <div class="flex justify-start">
                  <span
                    class="w-1/5"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.name}
                  </span>
                  <span class="w-2/3 m2 text-left">{item.description}</span>
                  <span
                    class="w-1/6"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.quantity}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="stage-characteristics w-5/12">
            <h2>
              <strong>Stage Characteristics</strong>
            </h2>
            <div class="inline-flex justify-between w-11/12">
              <span>Stage Dimensions</span>
              <span>
                {eventData?.selectedPackage.width} x
                {eventData?.selectedPackage.depth} ft.
              </span>
            </div>
            <br />
            <div class="inline-flex justify-left w-11/12">
              <p>
                From the venue:
                <em>{eventData?.selectedPackage.comments}</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCollab;
