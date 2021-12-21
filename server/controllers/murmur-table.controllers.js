const connection = require('../db/db');
// Murmur table
!async function createTable() {
    const tableQuery = `CREATE TABLE IF NOT EXISTS murmur_table (
        id INT PRIMARY KEY AUTO_INCREMENT,
        url VARCHAR(2083) NOT NULL,
        text VARCHAR(2000) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        likecount INT(10),
        useremail VARCHAR(35))`;

    connection.query(tableQuery);
}();


module.exports.addMurmur = (req, res)=>{
    let body = req.body;
    var query = 'INSERT INTO murmur_table SET ?';
    connection.query(query, body, function (err, results, fields) {
        if (err) throw err
        res.send(JSON.stringify(results))
    });
}
module.exports.getMurmur = (req, res)=>{
    var query = 'select * from murmur_table ORDER BY created_at DESC';
    connection.query(query, function (err, results, fields) {
        if (err) throw err
        res.send(results)
    });
}
module.exports.getMurmurByUser = (req, res)=>{
    var query = "select * from murmur_table where useremail = ?";
    connection.query(query, [req.params.useremail], async function (err, results, fields) {
        if (err) throw err
        res.send(results)
    });
}
module.exports.deleteMurmur = (req, res)=>{
    const id = req.params.id;
    connection.query(`DELETE FROM murmur_table WHERE id = ${id}`, function (err, results, fields) {
        if (err) throw err
        res.send(results)
    });
}
module.exports.getMurmurWithUser = (req, res)=>{
    var sql = "SELECT murmur_table.id AS murmur_id, murmur_table.url AS url, murmur_table.text AS text, murmur_table.created_at AS created_at, murmur_table.likecount AS likecount, murmur_users.name AS murmur_users FROM murmur_table JOIN murmur_users ON murmur_table.useremail = murmur_users.email ORDER BY murmur_table.created_at DESC";
    connection.query(sql, async function (err, results, fields) {
        if (err) throw err
        res.send(results)
    });
}
