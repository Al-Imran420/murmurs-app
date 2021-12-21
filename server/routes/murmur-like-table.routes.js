const express = require('express');
const router = express.Router();
const murmurLike = require("../controllers/murmur-like-table.controllers")

router.post('/add_like', murmurLike.addLike);
router.get('/get_like', murmurLike.getLike);
router.get('/get_murmur_byusers_liked', murmurLike.getMurmurByUsersLiked);
router.get('/get_murmur_by_current_users_liked/:useremail', murmurLike.getMurmurByCurrentUsersLiked);

module.exports = router;