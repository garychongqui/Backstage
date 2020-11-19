const { ObjectID } = require('mongodb');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventsSchema = new Schema({
  event: {
    venueId: String,
    date: Date,
    //  userComment: String,
    description: String,
    stageUsed: ObjectID,
    Artist: String,
    ArtistNotes: String,
    VenueNotes: String,
    ArtistEquip: Array,
    VenueEquip: Array,
    StageLayoutImage: String
  }
});

const Events = mongoose.model('Events', eventsSchema);

module.exports = Events;
