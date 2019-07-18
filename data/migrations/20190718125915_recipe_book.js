
exports.up = function(knex) {
    return knex.schema
    .createTable('Recipes', rec => {
        rec.increments();
        rec.string('recipe_name',128).notNullable();
    })
    .createTable('Ingredients', ing => {
        ing.increments();
        ing.string('ingredient', 128 ).notNullable();
        ing.string('Units', 128). notNullable();
    })
    .createTable('Instructions', ins => {
        ins.increments();
        ins.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('Recipe')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        ins.integer('steps_id')
            .unsigned()
            .notNullable();
        ins.integer('ingredient_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('Ingredients')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        ins.text('instruction');
        ins.float('quantity');
    })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('Instructions')
    .dropTableIfExists('Ingredients')
    .dropTableIfExists('Recipes')
  
};
