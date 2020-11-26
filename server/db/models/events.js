// const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    eventTitle: {
      type: String,
      trim: true
    },
    eventDate: String,
    selectedPackage: Object,
    status: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);

const Event = mongoose.model('Event', eventSchema);

module.exports = Event;

// const mongoose = require('mongoose');

// const repairSchema = new mongoose.Schema({
//   repair: {
//     type: String,
//     trim: true,
//     required: true
//   },
//   description: {
//     type: String,
//     trim: true,
//     required: true
//   },
//   price: {
//     type: String,
//     trim: true
//   },
//   sameday: {
//     type: Boolean
//   },
//   averagetime: {
//     type: String,
//     trim: true
//   },
//   bikeshop: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Bikeshop'
//   },
//   serviceOrder: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'ServiceOrder'
//   }
// });

// const Repair = mongoose.model('Repair', repairSchema);

// module.exports = Repair;
