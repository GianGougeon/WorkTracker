const express = require("express");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../../middlewares/verifyToken.js");

/*============================[Routes]============================*/

const logout = express.Router();

/*============================[logout]============================*/
logout.put("/", verifyToken, function (req, res) {
    const authHeader = req.headers["authorization"];
    jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
        if (logout) {
            res.send({ msg: "Has sido desconectado" });
        } else {
            res.send({ msg: "Error" });
        }
    });
});

module.exports = { logout };
