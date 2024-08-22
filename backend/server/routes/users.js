const express = require('express');
const router = express.Router();

const UsersController = require("../controllers/userCtrl");
// const verifyToken = require("../middleware/verifyToken");
// const validationLogin = require("../middleware/validationclient");
const validationRegister = require("../middleware/validationregister")

/* CRUD post listing. */
router.get('/',UsersController.index);
router.get('/token/',UsersController.getuserbyToken);
router.get('/:id',UsersController.show);
router.post('/',validationRegister, UsersController.create);
router.post('/login/',UsersController.createSession); 
router.put('/:id',UsersController.update );
router.delete('/:id', UsersController.destroy);

module.exports = router;
/** trong này  router.get('/token/',UsersController.getuserbyToken);
router.get('/:id',UsersController.show); nếu để thằng /tokken/ sau /:id thì nó tưởng token đó là id nên nó sảy ra lỗi lấy không có dữ liệu */