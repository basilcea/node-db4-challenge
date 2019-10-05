const express = require('express');

const Recipes = require('./scheme-model.js');

const router = express.Router();

router.get('/recipes/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: 'Failed to get Recipes' });
  }
});

router.get('/recipes/:id/shoppinglist', async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = await Recipes.getShoppingList(id);
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find Recipe with given id.' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get Recipes' });
  }
});

router.get('/recipes/:id/instructions', async (req, res) => {
  const { id } = req.params;

  try {
    const steps = await Recipes.getInstructions(id);

    if (steps.length) {
      res.json(steps);
    } else {
      res.status(404).json({ message: 'Could not find steps for given Recipe' })
    }
  } catch (err) {
    res.status(500).json({ message: 'Failed to get steps' });
  }
});

router.get('/ingredients/:id/recipes', async (req, res) => {
  const {id} = req.params
  try {
    const recipe = await Recipes.getIngredient(id);
    console.log(recipe)
    res.status(200).json(recipe);
  } catch (err) {
    res.status(500).json({ message: 'Failed to Get Recipe' });
  }
});



module.exports = router;