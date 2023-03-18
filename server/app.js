/*============================[Modulos]============================*/
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const router = require("./src/routes/index");
// Conecta a la base de datos
require("./src/db/config.js");

const app = express();
/*============================[Middlewares]============================*/
const MongoStore = require("connect-mongo");
/*----------- Session -----------*/
app.use(cookieParser());
let MONGOURL = process.env.MONGOURL || "mongodb://127.0.0.1:27017/worktracker";
app.use(
    session({
        store: new MongoStore({ mongoUrl: MONGOURL }),
        secret: "worktracker",
        resave: false,
        saveUninitialized: false,
        rolling: true,
        cookie: { maxAge: 3600000 }, // 1 hora
    })
);
app.use(cors()); // Agregamos el middleware de cors
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
/*============================[Rutas]============================*/
app.use("/", router);
/*============================[Servidor]============================*/
const PORT = process.env.PORT || 8085;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
