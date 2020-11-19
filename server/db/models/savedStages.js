const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const savedStagesSchema = new Schema({
  stage: {
    name: String,
    width: Number,
    depth: Number,
    includedEquip: Array,
    characteristics: Array,
    indoorOrOutdoorComments: String,
    generalComments: String
  }
});

const SavedStages = mongoose.model('SavedStages', savedStagesSchema);

module.exports = SavedStages;
