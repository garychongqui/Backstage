const router = require('express').Router();
const { getEventForArtist } = require('../../controllers/artist');

router.get('/:id', getEventForArtist);

module.exports = router;
