// const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  eventTitle: {
    type: String,
    trim: true
  },
  eventDate: {
    type: String
  },
  artist: {
    type: String,
    trim: true
  },
  // selectedPackage: Object,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

// eventsSchema.virtual('equipment, stage ', {
//   ref: 'equipment',
//   localField: '_id',
//   foreignField: 'owner'
// });

const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;

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
