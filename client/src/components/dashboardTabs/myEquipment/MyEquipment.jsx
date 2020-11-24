import React, { useEffect, useState } from 'react';
import './myEquipment.css';
import { useHistory } from 'react-router-dom';
import lists from '../../../helper';
import axios from 'axios';

const MyEquipment = () => {
  const [category, setCategory] = useState(lists.cables);
  const [equipToSave, setEquipToSave] = useState([]);
  const [equipDescription, setEquipDescription] = useState([]);
  //   const [equipQuantity, setEquipQuantity] = useState(1);

  const history = useHistory();

  const handleEquipClick = (event) => {
    //     let valuesArray = category.map((piece) => Object.values(piece));
    //     console.log(valuesArray);

    setEquipToSave(equipToSave.concat(event.target.value));
  };
  //   const handleEquipClick = (event) => {
  //     setEquipToSave(equipToSave.concat(event.target.value));
  //   };

  //   const handlePlusQuantity = () => {
  //     console.log('+');
  //   };
  //   const handleMinusQuantity = () => {
  //     console.log('-');
  //   };

  const handleCategorySelect = (event) => {
    setCategory(equipList[event.target.value]);
  };

  const categoryList = ['Cables', 'Stands'];

  const equipList = [
    [
      { name: 'XLR Cable', description: '', iconURL: 'something' },
      {
        name: 'Quarter-Inch Cable',
        description: '',
        iconURL: 'something'
      }
    ],
    [
      { name: 'Mic Stand', description: '', iconURL: 'something' },
      {
        name: 'Guitar Stand',
        description: '',
        iconURL: 'drum-kit',
        quantity: 2
      }
    ]
  ];

  const handleSaveEquip = () => {
    try {
      axios
        .post('/api/equipment', { data: equipToSave })
        .then(history.push('/dashboard'));
      // .then(history.push('/packages/'));
      // .then((response) => alert(response));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="my-equipment-component">
      <h1>My Equipment</h1>
      <form name="equipmentList" method="post" action="/api/equipment">
        <select onChange={handleCategorySelect}>
          {categoryList.map((category) => (
            <option value={categoryList.indexOf(category)}>{category}</option>
          ))}
        </select>
        <br></br>

        {category.map((
          equipItem //equipItem is the full equipment obj we will send to backend
        ) => (
          <button
            type="button"
            value={equipItem.name}
            onClick={handleEquipClick}
          >
            {equipItem.name}
          </button>
        ))}

        <div className="equip-table">
          <span>
            <strong>Name</strong>
          </span>
          <span>
            <strong>Description</strong>
          </span>
          <span>
            <strong>Quantity</strong>
          </span>
        </div>
        {equipToSave.map((equipItem) => {
          // check for item quantity here?
          return (
            <div>
              <span>{equipItem}</span>
              <input type="text" placeholder="description" />

              <span>{equipItem.quantity}</span>
              <input type="number" placeholder="quantity" />
            </div>
          );
        })}
        <button type="button" onClick={handleSaveEquip}>
          Save
        </button>
        {/* <button type="button" onClick={handleSaveEquip}>
        Save
      </button> */}
      </form>
    </div>
  );
};

export default MyEquipment;
