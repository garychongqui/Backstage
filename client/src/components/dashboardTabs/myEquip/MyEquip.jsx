import React from 'react';
import './myEquip.css';
// import fullEquipList from '../../../helperFiles/fullEquipList';
import axios from 'axios';

const MyEquip = () => {
  const fullEquipList = [
    { name: 'MXR Cable' },
    { name: 'Mic Stand' },
    { name: 'Monitor' }
  ]; //add this to helper file

  const handleAddEquip = (event) => {
    event.preventDefault();
    console.log(event.target);
    // axios.post('', );
  };

  return (
    <div className="my-equip-container">
      <h1>My Equipment</h1>
      <form onSubmit={(event) => handleAddEquip(event)}>
        <select name="equipment-input">
          {fullEquipList.map((equipItem) => (
            <option>{equipItem.name}</option>
          ))}
        </select>
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
