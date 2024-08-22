const express = require('express');
const router = express.Router();
const DuanController = require("../controllers/duanCtrl");

/* CRUD post listing. */
router.get('/productall/',DuanController.index2);
router.get('/:leader',DuanController.show1);
router.get('/id/:id',DuanController.show);
router.get('/',DuanController.index);
router.post('/', DuanController.create);
router.put('/:id',DuanController.update );
router.delete('/:id', DuanController.destroy);

module.exports = router;
