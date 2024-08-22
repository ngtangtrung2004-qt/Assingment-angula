const express = require('express');
const router = express.Router();
const TaskController = require("../controllers/taskCtrl");
const verifyToken = require("../middleware/verifyToken");
/* CRUD post listing. */
router.get('/',TaskController.index);
router.get('/id/:id',TaskController.show);
router.get('/:iduser',TaskController.show1);
router.post('/', TaskController.create);
router.put('/:id',TaskController.update );
router.delete('/:id', TaskController.destroy);

module.exports = router;
