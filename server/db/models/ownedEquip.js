const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ownedEquipSchema = new Schema({
  equipItem: {
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
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User, Package' }
    // icon: {
    //   type: String

    //   //required: true, (<====did not require just incase)
    // }
  }
});

const OwnedEquip = mongoose.model('OwnedEquip', ownedEquipSchema);

module.exports = OwnedEquip;
