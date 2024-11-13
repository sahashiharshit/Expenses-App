const express = require('express');
const {  signupUser } = require('../controllers/signupController');
const router = express.Router();
router.post("/signup", signupUser);
//router.get();
module.exports=router;
