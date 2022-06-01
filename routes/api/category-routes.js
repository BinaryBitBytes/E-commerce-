const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: [{ model: Product }],
  }).then((data) => {
    res.status(200).json(data);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

router.get('/:id', async (req, res) => {
  Category.findByPk(req.params.id,
    {
      include: [{ model: Product }],
    }).then((data) => {
      if (!data) {
        res.status(404).json({ message: 'No category found with that id!' });
        return;
      }
  
      res.status(200).json(data);
    }).catch((err) => {
      res.status(500).json(err);
    });
});

// create a new category
router.post('/', (req, res) => {
    Category.create({
      category_name: req.body.category_name
    }).then((data) => {
      res.status(200).json(data);
    }).catch((err) => {
      res.status(400).json(err);
    });
});


//! RESOLVE THIS FOR THE HOME WORK
router.put('/:id', (req, res) => {
  // update a category by its `id` value
    Category.update(
      {
        category_name: req.body.category_name
      },
    {
      where: {
        id: req.params.id,
      },
    }).then((data) => {
      res.status(200).json(data);
    }).catch((err) => {
      res.status(500).json(err);
    });
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  Category.destroy({
      where: { id: req.params.id }
    }).then((data) => {
      if (!data) {
        res.status(404).json({ message: 'No category with this id!' });
        return;
      }
      res.status(200).json(data);
    }).catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
