const db = require('../data/dbConfig.js')

const newOrg = async org => {
  const [company] = await db('organizations').where(org)
  if (company) {
    return [company.id]
  } else {
    return db('organizations')
      .returning('id')
      .insert(org)
  }
}

const newUser = async user => {
  const [id] = await db('users')
    .returning('id')
    .insert(user)
  return db('users')
    .where({ id })
    .first()
}

const getUser = email => {
  return db('users')
    .where({ email })
    .first()
}

module.exports = { newOrg, newUser, getUser }
