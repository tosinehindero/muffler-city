// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'pg', // Specifies that you're using PostgreSQL
    connection: {
      database: 'mufflerdb', // The name of your PostgreSQL database
      user: 'postgres', // Your PostgreSQL database user
      password: 'tosin', // Your PostgreSQL user's password
      host: 'localhost', // The host where your PostgreSQL server is running (localhost if it's on your local machine)
      port: 5432 // The port on which your PostgreSQL server is listening (5432 is the default)
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
