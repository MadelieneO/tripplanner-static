const router = require('express').Router();
const Promise = require('bluebird');
const fs = require('fs');
const Hotel = require('../models/hotel.js');
const Restaurant = require('../models/restaurant.js');
const Activity = require('../models/activity.js');

router.get('/', function(req, res, next) {
  var outerScopeContainer = {};
  Hotel.findAll()
  .then(function (dbHotels) {
    outerScopeContainer.dbHotels = dbHotels;
    return Restaurant.findAll();
  })
  .then(function (dbRestaurants) {
    outerScopeContainer.dbRestaurants = dbRestaurants;
    return Activity.findAll();
  })
  .then(function (dbActivities) {
    res.render('index', {
      templateHotels: outerScopeContainer.dbHotels,
      templateRestaurants: outerScopeContainer.dbRestaurants,
      templateActivities: dbActivities
    });
  })
  .catch(next);  
})

// ex: accessing: http://localhost:3000/bootstrap/dist/css/bootstrap.min.css 
router.get('/bootstrap/:filename', function(req, res, next) {
  let filenameAndDir = req.params.filename;
  let contents = fs.readFileSync('../node_modules/bootstrap/dist/', filenameAndDir); 
  res.send(contents);
})

module.exports = router;
