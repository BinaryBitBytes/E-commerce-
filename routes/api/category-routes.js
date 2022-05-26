const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint
//!get category by id

//!get categories

//!update category

//!create category

//!delete category by ID


router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const category_routes = await Location.findAll();
    res.status(200).json(category_routes);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const category_routes = await category_routes.findByPk(req.params.id, {
      include: [{ model: Category, through: Product, as: 'product_tags' }]
    });

    if (!category_routes) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(category_routes);
  } catch (err) {
    res.status(500).json(err);
  }
  // find one category by its `id` value
  // be sure to include its associated Products
});

// create a new category
router.post('/', async (req, res) => {
  Category.create({
    id: req.body.id,
    value: req.body.value,
    category_name: req.body.category_name
  })
    .then((newCategory) => {
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
  try {
    const category_routes = await Category.create(req.body);
    res.status(200).json(category_routes);
  } catch (err) {
    res.status(400).json(err);
  }

});


//! RESOLVE THIS FOR THE HOME WORK
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  Category.create([
    {
    category_name: 'Shirts',
    id: 0,
    value: 15
  },
  {
    category_name: 'Shorts',
    id: 10,
    value: 25
  },
  {
    category_name: 'Music',
    id: 20,
    value: 10
  },
  {
    category_name: 'Hats',
    id: 30,
    value: 20
  },
  {
    category_name: 'Shoes',
    id: 40,
    value: 50
  },
])
  .then(() => {
    res.send('Database Seeded!');
  })
  .catch((err) => {
    res.json(err);
  });  
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const category_routes = await Category.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!category-routes) {
      res.status(404).json({ message: 'No category found with this id!' });
      return;
    }

    res.status(200).json(category_routes);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
