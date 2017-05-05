'use strict'
const Sequelize = require('Sequelize');
const db = require('./db');

const Restaurants = db.define('restaurants', {
	name: {
		type: Sequelize.STRING, allowNull: false
	},
	cuisine: {
		type: Sequelize.STRING, allowNull: false
	},
	price: {
		type: Sequelize.INTEGER, validate: {min: 1, max: 5}
	}

})


module.exports = Restaurants;