const db = require('../data/dbConfig.js')

const getCommentsByProject = id => {
  return db('comments').where({ project_id: id })
}

const removeComment = id => {
  return db('comments')
    .where({ id })
    .del()
}

module.exports = { getCommentsByProject, removeComment }
