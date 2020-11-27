import axios from 'axios';
import React, { useState } from 'react';
import equipLists from '../../helper';
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
// this.quantity = this.quantity;
// this.appendQuantity = function (quantity) {
//   this.quantity = quantity;}

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

  handleEquipDelete = (event) => {};

  // handleDescriptionBlur = (index, event) => {
  //   this.setState({
  //     descriptionValue: event.target.value
  //   });
  //   this.setState({
  //     descriptionArray: [
  //       this.state.descriptionArray.concat({
  //         index: index,
  //         value: this.state.descriptionValue
  //       })
  //     ]
  //   });
  //   console.log(this.state.descriptionArray);
  // };

  handleDescriptionChange = (event, index) => {
    const equipWithDescription = new EquipWithDescription(
      index,
      event.target.name,
      event.target.value
    );
    descriptionArray.push(equipWithDescription);
    // console.log(descriptionArray);
  };
  handleQuantityChange = (event, index) => {
    const equipWithQuantity = new EquipWithQuantity(
      index,
      event.target.name,
      event.target.value
    );
    quantityArray.push(equipWithQuantity);
    // console.log(quantityArray);
  };
  // this.setState({
  //   equipObj: {
  //     number: index,
  //     item: event.target.name,
  //     description: event.target.value
  //   }
  // });
  // console.log(event.target.value);

  //onBlur, push objects to array

  // handleSave = () => {
  //   console.log('d: ', descriptionArray);
  //   console.log('q: ', quantityArray);
  //   let uniqueDescriptions = [];
  //   for (let i = 0; i < descriptionArray.length; i++) {
  //     for (let j = 0; j < uniqueDescriptions.length + 1; j++) {
  //       console.log(descriptionArray[i]?.index);
  //       if (uniqueDescriptions[j]?.index !== descriptionArray[i]?.index) {
  //         uniqueDescriptions.push(descriptionArray[i]);
  //       }
  //     }
  //   }
  //   console.log(uniqueDescriptions);
  // };

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
    console.log(uniqueDescriptionArray);
    const sortedQuantityArray = quantityArray.sort((a, b) => {
      return a.index < b.index ? -1 : 1;
    });
    for (let i = 0; i < sortedQuantityArray.length; i++) {
      if (sortedQuantityArray[i]?.index !== sortedQuantityArray[i + 1]?.index) {
        uniqueQuantityArray.push(quantityArray[i]);
      }
    }
    console.log(uniqueQuantityArray);
    await axios
      .post('/api/equipment', { uniqueDescriptionArray, uniqueQuantityArray })
      .then((response) => console.log(response));
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
                    // onBlur={(event) => this.handleDescriptionBlur(index, event)}
                  />
                  <input
                    // name={`${equipItem?.}`}
                    placeholder="quantity"
                    name={item}
                    defaultValue="1"
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
