const router = require('express').Router(),
  {
    addEquipList,
    getEquipItem,
    getAllEquip,
    updateEquipItem,
    deleteEquipItem
  } = require('../../controllers/equipment');

router.post('/', addEquipList);
router.get('/:id', getEquipItem);
router.get('/', getAllEquip);
router.put('/:id', updateEquipItem);
router.delete('/:id', deleteEquipItem);

module.exports = router;
