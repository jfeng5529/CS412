var express = require('express');
var router = express.Router();

/* GET */
router.get('/get', function(req, res, next) {
  res.render('getResponse', { 'string': 'Hey now' });
});

/* POST */
router.post('/post', function (req, res, next) {
  res.render('postResponse', { 'response': req.body.inp, 'length':req.body.inp.length});
});


module.exports = router;
