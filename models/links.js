const db = require('../data/dbConfig.js')

const getLinksByProject = id => {
  return db('links').where({ project_id: id })
}

const addLink = link => {
  return db('links')
    .insert(link)
    .returning('id')
}

module.exports = { getLinksByProject, addLink }
