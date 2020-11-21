const router = require('express').Router(),
  {
    createPackage,
    updateStage,
    deleteStage
  } = require('../../controllers/package');

router.post('/', createPackage);
router.put('/:id', updateStage);
router.delete('/:id', deleteStage);

module.exports = router;
