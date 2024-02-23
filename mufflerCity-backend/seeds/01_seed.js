const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('adm_user').del();

  const saltRounds = 10; 
  const hashedPassword = await bcrypt.hash('leyin12!@', saltRounds);

  await knex('adm_user').insert([
    {id: 1, username: 'mufflerAdmin01', email: 'marvo75@gmail.com', password: hashedPassword}
  ]);
};
