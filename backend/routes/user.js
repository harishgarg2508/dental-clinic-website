const express = require('express');
const router = express.Router();
const { getCurrentUser, updateUser } = require('../controllers/userController');
const auth = require('../middleware/auth');

router.get('/me', auth, getCurrentUser);
router.put('/update', auth, updateUser);

module.exports = router;