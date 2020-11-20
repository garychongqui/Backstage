const router = require('express').Router(),
  {
    createTask,
    updateTask,
    deleteTask
  } = require('../../controllers/equipmentTasks');

router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
