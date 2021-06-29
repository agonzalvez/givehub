const sequelize = require('../config/connection');

const { Lgbt, mentalHealth, socialJustice, mentalHealth} = require('../models/Lgbt');

const lgbtData = require('./lgbtData.json');
const mhealth = require('./lgbtData.json');
const socialJustice_Data_seeds = require('./lgbtData.json');
const womensData = require('./lgbtData.json');

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


const { Mhealth } = require('../models/mentalHealth');

const mhdata = require('./mhData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const healthMental = await healthMental.bulkCreate(mhdata, {
        individualHooks: true,
        returning: true, 
    });

    for (const healthMental of mhdata) {
        await healthMental.create ({
            ...healthMental,
            healthMental_id: healthMental[Math.floor(Math.random() * Mhealth.length)].id,//dblcheck
        });
    }
    process.exit(0)
};




seedDatabase();