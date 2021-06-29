const router = require('express').Router();
const { Charities } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const charityData = await Charities.findAll();
        res.status(200).json(charityData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single location
router.get('/:id', async (req, res) => {
    try {
      const charityData = await Charities.findByPk(req.params.id);
        if (!charityData) {
        res.status(404).json({ message: 'No data found with this id!' });
        return;
      }
  
      res.status(200).json(charityData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a location
  router.post('/', async (req, res) => {
    try {
      const charityData = await Charities.create(req.body);
      res.status(200).json(charityData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a location
  router.delete('/:id', async (req, res) => {
    try {
      const charityData = await Charities.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!charityDataa) {
        res.status(404).json({ message: 'No data found with this id!' });
        return;
      }
      res.status(200).json(charityData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;