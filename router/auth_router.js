const express  = require("express");
const router = express.Router();
const authController = require('../controller/auth_controller')
const signUpSchema = require("../server/validator/auth_validatore")
const validate = require("../server/validator/middleware/validate_middleware")
const authMiddleware = require("../server/validator/middleware/authMiddleware")


router.route("/register").post(validate(signUpSchema),authController.register);
router.post("/login",authController.login);

router.route("/user").get(authMiddleware,authController.user)


module.exports=router;
