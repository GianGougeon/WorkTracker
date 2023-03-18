const express = require("express");
const jwt = require("jsonwebtoken");

/*============================[Controller]============================*/
const AuthController = require("../../controller/auth.controller");
/*============================[Routes]============================*/

const register = express.Router();

/*============================[register]============================*/
register.post("/", async (req, res) => {
    const { name, email, password } = req.body;
    AuthController.registerUsuario({
        name,
        email,
        password,
    }).then((user) => {
        if (user) {
            res.status(200).json({
                message: "Usuario registrado",
                user,
            });
            console.log("Usuario registrado");
        } else {
            res.status(400).json({
                message: "Usuario no registrado",
            });
            console.log("Usuario no registrado");
        }
    });
});

module.exports = { register };
