const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  stage: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    // dimensions: {
    //   width: Number,
    //   depth: Number
    // },
    // environment: {
    //    boolean if ooutdoor is true, specify if there is cover.
    //   outdoor: Boolean
    // },
    // for general comments we need to create a relation between user id, comment id.
    // generalComments:{
    // }
    includedEquipment: [{ type: mongoose.Types.ObjectId, ref: 'ownedEquip' }]
  }
});

packageSchema.virtual('ownedEquip', {
  ref: 'ownedEquip',
  localField: '_id',
  foreignField: 'owner'
});

packageSchema.methods.toJSON = function () {
  const package = this;
  const packageObject = package.toObject();
  return packageObject;
};

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
