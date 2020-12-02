import axios from 'axios';
import React, { useState, useEffect } from 'react';
import equipLists, { sort } from '../../venueEquip';
import swal from 'sweetalert';
import '../../styles/index.css';

const categoryList = [
  'Audio Cables',
  'DJ Equipment',
  'Microphones',
  'Monitor Speakers',
  'Stands',
  'Direct Input Boxs',
  'Instruments'
];

function EquipWithDescription(index, item, description) {
  this.index = index;
  this.item = item;
  this.description = description;
}

function EquipWithQuantity(index, item, quantity) {
  this.index = index;
  this.item = item;
  this.quantity = quantity;
}

let descriptionArray = [];
let quantityArray = [];
let uniqueDescriptionArray = [];
let uniqueQuantityArray = [];

const MyEquipment = () => {
  const [activeCategory, setActiveCategory] = useState(equipLists[0]);
  const [equipNames, setEquipNames] = useState([]);
  const [existingEquip, setExistingEquip] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);
  const [saved, setSaved] = useState(0);

  useEffect(() => {
    getExistingEquip();
  }, [saved]);

  const getExistingEquip = async () => {
    await axios
      .get('/api/equipment')
      .then((results) => setExistingEquip(results.data));
  };

  const handleCategorySelect = (event) => {
    setActiveCategory(equipLists[event.target.value]);
  };

  const handleEquipClick = (event) => {
    if (!equipNames.includes(event.target.value)) {
      setEquipNames(equipNames.concat(event.target.value));
      // setIsUpdated(!isUpdated);
    } else {
      swal(`${event.target.value} already selected. Adjust quantity instead`, {
        icon: 'warning'
      });
    }
  };

  const handleEquipDelete = (index) => {
    let newEquipNames = equipNames;
    newEquipNames.splice(index, 1);
    setEquipNames(newEquipNames);
    setIsUpdated(!isUpdated);
  };

  const handleDescriptionChange = (event, index) => {
    const equipWithDescription = new EquipWithDescription(
      index,
      event.target.name,
      event.target.value
    );
    descriptionArray.push(equipWithDescription);
  };
  const handleQuantityChange = (event, index) => {
    const equipWithQuantity = new EquipWithQuantity(
      index,
      event.target.name,
      event.target.value
    );
    quantityArray.push(equipWithQuantity);
  };

  const handleSave = async (event) => {
    event.preventDefault();
    getExistingEquip();
    const sortedDescriptionArray = descriptionArray.sort((a, b) => {
      return a.index < b.index ? -1 : 1;
    });
    for (let i = 0; i < sortedDescriptionArray.length; i++) {
      if (
        sortedDescriptionArray[i]?.index !==
        sortedDescriptionArray[i + 1]?.index
      ) {
        uniqueDescriptionArray.push(descriptionArray[i]);
      }
    }

    uniqueDescriptionArray.forEach((obj, index) => {
      if (!equipNames.includes(obj.item)) {
        uniqueDescriptionArray.splice(index, 1);
      }
    });

    const sortedQuantityArray = quantityArray.sort((a, b) => {
      return a.index < b.index ? -1 : 1;
    });
    for (let i = 0; i < sortedQuantityArray.length; i++) {
      if (sortedQuantityArray[i]?.index !== sortedQuantityArray[i + 1]?.index) {
        uniqueQuantityArray.push(quantityArray[i]);
      }
    }
    uniqueQuantityArray.forEach((obj, index) => {
      if (!equipNames.includes(obj.item)) {
        uniqueQuantityArray.splice(index, 1);
      }
    });
    await axios
      .post('/api/equipment', { uniqueDescriptionArray, uniqueQuantityArray })
      .then(setSaved((saved) => saved + 1))
      .then(swal('Equipment list saved', { icon: 'success' }));
  };

  return (
    <div className="flex justify-center my-equipment-con">
      <div
        className="my-equipment-component flex w-5/6 flex justify-center"
        style={{ position: 'relative', bottom: '6rem' }}
      >
        <div
          className="existing-equip-list w-full text-lg text-white"
          style={{
            borderRight: '5px solid #FFF7F1',
            borderRadius: '10px',
            padding: '1rem',
            position: 'relative'
          }}
        >
          <h2 className="text-2xl semibold text-center text-white pb-6">
            Your Equipment
          </h2>

          {existingEquip?.map((item) => {
            return (
              <div className="flex flex-col-reverse">
                <div className="flex w-full">
                  <span
                    className="w-3/4 border bg-white pl-2 text-black rounded-md semibold"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      textAlign: 'left',
                      height: '3rem'
                    }}
                  >
                    {item.name}
                  </span>
                  <span
                    className="w-1/4 border bg-white text-black rounded-md semibold"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {item.quantity}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <form className="category" name="equipmentList" onSubmit={handleSave}>
          <div
            className="text-white flex flex-col items-center"
            style={{
              borderRadius: '10px',
              padding: '1rem',
              minWidth: '38rem',
              maxWidth: '38rem'
            }}
          >
            <h1 className="text-2xl" style={{ marginBottom: '1.5rem' }}>
              Add Equipment
            </h1>
            <div className="flex flex-col items-center text-xl">
              <select
                className="category-drop-menu text-black"
                onChange={handleCategorySelect}
              >
                {categoryList?.map((item) => (
                  <option value={categoryList.indexOf(item)}>{item}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-wrap w-full justify-evenly text-xl">
              {activeCategory?.map((item, index) => (
                <button
                  className="category-options btn-2"
                  key={index}
                  type="button"
                  value={item.name}
                  onClick={(event) => handleEquipClick(event)}
                >
                  {item.name}
                </button>
              ))}
            </div>

            <div
              className="button-mapping-area flex justify-center"
              style={{ minWidth: '32rem', maxWidth: '32rem' }}
            >
              <div
                className="button-mapping"
                style={{ minWidth: '38rem', maxWidth: '38rem' }}
              >
                {equipNames?.map((item, index) => {
                  return (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      <span
                        className="text-lg"
                        style={{ color: '#FFF7F1', width: '10rem' }}
                      >
                        {item}
                      </span>
                      <input
                        className="w-20vw text-black rounded-md"
                        placeholder="description"
                        name={item}
                        type="text"
                        size="24"
                        onBlur={(event) =>
                          handleDescriptionChange(event, index)
                        }
                        style={{ height: '3rem' }}
                      />
                      <input
                        className="text-black rounded-md"
                        placeholder="quantity"
                        name={item}
                        required
                        min="0"
                        size="4"
                        type="number"
                        onBlur={(event) => handleQuantityChange(event, index)}
                        style={{ height: '3rem', width: '5rem' }}
                      />
                      <svg
                        className="delete-button"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#A6271F"
                        width="40"
                        onClick={() => handleEquipDelete(index)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
            </div>

            <button className="btn-1" type="submit" value="Save">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyEquipment;
