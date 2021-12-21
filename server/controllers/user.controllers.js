const connection = require('../db/db');
// Signup  
!async function createTable() {
    const tableQuery = `CREATE TABLE IF NOT EXISTS murmur_users (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        password VARCHAR(25))`;

    connection.query(tableQuery);
}();

module.exports.signup = (req, res) => {
    let body = req.body;
    let query = 'INSERT INTO murmur_users SET ?';
    connection.query(query, body, function (err, results, fields) {
        if (err) throw err
        res.send(JSON.stringify(results))
    });
}
module.exports.login = (req, res) => {
    var query = "select * from murmur_users where email = ?";
    connection.query(query, [req.body.email], async function (err, results, fields) {
        if (err) throw err
        res.send(results)
    });
}
module.exports.getuser = (req, res) => {
    let query = 'select * from murmur_users';
    connection.query(query, function (err, results, fields) {
        if (err) throw err
        res.send(results)
    });
}
module.exports.getUsersProfile = (req, res) => {
    var query = "select * from murmur_users where email = ?";
    connection.query(query, [req.params.email], async function (err, results, fields) {
        if (err) throw err
        res.send(results)
    });
}
module.exports.deleteUser = (req, res) => {
    const id = req.params.id;
    let query = `DELETE FROM murmur_users WHERE id = ${id}`;
    connection.query(query, function (err, results, fields) {
        if (err) throw err
        res.send(results)
    });
}