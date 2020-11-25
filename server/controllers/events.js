const Event = require('../db/models/events');

const mongoose = require('mongoose');

exports.createEvent = async (req, res) => {
  try {
    const theEvent = new Event({
      eventTitle: req.body.eventTitle,
      eventDate: req.body.eventDate,

      selectedPackage: req.body.selectedPackage,
      user: req.user._id
    });
    await theEvent.save();


    res.status(201).json(theEvent);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.getEvent = async (req, res) => {
  const _id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(400).json({ message: 'Can not get that equipment' });
  try {
    const event = await Event.findOne({ _id });
    if (!event) return res.status(404).send();
    res.json(event);
  } catch (error) {
    res.status(500).json({ error });
  }
};
exports.updateEvent = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['eventTitle', 'eventDate', 'selectedPackage'];
  const isValidOperation = updates.every((update) =>
    allowedUpdates.includes(update)
  );
  if (!isValidOperation)
    return res.status(400).json({ message: 'invalid updates' });
  try {
    const event = await Event.findOne({
      _id: req.params.id
    });
    if (!event) return res.status(404).json({ message: 'Event not found' });
    updates.forEach((update) => (event[update] = req.body[update]));
    await event.save();
    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({ error });
  }
};
exports.deleteEvent = async (req, res) => {
  try {
    const event = await Event.findOneAndDelete({
      _id: req.params.id
    });
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.status(200).json({ message: 'Event has been deleted' });
  } catch (error) {
    res.status(400).json({ error });
  }
};
