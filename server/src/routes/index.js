const express = require("express");
const router = express.Router();

// 
const { register } = require("./auth/register.js");
const { login } = require("./auth/login.js");
const { logout } = require("./auth/logout.js");

/*============================[Api routes]============================*/
router.use("/api/info", require("./info.js"));
router.use("/api/register", register);
router.use("/api/login", login);
router.use("/api/logout", logout);
/*============================[Error router]============================*/

router.use("/*", require("./error.js"));

// export
module.exports = router;
