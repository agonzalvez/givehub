const router = require('express').Router();
const {Charities, UserProfile} = require('../models');
// Import the custom middleware
const withAuth = require('../utils/auth');
// GET all charities for homepage and join with user data
router.get('/', async (req, res) => {
  try {
    const dbcharitiesData = await Charities.findAll({
      include: [
        {
          model: UserProfile, 
        attributes: ['first_name', 'last_name'], as :"charity_member"
        },
      ],
    });
    // data serialization
    const charities = dbcharitiesData.map((charities) =>
      charities.get({ plain: true })
    );
    //pass serialized data and session flag into template
    res.render('homepage', {
      charities,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// GET one charity
// Use the custom middleware before allowing the user to access the charity
//not sure if we want to use the param code for galleries?
router.get('/charities/:id', async (req, res) => {
  try {
    const dbcharitiesData = await Charities.findByPk(req.params.id);
    const charities = dbcharitiesData.get({ plain: true });
    // res.render('charities', { charities, loggedIn: req.session.loggedIn });
    res.render("charity", charities)
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Use withAuth middleware to prevent access to route
//not sure if profile should be used?
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await UserProfile.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Charities }],
    });
    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});
module.exports = router;