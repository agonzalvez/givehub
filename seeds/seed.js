const sequelize = require('../config/connection');

const { charities } = require('../models/charities');

const charitiesData = require('./charitiesData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });
//need to copy all other grps
  const charities = await Charities.bulkCreate(charitiesData, {
    individualHooks: true,
    returning: true,
  });

  for (const charities of charitiesData) {
    await Charities.create({
      ...charities,
      charities_id: charities[Math.floor(Math.random() * charities.length)].id,
    });
  }

  process.exit(0);
};


seedDatabase();