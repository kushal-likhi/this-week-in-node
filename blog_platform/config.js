var path = require('path'),
    config;

config = {
    development: {
        url: 'http://localhost:9732',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '../db/ghost-dev.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '9731'
        }
    },
    production: {
        url: 'http://nodethisweek.com',
        mail: {
            transport: 'SMTP',
            options: {
                service: 'Mailgun',
                auth: {
                    user: process.env.MAILGUN_USER,
                    pass: process.env.MAILGUN_PASS
                }
            }
        },
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '../db/ghost.db')
            },
            debug: false
        },
        server: {
            host: '127.0.0.1',
            port: '9731'
        }
    },
    testing: {
        url: 'http://127.0.0.1:2369',
        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '../db/ghost-test.db')
            }
        },
        server: {
            host: '127.0.0.1',
            port: '9730'
        }
    }
};

// Export config
module.exports = config;
