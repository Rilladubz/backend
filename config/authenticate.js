const jwt = require('jsonwebtoken')

const jwtKey = process.env.JWT_SECRET || 'Secrets'

const authenticate = (req, res, next) => {
  const token = req.get('Authorization')

  if (token) {
    jwt.verify(token, jwtKey, (err, decoded) => {
      if (err) return res.status(401).json(err)
      req.decoded = decoded
      if (decoded.role === 'admin' || decoded.id === req.params.id) {
        next()
      } else {
        return res.status(401).json({ message: 'Unauthorized' })
      }
    })
  } else {
    return res.status(401).json({ message: 'Please log in' })
  }
}

module.exports = { authenticate }
