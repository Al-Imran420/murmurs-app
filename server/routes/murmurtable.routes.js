const express = require('express');
const router = express.Router();
const murmur = require("../controllers/murmur-table.controllers")

router.post('/add_murmur', murmur.addMurmur);
router.get('/get_murmur', murmur.getMurmur);
router.get('/get_murmur/:useremail', murmur.getMurmurByUser);
router.delete('/delete_murmur/:id', murmur.deleteMurmur)
router.get('/get_murmur_byuser', murmur.getMurmurWithUser);

module.exports = router;