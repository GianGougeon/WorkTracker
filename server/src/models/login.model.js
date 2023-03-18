const { Schema, model } = require("mongoose");

const schemaLogin = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = new model("login", schemaLogin);
