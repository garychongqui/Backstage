import React, { useEffect, useState } from 'react';
import './newPackage.css';

// should this whole thing be a modal that hovers over the "MyStages" component?

import lists from '../../../helper';
import axios from 'axios';

const NewPackage = () => {
  const [category, setCategory] = useState(lists.cables);

  const handleEquipClick = (event) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  const handleCategorySelect = (event) => {
    setCategory(equipList[event.target.value]);
  };

  const categoryList = ['Cables', 'Stands'];

  const equipList = [
    [
      { name: 'XLR Cable', iconURL: 'something' },
      { name: 'Quarter-Inch Cable', iconURL: 'something' }
    ],
    [
      { name: 'Mic Stand', iconURL: 'something' },
      { name: 'Guitar Stand', iconURL: 'drum-kit' }
    ]
  ];

  return (
    <div className="new-stage-container">
      <h1>Package name (click to edit)</h1>
      <div className="my-equip-container">
        <h2>Which Equip would you like to include?</h2>
        <select onChange={handleCategorySelect}>
          {categoryList.map((category) => (
            <option value={categoryList.indexOf(category)}>{category}</option>
          ))}
        </select>
        <br></br>

        {category.map((
          equipItem //equipItem is the full equipment obj we will send to backend
        ) => (
          <button value={equipItem} onClick={handleEquipClick}>
            {equipItem.name}
          </button>
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
      <form>
        <div className="equip-selection new-stage-form-section">
          <h3>Which Equip to include in this package?</h3>
          <tr>
            <td>XLR Cable</td>
            <td>5</td>
            <button> + </button>
            <button> - </button>
            <span>2</span>
          </tr>
          <tr>
            <td>Other Cable</td>
            <td>3</td>

            <button> + </button>
            <button> - </button>
            <span>2</span>
          </tr>
          <tr>
            <tdh>Mic Stand</tdh>
            <td>2</td>

            <button> + </button>
            <button> - </button>
            <span>2</span>
          </tr>
        </div>
        <div className="stage-dimensions new-stage-form-section">
          <h3>What are the stage dimensions?</h3>
          <label for="stage-width">Width</label>
          <input id="stage-width" type="number"></input>
          <br></br>
          <label for="stage-depth">Depth</label>
          <input id="stage-depth" type="number"></input>
        </div>
        <div className="indoor-or-outdoor new-stage-form-section">
          <h3>Indoor or Outdoor?</h3>
          <select name="indoor-or-outdoor" id="indoor-or-outdoor">
            <option value="indoor">Indoor</option>
            <option value="outdoor-uncovered">Outdoor Uncovered</option>
            <option value="outdoor-covered">Outdoor Covered</option>
          </select>
          <textarea placeholder="comments" rows="5" cols="35" />
        </div>
        <div className="additional-comments new-stage-form-selection">
          <h3>Anything else?</h3>
          <textarea rows="5" cols="35" placeholder="placeholder" />
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};

export default NewPackage;
