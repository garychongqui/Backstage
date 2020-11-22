const router = require('express').Router(),
  {
    createPackage,
    updateStage,
    deleteStage,
    getAllPackages
  } = require('../../controllers/package');

router.get('/', getAllPackages);
router.post('/', createPackage);
router.put('/:id', updateStage);
router.delete('/:id', deleteStage);

module.exports = router;
