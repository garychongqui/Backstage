const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const equipmentSchema = new Schema(
  {
    equipItems: Array,
    // name: {
    //   type: String,
    //   trim: true
    // },
    // quantity: {
    //   type: Number
    // },
    // description: {
    //   type: String,
    //   trim: true
    // },
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  {
    timestamps: true
    // package: { type: mongoose.Schema.Types.ObjectId, ref: 'Package' }
    // icon: {
    //   type: String

    //   //required: true, (<====did not require just incase)
    // }
  }
);

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;
