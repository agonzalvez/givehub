const router = require('express').Router();
const { UserProfile, Charities, UserList } = require('../../models');
// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await UserProfile.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
     // charity_name: req.body.charity_name,
    });
    req.session.save(() => {
      req.session.loggedIn = true;
      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await UserProfile.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    const validPassword = await dbUserData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }
    req.session.save(() => {
      req.session.loggedIn = true;
      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// GET a single location
router.get('/:id', async (req, res) => {
    try {
      const userProfileData = await UserProfile.findByPk(req.params.id, {
     include: [{model: Charities, through: UserList, as :"favorite_charities"}]
      });
        if (!userProfileData) {
        res.status(404).json({ message: 'No data found with this id!' });
        return;
      }
      res.status(200).json(userProfileData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
module.exports = router;
