const connection = require('../db/db');
// Like table
!async function createTable() {
    const tableQuery = `CREATE TABLE IF NOT EXISTS murmur_like_table (
        id INT PRIMARY KEY AUTO_INCREMENT,
        post_id INT(10) NOT NULL,
        useremail VARCHAR(35),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;

    connection.query(tableQuery);
}();

module.exports.addLike = (req, res)=>{
    let body = req.body;
    let query = 'INSERT INTO murmur_like_table SET ?';
    connection.query(query, body, function (err, results, fields) {
      if (err) throw err
      res.send(JSON.stringify(results))
    });
}
module.exports.getLike = (req, res)=>{
    let query = 'select * from murmur_like_table ORDER BY created_at DESC';
    connection.query(query, function (err, results, fields) {
        if (err) throw err
        res.send(results)
    });
}
module.exports.getMurmurByUsersLiked = (req, res)=>{
    var query = "SELECT * FROM murmur_table JOIN murmur_like_table ON murmur_table.id = murmur_like_table.post_id";
    connection.query(query, async function (err, results, fields) {
      if (err) throw err
      res.send(results)
    });
}
module.exports.getMurmurByCurrentUsersLiked = (req, res)=>{
    var query = "SELECT * FROM murmur_table JOIN murmur_like_table ON murmur_table.id = murmur_like_table.post_id where murmur_like_table.useremail = ?";
    connection.query(query, [req.params.useremail], async function (err, results, fields) {
      if (err) throw err
      res.send(results)
    });
}