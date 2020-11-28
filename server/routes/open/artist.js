const router = require('express').Router();
const {
  getEventForArtist,
  setHasBeenSeen
} = require('../../controllers/artist');

router.get('/:id', getEventForArtist);
router.patch('/:id', setHasBeenSeen);

module.exports = router;
