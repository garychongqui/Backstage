import React, { useEffect, useState } from 'react';
import './myEquip.css';
import fullEquipList from '../../../helper';
import axios from 'axios';

const MyEquip = () => {
  const handleEquipClick = (event) => {
    event.preventDefault();
    console.log(event.target.innerHTML);
    // axios.post('', );
  };

  const handleCategorySelect = (event) => {
    console.log(event.target.value);
  };

  const categoryList = ['Cables', 'Stands'];

  // useEffect(() => {
  //   const [category, setCategory] = useState(categoryList[0]);
  // });

  return (
    <div className="my-equip-container">
      <h1>My Equipment</h1>
      <select onChange={handleCategorySelect}>
        {categoryList.map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <br></br>

      {fullEquipList.list.map((equipItem) => (
        <button onClick={handleEquipClick}>{equipItem.name}</button>
      ))}
      {/* <input type="text"></input> */}
      <input type="submit" value="add" />
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
