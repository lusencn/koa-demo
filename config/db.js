module.exports = {
    development: {
        username: process.env.DATABASE_USERNAME_DEV || 'postgres',
        password: process.env.DATABASE_PASSWORD_DEV || 'postgres',
        database: process.env.DATABASE_NAME_DEV || 'demo',
        host: process.env.DATABASE_HOST_DEV || '127.0.0.1',
        dialect: 'postgres',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        }
    },
    production: {
        username: process.env.DATABASE_USERNAME_PRO,
        password: process.env.DATABASE_PASSWORD_PRO,
        database: process.env.DATABASE_NAME_PRO,
        host: process.env.DATABASE_HOST_PRO,
        dialect: 'postgres',
        pool: {
            max: 10,
            min: 5,
            idle: 30000
        }
    }
};
