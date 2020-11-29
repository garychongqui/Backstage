import React, { useState, useEffect } from 'react';
import Stage from './Stage';
import equipLists, { lastIndexOf } from '../../artistEquip';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import moment from 'moment';

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

  const eventID = history.location.pathname.slice(8);

  const getEventInfo = async () => {
    await axios
      .get(`/artist/${eventID}`)
      .then((results) => setEventData(results.data));
  };

  const setHasBeenSeen = async () => {
    await axios
      .patch(`/artist/${eventID}`, { hasBeenOpened: true })
      .then((results) => console.log(results));
  };

  useEffect(() => {
    getEventInfo();
    getEquipInfo();
    setHasBeenSeen();
  }, [iconsForStage]);

  const handleCategorySelect = (event) => {
    setActiveCategory(equipLists[event.target.value]);
  };

  const handleIconClick = (event) => {
    setIconsForStage(iconsForStage.concat(event.target.value));
  };

  // const iconRatio = (eventData?.width * eventData?.depth) / 120;

  return (
    <div style={{ backgroundColor: '#FFF7F1' }}>
      <div className="artist-collab-component text-center">
        <h1 class="text-left bold text-4xl m-8 mb-6 rounded-lg">
          Welcome Backstage.
        </h1>

        <div className="info-header mb-10">
          <h2 class="bold text-3xl mt-6">{eventData?.eventTitle}</h2>
          <h2 class="text-xl text-gray-200">
            {moment(eventData?.eventDate).format('MMMM Do YYYY')}
          </h2>
        </div>
        <div className="artist-collab-container flex flex-col items-center">
          <div class="icons-and-stage flex w-5/6 items-center justify-evenly">
            <div
              class="flex flex-col items-center w-1/4 justify-between border-l-4 text-lg shadow-lg mx-0"
              style={{
                height: '36rem',
                borderTopRightRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem',
                borderColor: '#A6271F'
              }}
            >
              <h2 class="text-xl">Select your equipment</h2>
              <div
                className="icon-selection-container flex flex-col items-center w-full my-0"
                style={{
                  minHeight: '33rem',
                  margin: '0px'
                }}
              >
                <select
                  onChange={handleCategorySelect}
                  class="text-xlg"
                  style={{ backgroundColor: '#FFF7F1', outline: 'none' }}
                >
                  {categoryList.map((category, index) => {
                    return (
                      <option
                        value={index}
                        style={{ backgroundColor: '#FFF7F1' }}
                      >
                        {category}
                      </option>
                    );
                  })}
                </select>
                <div class="flex flex-wrap overflow-auto justify-center">
                  {activeCategory.map((object, index) => (
                    <button
                      className="icon-to-select"
                      key={index}
                      value={object.iconURL}
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
            </div>
            <Stage iconsForStage={iconsForStage} />
          </div>
          <div
            className="venue-icons-and-characteristics-container flex w-5/6 justify-between"
            style={{ height: '32rem' }}
          >
            <div
              class="flex flex-col items-center w-full border-l-4 text-lg shadow-lg"
              style={{
                borderColor: '#A6271F',
                width: '64%',
                borderTopRightRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem'
              }}
            >
              <h2 class="text-2xl">Venue's Equipment</h2>
              <div className="venue-equip-container w-full overflow-y-auto ">
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
                      <span
                        class="w-2/3 mx-4 text-left"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center'
                        }}
                      >
                        {item.description}
                      </span>
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
            </div>
            <div
              class="flex flex-col items-center w-full border-l-4 text-lg shadow-lg"
              style={{
                borderColor: '#A6271F',
                width: '36%',
                borderTopRightRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem'
              }}
            >
              <h2 class="text-2xl">Stage Characteristics</h2>
              <div className="stage-characteristics w-full text-xl bold">
                <div class="flex justify-between w-11/12 flex-col items-center">
                  <span style={{ fontSize: '1.4rem' }}>
                    {eventData?.selectedPackage.width} x{' '}
                    {eventData?.selectedPackage.depth} ft.
                  </span>
                </div>
                <div class="flex flex-col items-center justify-between w-11/12 text-xl">
                  <span style={{ fontSize: '1.4rem' }}>
                    {eventData?.selectedPackage.isOutdoor
                      ? 'Outdoor'
                      : 'Indoor'}
                  </span>
                </div>
                <br />
                <div class="inline-flex justify-left w-11/12">
                  <p
                    class="text-center underline"
                    style={{ borderBottom: '2px' }}
                  >
                    Venues Comments
                  </p>

                  <p class="text-lg text-left">
                    <em>{eventData?.selectedPackage.comments}</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistCollab;
