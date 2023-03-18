const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../../models/user.model.js");
require("dotenv").config();

/*============================[Routes]============================*/

const login = express.Router();

/*============================[Login]============================*/
login.post("/", async (req, res) => {
    // Validacion de existencia
    const user = await User.findOne({ email: req.body.email });
    const user_id = user._id;
    if (!user) return res.status(400).json({ error: "Usuario no encontrado" });

    // Validacion de password en la base de datos
    const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
    );
    if (!validPassword)
        return res.status(400).json({ error: "Constraseña invalida" });

    // Creando token
    const token = jwt.sign(
        {
            name: user.name,
            id: user._id,
        },
        process.env.TOKEN_SECRET
    );
    console.log({ token, user_id});
    // Colocando el token en el header y el cuerpo de la respuesta
    res.header("auth-token", token).json({
        error: null,
        data: { token, user_id },
        message: "Bienvenido",
    });
});

module.exports = { login };
