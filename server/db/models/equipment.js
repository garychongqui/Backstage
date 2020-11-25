const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const equipmentSchema = new Schema(
  {
    // equipItems: Array,

    name: {
      type: String,
      trim: true
    },
    quantity: {
      type: Number
    },
    description: {
      type: String,
      trim: true
    },
    // Items: { type: Schema.Types.ObjectId, ref: 'Package' },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
);

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
