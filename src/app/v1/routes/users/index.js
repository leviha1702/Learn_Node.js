const express = require('express');
const userController = require('../../controllers/user.controller');

const router = express.Router();


//user routes
router.get("/all",(req,res)=>userController.getUsers (req,res));
router.get("/:userId",(req,res)=>userController.getUserById (req,res));
router.post("/create",(req,res)=>userController.createdUser (req,res));
router.patch("/update",(req,res)=>userController.updateUser (req,res));
router.delete("/:userId",(req,res)=>userController.deleteUser (req,res));

module.exports = router;