const express = require("express");
const router = express.Router();

//Routers
/*============================[Middlewares]============================*/

//

/*============================[Api routes]============================*/
router.use("/api/info", require("./info.js"));
/*============================[Error router]============================*/

router.use("/*", require("./error.js"));

// export
module.exports = router;