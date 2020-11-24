const Event = require('../db/models/events');
const User = require('../db/models/user');
const Package = require('../db/models/package');
const mongoose = require('mongoose');
// const { ResponsiveEmbed } = require('react-bootstrap');

exports.createEvent = async (req, res) => {
  try {
    const theUser = await User.findOne({ _id: req.user._id });
    const thePackage = await Package.findOne({
      _id: req.body.data.selectedPackage
    });
    const theEvent = new Event({
      ...req.body.data,
      user: theUser
    });
    await theEvent.save();
    theUser.events.push(theEvent);
    await theUser.save();
    res.status(201).json(theEvent);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.getEvent = async (req, res) => {
  console.log('rin');
  // const theEvent = Events.findOne({ _id: req.params.id });
  // console.log(theEvent);
};

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
