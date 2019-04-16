const db = require('../data/dbConfig.js')

const getCommentsByProject = id => {
  return db('comments').where({ project_id: id })
}

module.exports = { getCommentsByProject }
