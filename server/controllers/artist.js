const Events = require('../db/models/events');

exports.getEventForArtist = async (req, res) => {
  try {
    console.log('has run');
    const theEvent = await Events.findOne({ _id: req.params.id });
    res.status(200).json(theEvent);
  } catch (error) {
    status(400).json(error);
  }
};
