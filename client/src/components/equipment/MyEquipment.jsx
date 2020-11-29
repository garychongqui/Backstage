import axios from 'axios';
import React, { useEffect, useState } from 'react';
import equipLists, { sort } from '../../venueEquip';
import './myEquipment.css';
import swal from 'sweetalert';

const categoryList = [
  'Audio Cables',
  'DJ Equipment',
  'Microphones',
  'Monitor Speakers',
  'Stands',
  'DI Box'
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
      equipArray: [],
      existingEquip: []
    };
  }

  async componentDidMount() {
    await axios
      .get('/api/equipment')
      .then((results) => this.setState({ existingEquip: results.data }));
  }

  getExistingEquip = async () => {
    console.log('has run');
    await axios.get('/api/equipment').then((results) => console.log(results));
  };

  handleCategorySelect = (event) => {
    this.setState({ activeCategory: equipLists[event.target.value] });
  };

  handleEquipClick = (event) => {
    if (!this.state.equipNames.includes(event.target.value)) {
      this.setState({
        equipNames: this.state.equipNames.concat(event.target.value)
      });
    } else {
      swal(`${event.target.value} already selected. Adjust quantity instead`, {
        icon: 'warning'
      });
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
      .then(swal('Equipment list saved', { icon: 'success' }));
  };

  render() {
    return (
      <div className="my-equipment-component flex w-5/6 flex justify-center">
        <div className="existing-equip-list w-1/3 text-lg text-white ">
          <div class="flex justify-start text-xl">
            <span class="w-3/4 text-center">Item</span>
            <span class="w-1/4 text-center">Quantity</span>
          </div>
          {this.state.existingEquip?.map((item) => {
            return (
              <div class="flex justify-start border">
                <span
                  class="w-3/4 border"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    textAlign: 'left'
                  }}
                >
                  {item.name}
                </span>
                <span
                  class="w-1/4 border"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {item.quantity}
                </span>
              </div>
            );
          })}
        </div>
        <form name="equipmentList" onSubmit={this.handleSave}>
          <h2>Add Equipment</h2>
          <select onChange={this.handleCategorySelect}>
            {/*
      <div className="bg-dark-gray">
        <br />
        <h1 className="dash-h1">My Equipment</h1>

        <form
          name="equipmentList"
          className="equipment-buttons"
          onSubmit={this.handleSave}
        >
          <select
            className="equipment-dropdown"
            onChange={this.handleCategorySelect}
          >
*/}
            {categoryList.map((item) => (
              <option value={categoryList.indexOf(item)}>{item}</option>
            ))}
          </select>
          {this.state.activeCategory.map((item, index) => (
            <button
              className="btn-2"
              key={index}
              type="button"
              value={item.name}
              onClick={(event) => this.handleEquipClick(event)}
            >
              {item.name}
            </button>
          ))}

          <div className="dash-h4">
            <span>Name</span>
            <span>Description</span>
            <span>Quantity</span>
          </div>

          <div className="button-mapping-area">
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
                      onBlur={(event) =>
                        this.handleQuantityChange(event, index)
                      }
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
          </div>
          <input className="btn-1" type="submit" value="Save" />
        </form>
      </div>
    );
  }
}

export default MyEquipment;
