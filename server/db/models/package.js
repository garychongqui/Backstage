const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({
  name: String,
  area: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
  // equipment: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'OwnedEquip'
  // },
  // stages: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'Package'
  // },
  // width: Number,
  // depth: Number,
  // includedEquip: Array,
  // characteristics: Array,
  // indoorOrOutdoorComments: String,
  // generalComments: String
});
// packageSchema.virtual('equipment, ', {
//   ref: 'equipment',
//   localField: '_id',
//   foreignField: 'owner, stages'
// });

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
