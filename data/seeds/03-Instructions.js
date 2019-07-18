exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('Instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('Instructions').insert([
        {id: 1, recipe_id: 1, steps_no:1,ingredient_id:4,instruction:'Put water in the cooking pot',quantity:3},
        {id: 2, recipe_id: 2, steps_no:1,ingredient_id:4,instruction:'Put water in the cooking pot',quantity:5},
        {id: 3, recipe_id: 1, steps_no:2,ingredient_id:2,instruction:'Put Rice in water',quantity:1},
        {id: 4, recipe_id: 3, steps_no:2,ingredient_id:1,instruction:'Pill yam and put in water',quantity:0.5},
        {id: 5, recipe_id: 3, steps_no:3,ingredient_id:7,instruction:'Add salt to yam',quantity:3},
     
      ]);
    });
};
