const express = require('express');
const userRouter = require("./users");
const todoRouter = require("./todos");


const router = express.Router();

router.post('/users', userRouter);
router.post('/todos', todoRouter);

module.exports = router;