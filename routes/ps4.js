let express = require('express');
let router = express.Router();
const request = require('request');
let config = require('../config/config.js');

const getData = (postalCode) => {
  console.log(config);
  return new Promise((resolve, reject) => {
    console.log(config.url + "us." + postalCode + "?api_id=" + config.apiId + "&app_key=" + config.apiKey);
    request(config.url+"us."+postalCode+"?app_id="+config.apiId+"&app_key="+config.apiKey, (err, res, body) => {
      if(err){
        reject(new Error(err));
      }else{
        let info = JSON.parse(body);
        resolve(info)
      }

    });
  });

};

/* POST */
// router.post('/submit-form', function (req, res, next) {
router.post('/', function (req, res, next) {
  const postalCode = req.body.postalCode;
  getData(postalCode).then((cases) => res.render('postResponse', { 'response': cases, 'postalCode': postalCode}));
  // getData(postalCode).then((cases) =>res.send(cases));
});
  


module.exports = router;
