var express = require('express');
var router = express.Router();
var cek = require('../routes/cekDaftar');
var daftar = require("../routes/cekRegister");

router.get('/', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.post('/', cek);
router.post('/register', daftar);


module.exports = router;
