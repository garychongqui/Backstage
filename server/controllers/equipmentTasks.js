const OwnedEquip = require('../db/models/ownedEquip'),
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
    const equipment = await new OwnedEquip({
      ...req.body,
      owner: req.user._id //we do not have owner as a field
    });
    await equipment.save();
    res.status(200).send(equipment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Update a task
// ***********************************************//

// exports.updateEquipItem = async (req, res) => {
//   const updates = Object.keys(req.body);
//   const allowedUpdates = ['description', 'completed', 'dueDate'];
//   const isValidOperation = updates.every((update) =>
//     allowedUpdates.includes(update)
//   );
//   if (!isValidOperation)
//     return res.status(400).json({ message: 'invalid updates' });

//   try {
//     const task = await Task.findOne({
//       _id: req.params.id,
//       owner: req.user._id
//     });
//     if (!task) return res.status(404).json({ message: 'task not found' });
//     updates.forEach((update) => (task[update] = req.body[update]));
//     await task.save();
//     res.status(200).json(task);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
// // ***********************************************//
// // Delete a task
// // ***********************************************//
// exports.deleteEquipItem = async (req, res) => {
//   try {
//     const task = await Task.findOneAndDelete({
//       _id: req.params.id,
//       owner: req.user._id
//     });
//     if (!task) return res.status(404).json({ message: 'task not found' });
//     res.status(200).json({ message: 'task has been deleted' });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// };
