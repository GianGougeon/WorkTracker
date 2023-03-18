const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

// funcion que crea un usuario y lo guarda en la base de datos
const save = async (user) => {
    try {
        const userExist = await User.findOne({ email: user.email });
        if (userExist) {
            return false;
        }
        const hashPass = await bcrypt.hash(user.password, 8);
        const newUser = await User.create({ ...user, password: hashPass });
        console.log("Nuevo usuario creado");
        return newUser;
    } catch (error) {
        console.log("Error al crear el usuario");
        throw error;
    }
};

// funcion que devuelve todos los usuarios
const getUsers = async () => {
    try {
        const usuarios = await User.find();
        return usuarios;
    } catch (error) {
        logger.error("Error al obtener los usuarios", error);
        throw error;
    }
};

module.exports = { save, getUsers };
