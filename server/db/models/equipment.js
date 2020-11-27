const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const equipmentSchema = new Schema(
  [
    {
      name: String,
      description: {
        type: String,
        trim: true,
        default: 'No description provided'
      },
      quantity: Number,
      user: { type: Schema.Types.ObjectId, ref: 'User' }
    }
  ],
  {
    timestamps: true
  }
);
const Equipment = mongoose.model('Equipment', equipmentSchema);
module.exports = Equipment;
