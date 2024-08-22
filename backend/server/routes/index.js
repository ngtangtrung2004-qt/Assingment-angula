var express = require('express');
var router = express.Router();
// const checkLogin = require("../middleware/checkLogin");

/* GET home page. */
router.get('/',function(req, res, next) {
  console.log('object');
  res.render('index', { title: 'Express' });
});

module.exports = router;
