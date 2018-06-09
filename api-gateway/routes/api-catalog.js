/**
 * API Routes
 */

var express = require('express');
var router = express.Router();
var auth_controller = require('../controllers/authController');
//POST Request for registering a user
router.post('/auth/register', auth_controller.user_register);

//GET Request for verifying user token
router.get('/auth/token', auth_controller.user_token);

module.exports = router;

router.post('/auth/login', auth_controller.user_login);

router.get('/auth/logout', auth_controller.user_logout);