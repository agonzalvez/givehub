const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;
// using herouku
if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
//only these statements if not using heroku
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,

    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    }
  );
}
module.exports = sequelize;