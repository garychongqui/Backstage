import React from 'react';
import './myEquip.css';

const MyEquip = () => {
  return (
    <div className="my-equip-container">
      <h1>My Equipment</h1>
      <br></br>
      <input type="text" />
      <button>Add</button>
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
        <td>XLR Cable z</td>
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
