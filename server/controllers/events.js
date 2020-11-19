const Stage = require('../db/models/events'),
  mongoose = require('mongoose');

// ***********************************************//
// Create a task
// ***********************************************//
exports.createEvent = async (req, res) => {
  try {
    const stage = await new Stage({
      ...req.body,
      owner: req.user._id
    });
    await stage.save();
    res.status(200).send(stage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// ***********************************************//
// Update a task
// ***********************************************//

exports.updateEvent = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['description', 'completed', 'dueDate'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });

  try {
    const stage = await Stage.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!stage) return res.status(404).json({ message: 'Stage not found' });
    updates.forEach((update) => (stage[update] = req.body[update]));
    await stage.save();
    res.status(200).json(stage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// ***********************************************//
// Delete a task
// ***********************************************//
exports.deleteEvent = async (req, res) => {
  try {
    const stage = await stage.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!stage) return res.status(404).json({ message: 'Stage not found' });
    res.status(200).json({ message: 'Stage has been deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
