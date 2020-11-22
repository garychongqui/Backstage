const router = require('express').Router(),
  {
    createPackage,
    getPackage,
    updatePackage,
    deletePackage
  } = require('../../controllers/package');

router.post('/', createPackage);
router.get('/pack', getPackage);
router.put('/:id', updatePackage);
router.delete('/:id', deletePackage);

module.exports = router;
