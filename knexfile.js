const password = process.env.PG_PW || 'password'
const production = process.env.DATABASE_URL || {
  database: 'productqueueprod',
  user: 'postgres',
  password: password
}

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: 'tadpoles',
      database: 'productqueuedev'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
    // pool: {
    //   afterCreate: (conn, done) => {
    //     conn.run('PRAGMA foreign_keys = ON', done)
    //   }
    // }
  },

  testing: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      user: 'postgres',
      password: password,
      database: 'productqueuetest'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: production,
    migrations: {
      tableName: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  }
}
