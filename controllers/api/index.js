const router = require('express').Router();
const userProfileRoutes = require('./userProfileRoutes');
const charityRoutes = require('./charityRoutes');
router.use('/users', userProfileRoutes);
router.use('/charity', charityRoutes);
module.exports = router;

