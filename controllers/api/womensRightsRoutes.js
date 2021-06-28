const router = require('express').Router();
const { Women } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const womensData = await Women.findAll();
        res.status(200).json(womensData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single location
router.get('/:id', async (req, res) => {
    try {
      const womensData = await Women.findByPk(req.params.id);
        if (!womensData) {
        res.status(404).json({ message: 'No data found with this id!' });
        return;
      }
  
      res.status(200).json(womensData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a location
  router.post('/', async (req, res) => {
    try {
      const womensData = await Women.create(req.body);
      res.status(200).json(womensData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a location
  router.delete('/:id', async (req, res) => {
    try {
      const womensData = await Women.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!womensData) {
        res.status(404).json({ message: 'No data found with this id!' });
        return;
      }
      res.status(200).json(womensData);
    } catch (err) {
      res.status(500).json(err);
    }
  });