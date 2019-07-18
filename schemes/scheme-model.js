const db = require('../data/dbConfig')


async function getRecipes() {
    return db('recipes')
  }


async function getShoppingList(recipeId){

    return db('Instructions as ins' )
    .select('ing.ingredient','ins.quantity', 'ing.units')
    .join('Ingredients as ing', 'ing.id','ins.ingredient_id')
    .where('ins.recipe_id', recipeId)
}

async function getInstructions(recipeId){
    return db('Instructions')
    .select('steps_no','instruction')
    .where('recipe_id', recipeId)
    .orderBy('steps_no')
}

async function getIngredient(id) {
    return db('Instructions as ins')
    .select('ing.ingredient','re.recipe_name' )
    .join('Ingredients as  ing' , 'ing.id', 'ins.ingredient_id')
    .join('Recipes as re', 're.id', 'ins.recipe_id' )
    .where('ins.ingredient_id', id)
      ;
  }
  

  
  module.exports ={
      getRecipes , getShoppingList, getInstructions, getIngredient
  }