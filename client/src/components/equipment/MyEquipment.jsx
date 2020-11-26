import React, { useState } from 'react';
import equipLists from '../../helper';

const categoryList = [
  'Cables',
  'DJ Equipment',
  'Microphones',
  'Speakers',
  'Stands'
];

class MyEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeCategory: equipLists[0],
      equipNames: [],
      descriptionValues: [],
      descriptionArray: [{}]
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

  handleDescriptionBlur = (index, event) => {
    this.setState({
      descriptionValue: event.target.value
    });
    this.setState({
      descriptionArray: [
        this.state.descriptionArray.concat({
          index: index,
          value: this.state.descriptionValue
        })
      ]
    });
    console.log(this.state.descriptionArray);
  };

  render() {
    return (
      <div className="my-equipment-component">
        <h1>My Equipment</h1>
        <form name="equipmentList" onSubmit={this.handleFormSubmit}>
          <select onChange={this.handleCategorySelect}>
            {categoryList.map((item) => (
              <option value={categoryList.indexOf(item)}>{item}</option>
            ))}
          </select>
          {this.state.activeCategory.map((equipItem, index) => (
            <button
              key={index}
              type="button"
              value={equipItem.name}
              onClick={(event) => this.handleEquipClick(event)}
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
          <div className="button-mapping">
            {this.state.equipNames.map((equipItem, index) => {
              return (
                <div>
                  <span>{equipItem}</span>
                  <input
                    name="description"
                    type="text"
                    placeholder="description"
                    onBlur={(event) => this.handleDescriptionBlur(index, event)}
                  />

                  <span>{equipItem?.quantity}</span>
                  <input
                    name="quantity"
                    type="number"
                    placeholder="quantity"
                    onblur={(event) => this.handleChangeTest(index, event)}
                  />
                </div>
              );
            })}
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default MyEquipment;
