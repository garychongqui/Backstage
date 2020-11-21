const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const savedStageSchema = new Schema({
  name: String,
  area: Number,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
  // width: Number,
  // depth: Number,
  // includedEquip: Array,
  // characteristics: Array,
  // indoorOrOutdoorComments: String,
  // generalComments: String
});

const SavedStage = mongoose.model('SavedStage', savedStageSchema);

module.exports = SavedStage;
