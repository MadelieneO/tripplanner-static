'use strict'
const Sequelize = require('Sequelize');
const db = require('./db');

const Places = db.define('places', {
	address: {
		type: Sequelize.STRING, allowNull: false
	},
	city: {
		type: Sequelize.STRING, allowNull: false
	},
	state: {
		type: Sequelize.STRING(2), allowNull: false
	},
	phone: {
		type: Sequelize.STRING, allowNull: false
	},
	location: {
		type: Sequelize.ARRAY(Sequelize.FLOAT), allowNull: false
	}

})


module.exports = Places;