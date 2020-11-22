const router = require('express').Router(),
  {
    addEquipItem,
    getEquipItem,
    updateEquipItem,
    deleteEquipItem
  } = require('../../controllers/equipment');

router.post('/', addEquipItem);
router.get('/:id', getEquipItem);
router.put('/:id', updateEquipItem);
router.delete('/:id', deleteEquipItem);

module.exports = router;
