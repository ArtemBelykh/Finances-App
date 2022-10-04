const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Stellartemvlog1!@#$',
    database: 'sys'
})

connection.connect((error) => {
    if (error) {
        return console.log('Error connection', error)
    }else {
        return console.log('Connection')
    }
})

module.exports = connection