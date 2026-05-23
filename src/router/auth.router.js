let express = require("express");
const { loginController, registerController, meController } = require("../controller/auth.controller");
let router = express()

router.post("/register",registerController)
router.post("/login",loginController)
router.get('/me',meController)

module.exports = router;