const express =require('express');
const { signupCtrl } = require('../controllers/auth/auth');

const authRouter =express.Router();



authRouter.route("/signup").post(signupCtrl);

module.exports = authRouter