const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const packageSchema = new Schema(
  {
    name: String,
    width: Number,
    depth: Number,
    stageArea: {
      type: Boolean,
      default: false
    },
    comments: String,
    anythingElse: String,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
  },
  { timestamps: true }
);
const Package = mongoose.model('Package', packageSchema);
module.exports = Package;
