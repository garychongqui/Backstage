// const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema(
  {
    eventTitle: {
      type: String,
      trim: true
    },
    eventDate: {
      type: String,
      trim: true
    },
    selectedPackage: {
      type: Object
    },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;
