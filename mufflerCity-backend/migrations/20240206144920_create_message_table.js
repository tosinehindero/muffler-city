/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('message', function (table) {
      table.increments('id').primary();
      table.string('name', 255).notNullable();
      table.string('phone_number', 50).notNullable();
      table.string('email').notNullable();
      table.string('message', 255).notNullable();
      table.timestamps(true, true);
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('message');
  };
