const router = require('express').Router(),
  {
    createPackage,
    updateStage,
    deleteStage,
    getAllPackages,
    updatePackage,
    deletePackage
  } = require('../../controllers/package');

router.get('/', getAllPackages);
router.post('/', createPackage);
router.get('/pack', getPackage);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage);

module.exports = router;
