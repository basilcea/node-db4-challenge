
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('Ingredients').insert([
        {id: 1, ingredient: 'Yam', units:'Tubers'},
        {id: 2, ingredient: 'Rice', units:'Cups'},
        {id: 3, ingredient: "Vegetable", units:'Heaps'},
        {id: 4, ingredient: "Water", units:'Cups'},
        {id: 5, ingredient: "Fish", units:'Kg'},
        {id: 6, ingredient: "Meat", units:'Kg'},
        {id: 7, ingredient: "Salt", units:'Teaspoons'},
      ]);
    });
};
