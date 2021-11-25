import express from 'express'
import mysql from 'mysql2'
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import cors from 'cors'; 

const app = express();

//mysql setting
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3307,
  user: 'docker',
  password: 'docker',
  database: 'test'
});

connection.connect();

//cors setting

app.use(cors());
app.use((req, res, next) => {
 res.header("Access-Control-Allow-Origin", "*")
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")//
 next()
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Get example
const router: express.Router = express.Router()

//Post example
router.post('/api/postTest', (req, res) => {
  connection.query('select * from test', function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
})


router.post('/api/addtestpost', (req, res) => {
  let body = req.body;
  connection.query('INSERT INTO test SET ?', body, function (err, results, fields) {
    if (err) throw err
    res.send(JSON.stringify(results))
  });
})

router.get('/api/get_test_one/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`select * from test WHERE id = ${id}`, function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
})

router.get('/api/get_all_post', (req, res) => {
  connection.query('select * from test', function (err, results, fields) {
    if (err) throw err
	  res.send(results);
  });
})

router.put('/api/update_post', function (req, res) {
  let id = req.body.id;
  let name = req.body.name;
  let description = req.body.description;
  connection.query("UPDATE `test` SET `name`=?,`description`=? WHERE `id`=?", [name, description, id], function (error, results, fields) {
   if (error) throw error;
   res.send(JSON.stringify(results));
 });
});

router.delete('/api/delete_post_one/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`DELETE FROM test WHERE id = ${id}`, function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
})

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

router.post('/api/signup', (req, res) => {
  let body = req.body;
  connection.query('INSERT INTO murmur_users SET ?', body, function (err, results, fields) {
    if (err) throw err
    res.send(JSON.stringify(results))
  });
});

router.post('/api/login', (req, res) => {
  var query = "select * from murmur_users where email = ?";
  connection.query(query, [req.body.email], async function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
});

router.get('/api/getuser', (req, res) => {
  connection.query('select * from murmur_users', function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
});

router.get('/api/getuser_profile/:email', (req, res) => {
  var query = "select * from murmur_users where email = ?";
  connection.query(query, [req.params.email], async function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
});

router.delete('/api/deleteuser/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`DELETE FROM murmur_users WHERE id = ${id}`, function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
})


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

router.post('/api/add_murmur', (req, res) => {
  let body = req.body;
  connection.query('INSERT INTO murmur_table SET ?', body, function (err, results, fields) {
    if (err) throw err
    res.send(JSON.stringify(results))
  });
});

router.get('/api/get_murmur', (req, res) => {
  connection.query('select * from murmur_table ORDER BY created_at DESC', function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
});

router.get('/api/get_murmur/:useremail', (req, res) => {
  var query = "select * from murmur_table where useremail = ?";
  connection.query(query, [req.params.useremail], async function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
});

router.delete('/api/delete_murmur/:id', (req, res) => {
  const id = req.params.id;
  connection.query(`DELETE FROM murmur_table WHERE id = ${id}`, function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
})

router.get('/api/get_murmur_byuser', (req, res) => {
  // var sql = "SELECT * FROM murmur_table JOIN murmur_users ON murmur_table.useremail = murmur_users.email ORDER BY murmur_table.created_at DESC";
  var sql = "SELECT murmur_table.id AS murmur_id, murmur_table.url AS url, murmur_table.text AS text, murmur_table.created_at AS created_at, murmur_table.likecount AS likecount, murmur_users.name AS murmur_users FROM murmur_table JOIN murmur_users ON murmur_table.useremail = murmur_users.email ORDER BY murmur_table.created_at DESC";
  connection.query(sql, async function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
});

// Like table
!async function createTable() {
  const tableQuery = `CREATE TABLE IF NOT EXISTS murmur_like_table (
      id INT PRIMARY KEY AUTO_INCREMENT,
      post_id INT(10) NOT NULL,
      useremail VARCHAR(35),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP)`;
 
  connection.query(tableQuery);    
}();

router.post('/api/add_like', (req, res) => {
  let body = req.body;
  connection.query('INSERT INTO murmur_like_table SET ?', body, function (err, results, fields) {
    if (err) throw err
    res.send(JSON.stringify(results))
  });
});

router.get('/api/get_like', (req, res) => {
  connection.query('select * from murmur_like_table ORDER BY created_at DESC', function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
});

router.get('/api/get_murmur_byusers_liked', (req, res) => {
  var sql = "SELECT * FROM murmur_table JOIN murmur_like_table ON murmur_table.id = murmur_like_table.post_id";
  connection.query(sql, async function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
});

router.get('/api/get_murmur_by_current_users_liked/:useremail', (req, res) => {
  // var query = "select * from murmur_table where useremail = ?";
  var sql = "SELECT * FROM murmur_table JOIN murmur_like_table ON murmur_table.id = murmur_like_table.post_id where murmur_like_table.useremail = ?";
  connection.query(sql, [req.params.useremail], async function (err, results, fields) {
    if (err) throw err
    res.send(results)
  });
});






app.use(router)

app.listen(3001, () => { console.log('Example app listening on port 3001!') })
function secretOrPrivateKey(arg0: { user: mysql.RowDataPacket[] | mysql.RowDataPacket[][] | mysql.OkPacket | mysql.OkPacket[] | mysql.ResultSetHeader; }, secretOrPrivateKey: any, arg2: string) {
  throw new Error('Function not implemented.');
}

