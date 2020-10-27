let express = require('express');
let router = express.Router();
const request = require('request');
let config = require('../config/config.js');

const getData = (region) => {
  return new Promise((resolve, reject) => {
    request(config.url, (err, res, body) => {
      if(err){
        reject(new Error(err));
      }else{
        let info = JSON.parse(body).results[0];
        resolve(info)
      }

    });
  });

};
/* GET */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

/* POST */
// router.post('/submit-form', function (req, res, next) {
router.get('/submit-form', function (req, res, next) {
  const region = req.body.region;
  // getData(region).then((cases) => res.render('postResponse', { 'response': cases}));
  getData(region).then((cases) =>res.send(cases));
});
  


module.exports = router;
