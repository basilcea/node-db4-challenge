const express = require('express');

const Recipes = require('./scheme-model.js');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get Recipes' });
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipes.findById(id);

    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find Recipe with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get Recipes' });
  }
});

router.get('/:id/steps', async (req, res) => {
  const { id } = req.params;

  try {
    const steps = await Recipes.findSteps(id);

    if (steps.length) {
      res.json(steps);
    } else {
      res.status(404).json({ message: 'Could not find steps for given Recipe' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get steps' });
  }
});

router.post('/', async (req, res) => {
  const recipeData = req.body;

  try {
    const recipe = await Recipes.add(RecipeData);
    console.log(recipe)
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new Recipe' });
  }
});

router.post('/:id/steps', async (req, res) => {
  const stepData = req.body;
  const { id } = req.params; 

  try {
    const recipe = await Recipes.findById(id);

    if (recipe) {
      const step = await recipes.addStep(stepData, id);
      res.status(201).json(step);
    } else {
      res.status(404).json({ message: 'Could not find Recipe with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to create new step' });
  }
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  try {
    const recipe = await Recipes.findById(id);

    if (recipe) {
      const updatedRecipe = await Recipes.update(changes, id);
      res.json(updatedRecipe);
    } else {
      res.status(404).json({ message: 'Could not find Recipe with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to update Recipe' });
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const deleted = await Recipes.remove(id);

    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find Recipe with given id' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete Recipe' });
  }
});

module.exports = router;