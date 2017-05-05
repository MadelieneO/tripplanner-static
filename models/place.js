'use strict'
const Sequelize = require('Sequelize');
const db = new Sequelize('postgres//localhost:5432/tripplanner');


const Place = db.define('place', {
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
		type: Sequelize.ARRAY(Seqeulize.FLOAT), allowNull: false
	}

})

db.sync();
module.exports = db;