/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('vehicle', function (table) {
      table.increments('id').primary();
      table.string('vehicle_make', 255).notNullable();
      table.string('vehicle_year', 255).notNullable();
      table.string('vehicle_model', 255).notNullable();
      table.datetime('service_date').notNullable();
      table.string('service_needed', 255).notNullable();
      table.timestamps(true, true);
      
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema.dropTable('vehicle');
  };


