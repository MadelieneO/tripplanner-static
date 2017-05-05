'use strict'
const Sequelize = require('Sequelize');
const db = require('./db');

const Hotels = db.define('hotels', {
	name: {
		type: Sequelize.STRING, allowNull: false
	},
	num_stars: {
		type: Sequelize.FLOAT, allowNull: false, 
	},
	amenities: {
		type: Sequelize.STRING, allowNull: false
	}

})

module.exports = Hotels;