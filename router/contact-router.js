const express  = require("express");
const router = express.Router();
const contactform = require("../controller/contact-controller");


router.route('/contact').post(contactform);

module.exports = router;