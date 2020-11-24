const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ownedEquipSchema = new Schema(
  {
    equipItems: Array,

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
    Items: { type: Schema.Types.ObjectId, ref: 'Package' },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
  }
);

const OwnedEquip = mongoose.model('OwnedEquip', ownedEquipSchema);

module.exports = OwnedEquip;
