const db = require('../data/dbConfig.js')
const Users = require('../models/users.js')

describe('Users model', () => {
  describe('newOrg()', () => {
    it.skip('should add the new organization', async () => {
      await Users.newOrg({ name: 'Company' })
      const users = await db('organizations')
      expect(users).toHaveLength(3)
    })

    it.skip('should not add a new organization if it already exists', async () => {
      await Users.newOrg({ name: 'Lambda School' })
      const users = await db('organizations')
      expect(users).toHaveLength(3)
    })

    it('should return company id of existing', async () => {
      const [org] = await Users.newOrg({ name: 'Lambda School' })
      expect(org).toBe(1)
    })

    it.skip('should return company id of new', async () => {
      const [org] = await Users.newOrg({ name: 'Lambda School 2' })
      expect(org).toBe(4)
    })
  })

  describe('newUser()', () => {
    const testUser = {
      first_name: 'Kevin',
      last_name: 'Smith',
      org_id: 1,
      email: 'kevin@newuser.com',
      password: 'password'
    }

    it('should add a new user', async () => {
      await Users.newUser(testUser)
      const users = db('users')
      expect(users).toHaveLength(5)
    })
  })
})
