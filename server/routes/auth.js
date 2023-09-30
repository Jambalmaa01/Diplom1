const express = require('express');
const router = express.Router();
const { signup, singupGet } = require('../controller/authCOntroller'); 


// router.post("/signup", signup).get(singupGet); 
router.route('/signup').post(signup).get(singupGet)
module.exports = router;
