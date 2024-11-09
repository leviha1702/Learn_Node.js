const express = require('express');
const { getHomepage, getLevietha } = require('../controllers/homeController');
const router = express.Router();

router.get('/',getHomepage);
router.get('/levietha', getLevietha);
 
module.exports = router;