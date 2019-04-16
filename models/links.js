const db = require('../data/dbConfig.js')

const getLinksByProject = id => {
  return db('links').where({ project_id: id })
}

module.exports = { getLinksByProject }
