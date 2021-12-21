const express = require("express");
const cors = require("cors");

//Express setup
const app = express();


//Route variable
const users = require('./routes/user.routes');
const murmur = require('./routes/murmurtable.routes');
const murmurLike = require('./routes/murmur-like-table.routes');

//CORS Middleware
app.use(cors());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")//
    next()
})

// parse requests of content-type - application/json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Route settings
app.use('/api', users);
app.use('/api', murmur);
app.use('/api', murmurLike);

// default route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});


// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}.`);
});