let express = require('express');
let router = express.Router();
const request = require('request');
const fetch = require('node-fetch');
const redis = require('redis');
const client = redis.createClient();
const {promisify} = require('util');
const asyncSet = promisify(client.set).bind(client);
const asyncGet = promisify(client.get).bind(client);
const asyncExists = promisify(client.exists).bind(client);
const asyncExpires = promisify(client.expire).bind(client);
let config = require('../config/config.js');
const { stat } = require('fs');

client.flushdb((err, response)=>{
  if (err){
    throw new Error('Theres an error flushing the db');
  }
})

const getData = async (postalCode) => {
  
  var out = await fetch(config.url+postalCode+"?app_id="+config.apiId+"&app_key="+config.apiKey);
  var data = await out.text();
  return data;

};

/* POST */
// router.post('/submit-form', function (req, res, next) {
router.post('/', async (req, res, next) => {
  const postalCode = req.body.postalCode;
  let match = await asyncExists(postalCode)
  if (match){
    const data = await asyncGet(postalCode);
    res.send({response: data, cached: true });
  }
  else{
    const data = await getData(postalCode);
    await asyncSet(postalCode, data);
    await asyncExpires(postalCode, 15);

    res.send({ response: data, cached: false });
  }
  
  // getData(postalCode).then((cases) =>res.send(cases));
});
  
router.get('/:postalCode', async (req, res, next) => {
  const postalCode = req.params.postalCode;
  let match = await asyncExists(postalCode);
  if (match) {
    const data = await asyncGet(postalCode);
    res.send({ response: data, cached: true });
  }
  else {
    const data = await getData(postalCode);
    await asyncSet(postalCode, data);
    await asyncExpires(postalCode, 15);

    res.send({ response: data, cached: false });
  }

  // getData(postalCode).then((cases) =>res.send(cases));
});


module.exports = router;
