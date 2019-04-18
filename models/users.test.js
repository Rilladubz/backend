const db = require('../data/dbConfig.js');
const Users = require('./users.js');

describe('users model', () => {
    beforeEach(async () => { 
        return await db.raw(
          'TRUNCATE "organizations", users, projects, comments RESTART IDENTITY CASCADE'
        );
    });

    describe('insert user', () => {
        it('should insert a user', async () => {
            await Users.newUser({
                first_name: "Tim",
                last_name: "Martin",
                company: "Newer Company",
                email: "new1@user.com",
                password: "password"
            });

            await Users.newUser({
                first_name: "Corey",
                last_name: "Bort",
                company: "Newest Company",
                email: "new2@user.com",
                password: "password"
        });

            const users = await db('users');
            expect(users).toHaveLength(2);
            
        });
    });

    describe('get', () => {
        it('should get a user', async () => {
            await Users.newUser({
                first_name: "Corey",
                last_name: "Bort",
                company: "Newest Company",
                email: "new2@user.com",
                password: "password"
            });

            const user = await Users.getUser();
            expect(user.length).toBe(1);
        });
    });
});