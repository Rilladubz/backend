const db = require('../data/dbConfig.js');
const Users = require('../models/users.js');

test.todo('getUserById');
test.todo('updateUser');
test.todo('getCompanyName');

describe('users model', () => {
    beforeEach(async () => { 
        return await db.raw(
          'TRUNCATE "organizations", users, projects, comments RESTART IDENTITY CASCADE'
        );
    });

    describe('newOrg()', () => {
        it('should add the new organization', async () => {
          await Users.newOrg({ name: 'Company' })
          const users = await db('organizations')
          expect(users).toHaveLength(1)
        })
    
        it('should not add a new organization if it already exists', async () => {
          await Users.newOrg({ name: 'Lambda School' })
          const users = await db('organizations')
        //   await console.log("users:", users);
          expect(users).toHaveLength(1)
        })
    
        it('should return company id of existing', async () => {
          const [org] = await Users.newOrg({ name: 'Lambda School' });
          expect(org).toBe(1)
        })
    
        it('should return company id of new', async () => {
          const [org] = await Users.newOrg({ name: 'Lambda School 2' })
        //   await console.log("new org:", org);
          expect(org).toBe(1)
        })
      })

    describe('insert user', () => {
        it('should insert a user', async () => {
            const [org] = await Users.newOrg({
                name: "new company"
            });
            
            await Users.newUser({
                first_name: "Kevin",
                last_name: "Smith",
                org_id: org,
                email: "thisisanewemail@newemailforsure.com",
                password: "password"
            });
            const users = await db('users');
            expect(users).toHaveLength(1);
        });
    });

    describe('get', () => {
        it('should get a user', async () => {
            const [org] = await Users.newOrg({
                name: "totally new company"
            });

            const targetUser = await Users.newUser({
                first_name: 'Kevin',
                last_name: 'Smith',
                org_id: org,
                email: 'kevin@newuser.com',
                password: 'password'
            });

            const user = await Users.getUser(targetUser.email);
            console.log('user:', user);
            expect(user.length).toBe(1);
        });
    });
});