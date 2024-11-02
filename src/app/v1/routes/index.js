const express = require('express');
const authContronller = require('../controllers/auth.controller');

const router = express.Router();
router.post('/register', (req,res)=> authContronller.register(req,res));

module.exports = router;