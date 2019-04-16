const router = require('express').Router()

const Projects = require('../models/projects.js')
const Users = require('../models/users.js')
const Comments = require('../models/comments.js')
const Links = require('../models/links.js')

router.get('/', async (req, res) => {
  if (req.user_id.toString() === req.params.id || req.admin) {
    try {
      const projects = await Projects.getAll()
      res.status(200).json(projects)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Server error retrieving projects' })
    }
  } else {
    return res.status(401).json({ message: 'Unauthorized' })
  }
})

router.get('/:id', async (req, res) => {
  if (req.user_id.toString() === req.params.id || req.admin) {
    try {
      const projects = await Projects.getAllByUserId(req.params.id)
      res.status(200).json(projects)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Server error retrieving projects' })
    }
  } else {
    return res.status(401).json({ message: 'Unauthorized' })
  }
})

router.get('/:id/:projectId', async (req, res) => {
  if (req.user_id.toString() === req.params.id || req.admin) {
    try {
      const project = await Projects.getByProjectId(req.params.projectId)
      const user = await Users.getUserById(req.params.id)
      const links = await Links.getLinksByProject(project.id).map(
        async link => {
          const linkUser = await Users.getUserById(link.user_id)
          delete link.user_id
          delete link.project_id
          delete linkUser.password
          return {
            ...link,
            user: linkUser
          }
        }
      )
      const comments = await Comments.getCommentsByProject(project.id).map(
        async comment => {
          const commentUser = await Users.getUserById(comment.user_id)
          delete comment.user_id
          delete comment.project_id
          delete commentUser.password
          return {
            ...comment,
            user: commentUser
          }
        }
      )

      delete user.password

      const returning = {
        ...project,
        user: user,
        links: links,
        comments: comments
      }
      res.status(200).json(returning)
    } catch (err) {
      console.log(err)
      res.status(500).json({ message: 'Server error retrieving project' })
    }
  } else {
    return res.status(401).json({ message: 'Unauthorized' })
  }
})

module.exports = router
