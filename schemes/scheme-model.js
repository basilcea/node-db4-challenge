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

async function update(changes ,id) {
    await  db('schemes').where('id', id).update(changes)
      return findById(id) ;
  }
  
  async function remove(id) {
 await db('schemes').where('id', id).del()
    return find()
  }
  
  module.exports ={
      getRecipes , getShoppingList, getInstructions, update , remove
  }