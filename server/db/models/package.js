const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema(
  {
    name: String,
    width: Number,
    depth: Number,
    stageArea: String, // make this boolean?
    comments: String,
    anythingElse: String,
    user: { type: Schema.Types.ObjectId, ref: 'Equipment' }
    // equipment: [
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'OwnedEquip'
    //   }
    // ]
  },
  { timestamps: true }
);

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
