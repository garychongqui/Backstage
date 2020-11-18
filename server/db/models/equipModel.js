const mongoose = require('mongoose');

const equipSchema = new mongoose.Schema({
  equipment: {
    name: String,
    userDescription: String,
    icon: String
  }
});

const Equipment = mongoose.model('Equipment', equipSchema);

module.exports = Equipment;
