let express = require("express");
const { adminLoginController } = require("../controller/auth.controller");
let router = express()

router.post('/adminlogin',adminLoginController)

module.exports = router;