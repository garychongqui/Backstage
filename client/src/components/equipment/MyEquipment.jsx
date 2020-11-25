import React, { useState } from 'react';
import equipLists, { lastIndexOf } from '../../helper';

const categoryList = [
  'Cables',
  'DJ Equipment',
  'Microphones',
  'Speakers',
  'Stands'
];
const equipList = [
  [
    { name: 'XLR Cable', description: '', iconURL: 'something' },
    {
      name: 'Quarter-Inch Cable',
      description: '',
      iconURL: 'something'
    }
  ],
  [
    { name: 'Mic Stand', description: '', iconURL: 'something' },
    {
      name: 'Guitar Stand',
      description: '',
      iconURL: 'drum-kit',
      quantity: 2
    }
  ]
];

let arrayOfEquip = [];

class MyEquipment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [],
      activeCategory: equipLists[0],
      equipNames: [],
      equipData: null,
      numberOfItems: 0,
      descriptionValues: [],
      inputFields: { description: '', quantity: '' }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    alert(
      'A description was submitted: ' + this.state.descriptionValues.join(', ')
    );
    event.preventDefault();
  }

  handleChange(i, event) {
    let descriptionValues = [...this.state.values];
    // descriptionValues[i] = event.target.value;
    // console.log(descriptionValues);
  }

  // const [category, setCategory] = useState equipLists.cables);

  // const [equipToSave, setEquipToSave] = useState([]);

  // const [equipData, setEquipData] = useState(null);

  // const [numberOfItems, setNumberOfItems] = useState(0);

  // const [equipDescription, setEquipDescription] = useState([]);
  //   const [equipQuantity, setEquipQuantity] = useState(1);

  handleCategorySelect = (event) => {
    // console.log(event.target.value);
    this.setState({ activeCategory: equipLists[event.target.value] });
    // console.log(this.state.activeCategory);
  };

  handleEquipClick = (event) => {
    this.setState({
      equipNames: this.state.equipNames.concat(event.target.value)
    });
  };

  // const handleSaveEquip = () => {
  //   try {
  //     axios
  //       .post('/api/equipment', { data: equipToSave })
  //       .then(alert('equipment saved'));
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // handleChange = async (event) => {
  //   this.setEquipData({
  //     ...equipData.equipData,
  //     [event.target.name]: event.target.value
  //   });
  // };

  handleFormSubmit = (event) => {
    event.preventDefault();
  };
  // setEquipData();

  handleInputChange = (index, event) => {
    let inputValues = [this.state.inputFields];
    if (event.target.name === 'description') {
      inputValues = {
        ...inputValues,
        description: event.target.value,
        index: index
      };
    } else {
      inputValues = {
        ...inputValues,
        quantity: event.target.value,
        index: index
      };
    }
    this.setState({ inputFields: inputValues });
    console.log(this.state.inputFields);
    arrayOfEquip.push(this.state.inputFields);
    console.log(arrayOfEquip);
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
                    onChange={(event) => this.handleInputChange(index, event)}
                  />

                  <span>{equipItem?.quantity}</span>
                  <input
                    name="quantity"
                    type="text"
                    placeholder="quantity"
                    onChange={(event) => this.handleInputChange(index, event)}
                  />
                </div>
              );
            })}
          </div>
          <button type="submit">
            {/* onClick={handleSaveEquip} */}
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default MyEquipment;
