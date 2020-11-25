const Equipment = require('../db/models/equipment');
const Package = require('../db/models/package');
const User = require('../db/models/user');
const mongoose = require('mongoose');
// const {
//   default: MyEquipment
// } = require('../../client/src/components/dashboardTabs/myEquipment/MyEquipment');
// ***********************************************//
// Create a task
// ***********************************************//
// exports.createTask = async (req, res) => {
//   try {
//     const task = await new Task({
//       ...req.body,
//       owner: req.user._id
//     });
//     await task.save();
//     res.status(200).send(task);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
// ***********************************************//
// Add Equipment item
// ***********************************************//
exports.addEquipItem = async (req, res) => {
  try {
    const theEquipment = new Equipment({
      name: req.body.name,
      quantity: req.body.quantity,
      description: req.body.description
    });
    await theEquipment.save();
    res.status(201).json(theEquipment);
  } catch (error) {
    res.status(400).json(error);
  }
};
//     await theEquipment.save();
//     console.log(req);
//     const theUser = await User.findOne({
//       _id: req.user._id
//     });
//     console.log(theUser);
//     theUser.item.push(ownedEquip);
//     await theUser.save();
//     res.status(201).json(ownedEquip);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
// console.log('addequip controller has run');
// console.log(req.data);
// cont;
// const equipArray = req.body.data;
// const theUser = User.findOne({ _id: req.user.id });
// const thePackage = Package.findOne({ user: req.user.id });
// const thePackage = Package.findOne({
//   _id: theUser.packages[0]
// });
// console.log('equiparray: ', equipArray);
// console.log('theUser: ', theUser);
// console.log('thePackage: ', thePackage);
//   try {
//     const ownedEquip = new OwnedEquip({
//       name: req.body.name,
//       quantity: req.body.quantity,
//       description: req.body.description
//       // ...req.body,
//       // owner: req.user._id
//     });
//     await ownedEquip.save();
//     console.log(req);
//     const theUser = await User.findOne({
//       _id: req.user._id
//     });
//     console.log(theUser);
//     theUser.item.push(ownedEquip);
//     await theUser.save();
//     res.status(201).json(ownedEquip);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
// ***********************************************//
//  a task
// ***********************************************//
exports.getEquipItem = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'Can not get Equipment' });
  try {
    const theEquipment = await Equipment.findOne({ _id });
    if (!theEquipment)
      return res.status(400).json({ message: 'Equipment not found' });
    res.status(200).json(theEquipment);
  } catch (error) {
    res.status(400).json({ error });
  }
};
// ***********************************************//
// Update a task
// ***********************************************//
exports.updateEquipItem = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'quantity', 'description'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });
  try {
    const theEquipment = await Equipment.findOne({
      _id: req.params.id
    });
    if (!theEquipment)
      return res.status(404).json({ message: 'Equipment not found' });
    updates.forEach((update) => (theEquipment[update] = req.body[update]));
    await theEquipment.save();
    res.status(200).json(theEquipment);
  } catch (error) {
    res.status(400).json({ error });
  }
};
// // ***********************************************//
// // Delete a task
// // ***********************************************//
exports.deleteEquipItem = async (req, res) => {
  try {
    const theEquipment = await Equipment.findOneAndDelete({
      _id: req.params.id
    });
    if (!theEquipment)
      return res.status(404).json({ message: 'equipment not found' });
    res.status(200).json({ message: 'equipment has been deleted' });
  } catch (error) {
    res.status(400).json({ error });
  }
};
