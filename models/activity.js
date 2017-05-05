'use strict'
const Sequelize = require('Sequelize');
const db = require('./db');

const Activities = db.define('activities', {
	name: {
		type: Sequelize.STRING, allowNull: false
	},
	age_range: {
		type: Sequelize.STRING, allowNull: false, 
	}

})

module.exports = Activities;