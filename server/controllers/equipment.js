const OwnedEquip = require('../db/models/ownedEquip');
User = require('../db/models/user');
mongoose = require('mongoose');

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
    const ownedEquip = new OwnedEquip({
      name: req.body.name,
      quantity: req.body.quantity,
      description: req.body.description
      // ...req.body,
      // owner: req.user._id
    });

    await ownedEquip.save();
    console.log(req);
    const theUser = await User.findOne({
      _id: req.user._id
    });
    console.log(theUser);
    theUser.item.push(ownedEquip);
    await theUser.save();
    res.status(201).json(ownedEquip);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// ***********************************************//
//  a task
// ***********************************************//

exports.getEquipItem = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'Cant get that equipment' });

  try {
    const ownedEquip = await OwnedEquip.findOne({ _id, owner: req.user._id });
    if (!ownedEquip)
      return res.status(400).json({ message: 'Equipment not found' });
    res.status(200).json(ownedEquip);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Update a task
// ***********************************************//

exports.updateEquipItem = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'name', 'icon'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const task = await Task.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!task) return res.status(404).json({ message: 'task not found' });
    updates.forEach((update) => (task[update] = req.body[update]));
    await task.save();
    res.status(200).json(task);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// // ***********************************************//
// // Delete a task
// // ***********************************************//

exports.deleteEquipItem = async (req, res) => {
  try {
    const equip = await OwnedEquip.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!equip) return res.status(404).json({ message: 'equipment not found' });
    res.status(200).json({ message: 'equipment has been deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
