const Event = require('../db/models/events');
User = require('../db/models/user');
mongoose = require('mongoose');

// ***********************************************//
// Create a task
// ***********************************************//
exports.createEvent = async (req, res) => {
  try {
    const event = new Event({
      name: req.body.name,
      date: req.body.date,
      artist: req.body.artst
      // ...req.body,
      // owner: req.user._id
    });

    await event.save();
    console.log(req);
    const theUser = await User.findOne({
      _id: req.user._id
    });
    console.log(theUser);
    theUser.event.push(event);
    await theUser.save();
    res.status(201).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getEvent = async (req, res) => res.json(req.user);

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
    const event = await Event.findOne({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!event) return res.status(404).json({ message: 'Event not found' });
    updates.forEach((update) => (event[update] = req.body[update]));
    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// ***********************************************//
// Delete a task
// ***********************************************//
exports.deleteEvent = async (req, res) => {
  try {
    const event = await event.findOneAndDelete({
      _id: req.params.id,
      owner: req.user._id
    });
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json({ message: 'Event has been deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
