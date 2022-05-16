const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//!get category by id

//!get categories

//!update category

//!create category

//!delete category by ID


router.get('/', (req, res) => {
  try {
    const category-routes = await Location.findAll();
    res.status(200).json(category-routes);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all categories
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  try {
    const category-routes = await category-routes.findByPk(req.params.id, {
      // JOIN with travellers, using the Trip through table
      include: [{ model: Category, through: Product, as: 'product_tags' }]
    });

    if (!category-routes) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(category-routes);
  } catch (err) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  try {
    const category-routes = await Category.create(req.body);
    res.status(200).json(category-routes);
  } catch (err) {
    res.status(400).json(err);
  }

  // create a new category
});


//! RESOLVE THIS FOR THE HOME WORK
router.put('/:id', (req, res) => {
  // update a category by its `id` value
  
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const category-routes = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!category-routes) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(category-routes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
