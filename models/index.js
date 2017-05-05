const db = require('./db');
const Hotel = require('./hotel');
const Restaurant = require('./restaurant');
const Activity = require('./activity');
const Place = require('./place');


Hotel.belongsTo(Place); // PK of Place is put on Hotel as FK: idPlace
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = db;
