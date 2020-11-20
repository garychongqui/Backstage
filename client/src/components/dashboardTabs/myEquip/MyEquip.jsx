import React, { useEffect, useState } from 'react';
import './myEquip.css';
import fullEquipList from '../../../helper';
import axios from 'axios';

const MyEquip = () => {
  // useEffect = () => {
  //   const [selectedEquip, setSelectedEquip] = useState(null);
  // };

  console.log(fullEquipList);

  const handleAddEquip = (event) => {
    event.preventDefault();
    console.log(event.target);
    // axios.post('', );
  };

  return (
    <div className="my-equip-container">
      <h1>My Equipment</h1>
      <form onSubmit={handleAddEquip}>
        <select name="equipment-input">
          {fullEquipList.list?.map((equipItem) => (
            <option>{equipItem.name}</option>
          ))}
        </select>
        {/* <input type="text"></input> */}
        <input type="submit" value="add" />
      </form>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>XLR Cable</td>
        <td>5</td>
        <td>User Description</td>
        <button>Edit</button>
        <button> + </button>
        <button> - </button>
      </tr>
      <tr>
        <td>XLR Cable '</td>
        <td>5</td>
        <td>User Description</td>
        <button>Edit</button>
        <button> + </button>
        <button> - </button>
      </tr>
      <tr>
        <td>XLR Cable</td>
        <td>5</td>
        <td>User Description</td>
        <button>Edit</button>
        <button> + </button>
        <button> - </button>
      </tr>
    </div>
  );
};

export default MyEquip;
