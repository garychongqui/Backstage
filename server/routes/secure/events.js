const router = require('express').Router(),
  {
    createEvent,
    updateEvent,
    deleteEvent,
    getEvent
  } = require('../../controllers/events');

router.post('/', createEvent);
router.put('/:id', updateEvent);
router.get('/:id', getEvent);
router.delete('/:id', deleteEvent);

module.exports = router;
