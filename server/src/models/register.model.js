const { Schema, model } = require("mongoose");

const schemaRegister = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = new model("register", schemaRegister);
