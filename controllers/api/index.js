const router = require('express').Router();

const charityRoutes = require('./charityRoutes');

router.use('/charity', charityRoutes);

module.exports = router;

