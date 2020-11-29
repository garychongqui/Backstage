import React, { useState, useEffect } from 'react';
import Stage from './Stage';
import equipLists, { lastIndexOf } from '../../artistEquip';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { jsPDF } from 'jspdf';
import * as html2canvas from 'html2canvas';
import Studio from './Studio';

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

  // const generatePdf = () => {
  //   const newPlot = document.getElementById('stage-component');
  //   html2canvas(newPlot, { canvas: canvas }).then(function (canvas) {
  //     console.log('test');
  //   });
  // };

  // const imgData = newPlot.toDataURL('image/png');
  // console.log(imgData);

  // const pdf = new jsPDF('p', 'in', [11.5, 8]);
  // pdf.text(categoryList, 0, 0);
  // pdf.addImage(imgData, 'png', 0.25, 0.25, 7, 4, 'NONE', 0, {
  //   allowTaint: true
  // });
  // pdf.save('test.pdf');

  const generatePdf = () => {
    const newPlot = document.getElementById('to-canvas');

    html2canvas(newPlot).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'in', [11.5, 8]);
      // var width = 152;
      // var height = 111;
      // pdf.setFontSize(40);
      // pdf.text("hey guyz", 35, 25);
      pdf.addImage(imgData, 'png', 0.5, 0.5, 7, 4);
      pdf.save('test.pdf');
      // Pdf.addImage("../musicIcons/acoustic-guitar.svg", "SVG", 15, 40, 180, 180);
    });
  };

  return (
    <div className="bg-gray-dark">
      <div className="artist-collab-component text-center">
        <div className="info-header mb-10">
          <h2 class="font-bold text-4xl pt-8 mb-2" style={{ color: '#FFF7F1' }}>
            {eventData?.eventTitle}
          </h2>
          <em>
            <h3
              class="text-2xl text-gray-200 dash mt-4"
              style={{ color: '#FFF7F1' }}
            >
              {moment(eventData?.eventDate).format('MMMM Do YYYY')}
            </h3>
          </em>
        </div>
        <div className="artist-collab-container flex flex-col items-center">
          <div
            class="icons-and-stage flex w-5/6 items-center justify-evenly m-0"
            style={{ margin: '0px' }}
          >
            <div
              class="flex flex-col items-center w-1/4 justify-between border-l-8 text-lg mx-0"
              style={{
                height: '36rem',
                borderTopRightRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem',
                borderColor: '#A6271F',
                backgroundColor: '#FFF7F1',
                marginBottom: '.25rem'
              }}
            >
              <h2 class="text-2xl">Select your equipment</h2>
              <div
                className="icon-selection-container flex flex-col items-center w-full my-0"
                style={{
                  minHeight: '30rem',
                  margin: '0px'
                }}
              >
                <select
                  onChange={handleCategorySelect}
                  class="text-xl"
                  style={{ backgroundColor: '#FFF7F1', outline: 'none' }}
                >
                  {categoryList.map((category, index) => {
                    return (
                      <option
                        key={index}
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
                        height: '5.5rem',
                        width: '5.5rem',
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
            className="venue-icons-and-characteristics-container flex w-5/6 justify-between m-0"
            style={{ height: '36rem', marginTop: '0px' }}
          >
            <div
              class="flex flex-col items-center w-full border-l-8 text-lg "
              style={{
                borderColor: '#A6271F',
                width: '62%',
                borderTopRightRadius: '0.5rem',
                borderBottomRightRadius: '0.5rem',
                backgroundColor: '#FFF7F1',
                height: '36rem',
                marginRight: '4px'
              }}
            >
              <h2 class="text-3xl pt-4 font-medium">Venue's Equipment</h2>
              <div className="venue-equip-container w-full overflow-y-auto ">
                {equipData?.map((item, index) => {
                  return (
                    <div class="flex justify-start" key={index}>
                      <span
                        class=" text-xl"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '32%'
                        }}
                      >
                        {item.name}
                      </span>
                      <span
                        class="mx-4 text-left text-xl"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          width: '55%'
                        }}
                      >
                        {item.description}
                      </span>
                      <span
                        class=" text-xl"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '13%'
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
              style={{
                width: '38%',
                height: '36rem',
                marginLeft: '4px'
              }}
              class="flex flex-col"
            >
              <div
                class="flex flex-col w-full border-l-8 text-lg ml-0"
                style={{
                  borderColor: '#A6271F',
                  borderTopRightRadius: '0.5rem',
                  borderBottomRightRadius: '0.5rem',
                  backgroundColor: '#FFF7F1',
                  height: '50%',
                  marginTop: '0px',
                  marginLeft: '0px',
                  marginRight: '0px'
                }}
              >
                <h2 class="text-3xl pt-4 font-medium text-center">
                  Stage Characteristics
                </h2>

                <div className="stage-characteristics w-full text-xl bold h-full flex flex-wrap justify-start">
                  <div class="flex flex-col ">
                    <span
                      class="rounded-full py-2 px-4"
                      style={{
                        fontSize: '1.35rem',
                        backgroundColor: '#A6271F',
                        color: '#FFF7F1'
                      }}
                    >
                      {eventData?.selectedPackage.width} x{' '}
                      {eventData?.selectedPackage.depth} ft.
                    </span>
                  </div>
                  <div class="flex flex-col text-xl">
                    <span
                      class="rounded-full py-2 px-4"
                      style={{
                        fontSize: '1.35rem',
                        backgroundColor: '#A6271F',
                        color: '#FFF7F1'
                      }}
                    >
                      {eventData?.selectedPackage.isOutdoor
                        ? 'Outdoor'
                        : 'Indoor'}
                    </span>
                  </div>
                  <br />
                </div>
              </div>
              <div
                class="flex flex-col items-center w-full border-l-8 text-lg ml-0"
                style={{
                  borderColor: '#A6271F',
                  borderTopRightRadius: '0.5rem',
                  borderBottomRightRadius: '0.5rem',
                  backgroundColor: '#FFF7F1',
                  height: '50%',
                  margin: '0px'
                }}
              >
                <div class="flex flex-col justify-left w-11/12">
                  <p
                    class="text-center text-3xl font-medium"
                    style={{ borderBottom: '2px' }}
                  >
                    Venue's Comments
                  </p>
                  <p class="text-xl text-left">
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
