const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
  name: String,
  width: Number,
  depth: Number,
  indoorOrOutdoor: String,
  comments: String,
  anythingElse: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  equipItem: {}
  // width: Number,
  // depth: Number,
  // includedEquip: Array,
  // characteristics: Array,
  // indoorOrOutdoorComments: String,
  // generalComments: String
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
