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
    this.setState({
      equipNames: this.state.equipNames.concat(event.target.value)
    });
  };

  render() {
    return (
      /* 
    <div className="my-equipment-component">
      <br />
      <h1 className="dash-h1">My Equipment</h1>
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
            className="btn-2"
            type="button"
            value={equipItem.name}
            onClick={handleEquipClick}
          >
            {equipItem.name}
          </button>
        ))} */

      /*  handleFormSubmit = (event) => {
    event.preventDefault();
  };

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
    console.log(descriptionArray);
  };
  handleQuantityChange = (event, index) => {
    const equipWithQuantity = new EquipWithQuantity(
      index,
      event.target.name,
      event.target.value
    );
    quantityArray.push(equipWithQuantity);
    console.log(quantityArray);
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

  render() {
    return (
      <div className="my-equipment-component">
        <h1>My Equipment (click to add)</h1>
        <form name="equipmentList" onSubmit={this.handleFormSubmit}>
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
            >
              {item.name}
            </button>
          ))} */
      <div>
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
              <div>
                <span>{item}</span>
                <input
                  placeholder="description"
                  name={item}
                  type="text"
                  size="30"
                  onBlur={(event) => this.handleDescriptionChange(event, index)}
                  // onBlur={(event) => this.handleDescriptionBlur(index, event)}
                />
                <input
                  // name={`${equipItem?.}`}
                  placeholder="quantity"
                  name={item}
                  min="0"
                  size="4"
                  type="number"
                  onBlur={(event) => this.handleQuantityChange(event, index)}
                  onblur={(event) => this.handleChangeTest(index, event)}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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
        <button type="button" onClick={this.handleSave}>
          Save
        </button>
      </div>
    );
  }
}

export default MyEquipment;
