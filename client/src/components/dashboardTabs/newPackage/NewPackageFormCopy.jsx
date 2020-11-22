// import React, { useEffect, useState } from 'react';
// import './newPackage.css';

// import lists from '../../../helper';
// import axios from 'axios';

// function handleEquipClick(event) {
//   setState(state.equipToSave.concat(event.target.value));
// }

// const handleCategorySelect = (event) => {
//   setCategory(equipList[event.target.value]);
// };

// const categoryList = ['Cables', 'Stands'];

// const equipList = [
//   [
//     { name: 'XLR Cable', description: '', iconURL: 'something' },
//     { name: 'Quarter-Inch Cable', description: '', iconURL: 'something' }
//   ],
//   [
//     { name: 'Mic Stand', description: '', iconURL: 'something' },
//     { name: 'Guitar Stand', description: '', iconURL: 'drum-kit' }
//   ]
// ];

// const handleFormSubmit = (event) => {
//   event.preventDefault();
//   console.log(event.target);
// };

// class NewPackageFormCopy extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { category: lists.cables, equipToSave: [], equipQuantity: 1 };
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={handleFormSubmit}>
//           <h1>THIS IS A COPY name (click to edit)</h1>
//           <h2>Which Equip would you like to include?</h2>
//           <select onChange={handleCategorySelect}>
//             {categoryList.map((category) => (
//               <option value={categoryList.indexOf(category)}>{category}</option>
//             ))}
//           </select>
//           <br></br>

//           {category.map((
//             equipItem //equipItem is the full equipment obj we will send to backend
//           ) => (
//             <button
//               type="button"
//               value={equipItem.name}
//               onClick={handleEquipClick}
//             >
//               {equipItem.name}
//             </button>
//           ))}

//           <div className="equip-table">
//             <span>
//               <strong>Name</strong>
//             </span>
//             <span>
//               <strong>Description</strong>
//             </span>
//             <span>
//               <strong>Quantity</strong>
//             </span>
//           </div>
//           {equipToSave.map((equipItem) => {
//             // check for item quantity here?
//             return (
//               <div>
//                 <span>{equipItem}</span>
//                 <input type="text" placeholder="description" />
//                 <input
//                   type="text"
//                   placeholder="quantity"
//                   // value={this.state.value}
//                 />
//                 <span>{equipQuantity}</span>
//                 <button
//                   type="button"
//                   onClick={() => setEquipQuantity(equipQuantity + 1)}
//                 >
//                   {' '}
//                   +{' '}
//                 </button>
//                 <button
//                   type="button"
//                   onClick={() => setEquipQuantity(equipQuantity - 1)}
//                 >
//                   {' '}
//                   -{' '}
//                 </button>
//               </div>
//             );
//           })}
//           <div className="stage-dimensions new-stage-form-section">
//             <h3>What are the stage dimensions?</h3>
//             <label for="stage-width">Width</label>
//             <input id="stage-width" type="number"></input>
//             <br></br>
//             <label for="stage-depth">Depth</label>
//             <input id="stage-depth" type="number"></input>
//           </div>
//           <div className="indoor-or-outdoor new-stage-form-section">
//             <h3>Indoor or Outdoor?</h3>
//             <select name="indoor-or-outdoor" id="indoor-or-outdoor">
//               <option value="indoor">Indoor</option>
//               <option value="outdoor-uncovered">Outdoor Uncovered</option>
//               <option value="outdoor-covered">Outdoor Covered</option>
//             </select>
//             <textarea placeholder="comments" rows="5" cols="35" />
//           </div>
//           <div className="additional-comments new-stage-form-selection">
//             <h3>Anything else?</h3>
//             <textarea rows="5" cols="35" placeholder="placeholder" />
//           </div>
//           <input type="submit" />
//         </form>
//       </div>
//     );
//   }
// }

// export default NewPackageFormCopy;
