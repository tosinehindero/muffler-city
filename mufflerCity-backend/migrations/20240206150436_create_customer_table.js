/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('customer', function (table) {
      table.increments('id').primary();
      table.string('fullname', 255).notNullable();
      table.string('phone_number', 50).notNullable();
      table.string('email').notNullable();
      table.string('password', 255).notNullable();
      table.string('username', 255).notNullable().unique();
      table.timestamps(true, true);
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('customer');
  };