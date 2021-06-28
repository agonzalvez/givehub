const sequelize = require('../config/connection');
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