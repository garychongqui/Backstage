const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ownedEquipSchema = new Schema({
  equipItem: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    icon: {
      type: String
    }
  }
});

const OwnedEquip = mongoose.model('ownedEquip', ownedEquipSchema);

module.exports = OwnedEquip;
