const sequelize = require('../config/connection');
const { Charities } = require('../models');
console.log(Charities);
const charitiesData = require('./charitiesData.json');
const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    //need to copy all other grps
    const charities = await Charities.bulkCreate(charitiesData, {
      individualHooks: true,
      returning: true,
    });
    // for (const charities of charitiesData) {
    //   await Charities.create({
    //     ...charities,
    //     charities_id: charities[Math.floor(Math.random() * charities.length)].id,
    //   });
    // }
    process.exit(0);
  }
  catch (err) {
    console.log(err);
  };
}
seedDatabase();