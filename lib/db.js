if (process.platform === 'win32') {
    var knex = require('knex')({
        client: 'mariasql',
        connection: {
            host: 'localhost',
            user: 'root',
            password: '',
            db: 'nodeflix'
        }
    })
}

module.exports = knex;