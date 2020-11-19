const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ownedEquipSchema = new Schema({
  equipItem: {
    name: String,
    //  userComment: String,
    description: String
    // icon: String,
  }
});

const OwnedEquip = mongoose.model('ownedEquip', ownedEquipSchema);

module.exports = OwnedEquip;
