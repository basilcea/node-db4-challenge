
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('Recipes').insert([
        {id: 1, recipe_name: 'Fried Rice'},
        {id: 2, recipe_name: 'Native Soup'},
        {id: 3, recipe_name: 'Yamarita'}
      ]);
    });
};
