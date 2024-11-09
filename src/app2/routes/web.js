const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    req.send("Hello World");
})
router.get('/levietha', (req,res)=>{
    res.render('sample.ejs');
})
 
module.exports = router;