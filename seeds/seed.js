const sequelize = require('../config/connection');
const { Lgbt } = require('../models/Lgbt');

const lgbtData = require('./lgbtData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const lgbt = await Lgbt.bulkCreate(lgbtData, {
    individualHooks: true,
    returning: true,
  });

  for (const lgbt of lgbtData) {
    await Lgbt.create({
      ...lgbt,
      lgbt_id: lgbt[Math.floor(Math.random() * lgbt.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();