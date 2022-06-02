const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// GET all product tags
router.get('/', async (req, res) => {
  try {
    const tagData = await Tag.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET a product tag by its id
router.get('/:id', async (req, res) => {
  try {
    const productTagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });

    if (!productTagData) {
      res.status(404).json({ message: 'No productTag found!' });
      return;
    }

    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Updates tag based on its tag_id
router.put('/:tag_id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.tag_id,
    },
  })
    .then((updatedTag) => {
      res.json(updatedTag);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

router.delete('/:id', async (req, res) => {
  try {
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!tagData) {
      res.status(404).json({ message: 'No productTag found!' });
      return;
    }

    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

