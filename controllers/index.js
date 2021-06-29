const router = require('express').Router();
const userRoutes = require('./userRoutes');
const lgbtRoutes = require('./lgbtRoutes');
const mentalHealthRoutes = ('./mentalHealthRoutes');
const socialJusticeRoutes = ('./socialJusticeRoutes');
const womensRightRoutes = ('./womensRightRoutes');

router.use('./lgbtRoutes', lgbtRoutes);
router.use('./mentalHealthRoutes', mentalHealthRoutes);
router.use('./socialJusticeRoutes', socialJusticeRoutes);
router.use('./womensRightRoutes', womensRightRoutes);

module.exports = router;
