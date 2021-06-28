const router = require('express').Router();
const { Mhealth } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const healthData = await Mhealth.findAll();
        res.status(200).json(healthData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET a single location
router.get('/:id', async (req, res) => {
    try {
      const healthData = await Mhealth.findByPk(req.params.id);
        if (!healthData) {
        res.status(404).json({ message: 'No data found with this id!' });
        return;
      }
  
      res.status(200).json(healthData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  // CREATE a location
  router.post('/', async (req, res) => {
    try {
      const healthData = await Mhealth.create(req.body);
      res.status(200).json(healthData);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  // DELETE a location
  router.delete('/:id', async (req, res) => {
    try {
      const healthData = await Mhealth.destroy({
        where: {
          id: req.params.id
        }
      });
  
      if (!healthDataa) {
        res.status(404).json({ message: 'No data found with this id!' });
        return;
      }
      res.status(200).json(healthData);
    } catch (err) {
      res.status(500).json(err);
    }
  });