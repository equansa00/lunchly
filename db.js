/** Database for lunchly */

const pg = require("pg");

const db = new pg.Client("postgresql://nanaquansah:1Chriss@localhost/lunchly");

db.connect();

module.exports = db;
