const router = require('express').Router(),
  {
    createStage,
    updateStage,
    deleteStage
  } = require('../../controllers/package');

router.post('/', createStage);
router.put('/:id', updateStage);
router.delete('/:id', deleteStage);

module.exports = router;
