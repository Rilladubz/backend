const db = require('../data/dbConfig.js')

const getAll = () => {
  return db('projects')
    .join('users', 'projects.user_id', 'users.id')
    .join('organizations', 'organizations.id', 'users.org_id')
}

module.exports = { getAll }
