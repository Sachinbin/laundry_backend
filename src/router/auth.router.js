let express = require("express");
const { adminLoginController } = require("../controller/auth.controller");
let router = express()

// router.post("/register",registerController)
// router.post("/login",loginController)
// router.get('/me',meController)
router.post('/adminlogin',adminLoginController)

module.exports = router;