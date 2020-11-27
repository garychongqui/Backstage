import axios from 'axios';
import React, { useState } from 'react';
import equipLists, { sort } from '../../helper';
import './myEquipment.css';

const categoryList = [
  'Cables',
  'DJ Equipment',
  'Microphones',
  'Speakers',
  'Stands'
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
class MyEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: equipLists[0],
      equipNames: [],
      equipObj: {},
      equipArray: []
    };
  }

  handleCategorySelect = (event) => {
    this.setState({ activeCategory: equipLists[event.target.value] });
  };

  handleEquipClick = (event) => {
    if (!this.state.equipNames.includes(event.target.value)) {
      this.setState({
        equipNames: this.state.equipNames.concat(event.target.value)
      });
    } else {
      alert(`${event.target.value} already in array. adjust quantity instead`);
    }
  };

  handleEquipDelete = (index) => {
    let newEquipNames = this.state.equipNames;
    newEquipNames.splice(index, 1);
    this.setState({ equipNames: newEquipNames });
  };

  handleDescriptionChange = (event, index) => {
    const equipWithDescription = new EquipWithDescription(
      index,
      event.target.name,
      event.target.value
    );
    descriptionArray.push(equipWithDescription);
  };
  handleQuantityChange = (event, index) => {
    const equipWithQuantity = new EquipWithQuantity(
      index,
      event.target.name,
      event.target.value
    );
    quantityArray.push(equipWithQuantity);
  };

  handleSave = async (event) => {
    event.preventDefault();
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
      if (!this.state.equipNames.includes(obj.item)) {
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
      if (!this.state.equipNames.includes(obj.item)) {
        uniqueQuantityArray.splice(index, 1);
      }
    });
    // console.log('d', uniqueDescriptionArray, 'q', uniqueQuantityArray);
    await axios
      .post('/api/equipment', { uniqueDescriptionArray, uniqueQuantityArray })
      .then(alert('Equipment list saved'));
  };

  render() {
    return (
      <div className="my-equipment-component">
        <h1>My Equipment (click to add)</h1>
        <form name="equipmentList" onSubmit={this.handleSave}>
          <select onChange={this.handleCategorySelect}>
            {categoryList.map((item) => (
              <option value={categoryList.indexOf(item)}>{item}</option>
            ))}
          </select>
          {this.state.activeCategory.map((item, index) => (
            <button
              key={index}
              type="button"
              value={item.name}
              onClick={(event) => this.handleEquipClick(event)}
              style={{ color: 'lightblue' }}
            >
              {item.name}
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
          <div className="button-mapping">
            {this.state.equipNames.map((item, index) => {
              return (
                <div style={{ display: 'flex' }}>
                  <span style={{ color: 'lightblue' }}>{item}</span>
                  <input
                    placeholder="description"
                    name={item}
                    type="text"
                    size="30"
                    onBlur={(event) =>
                      this.handleDescriptionChange(event, index)
                    }
                  />
                  <input
                    placeholder="quantity"
                    name={item}
                    required
                    min="0"
                    size="4"
                    type="number"
                    onBlur={(event) => this.handleQuantityChange(event, index)}
                  />
                  <svg
                    className="delete-button"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#A6271F"
                    width="40"
                    onClick={() => this.handleEquipDelete(index)}
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
          <input type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default MyEquipment;
