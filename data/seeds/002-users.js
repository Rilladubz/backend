const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  return knex('users').insert([
    {
      first_name: 'Brian',
      last_name: 'Doyle',
      org_id: 1,
      email: 'brian@lambdaschool.com',
      password: bcrypt.hashSync('Lambda1', 8),
      role: 'admin'
    },
    {
      first_name: 'Joshua',
      last_name: 'Howland',
      org_id: 1,
      email: 'joshua@lambdaschool.com',
      password: bcrypt.hashSync('Lambda1', 8),
      role: 'admin'
    },
    {
      first_name: 'Matt',
      last_name: 'Rothstein',
      org_id: 2,
      email: 'matt@smartlot.com',
      password: bcrypt.hashSync('hahaha', 8),
      role: 'user'
    },
    {
      first_name: 'Kevin',
      last_name: 'Smith',
      org_id: 2,
      email: 'kevin@kevin.com',
      password: bcrypt.hashSync('hahaha', 8),
      role: 'user'
    }
  ])
}
