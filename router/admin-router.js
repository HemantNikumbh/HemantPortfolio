const express = require("express")
const router = express.Router()
const adminController = require("../controller/admin_controller")
const authMiddleware = require("../server/validator/middleware/authMiddleware")
const adminmiddleware = require("../server/validator/middleware/admin-middleware")


router.route("/users").get(authMiddleware,adminmiddleware,adminController.getAllUser)
router.route("/contacts").get(authMiddleware,adminmiddleware,adminController.getAllContact)
router.route("/users/:id").get(authMiddleware,adminmiddleware,adminController.getUserById)
router.route("/users/update/:id").patch(authMiddleware,adminmiddleware,adminController.updateUserById)
router.route("/users/delete/:id").delete(authMiddleware,adminmiddleware,adminController.deleteUser)
router.route("/users/deleteContact/:id").delete(authMiddleware,adminmiddleware,adminController.deleteContact)


module.exports = router