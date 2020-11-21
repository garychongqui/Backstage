const router = require('express').Router(),
  {
    addEquipItem
    // createTask,
    // updateTask,
    // deleteTask
  } = require('../../controllers/equipmentTasks');

router.post('/', addEquipItem);
// router.put('/:id', updateTask);
// router.delete('/:id', deleteTask);

module.exports = router;
