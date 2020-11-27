const router = require('express').Router(),
  {
    addEquipList,
    getEquipItem,
    updateEquipItem,
    deleteEquipItem
  } = require('../../controllers/equipment');

router.post('/', addEquipList);
router.get('/:id', getEquipItem);
router.put('/:id', updateEquipItem);
router.delete('/:id', deleteEquipItem);

module.exports = router;
