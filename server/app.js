/*============================[Modulos]============================*/
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./src/routes/index");
const app = express();
/*============================[Middleware]============================*/
app.use(cors()); // Agregamos el middleware de cors
app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    })
);
/*============================[Rutas]============================*/
app.use("/", router);
/*============================[Servidor]============================*/
const PORT = process.env.PORT || 8085;

const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
server.on("error", (error) => {
    logger.error(`Error en el servidor ${error}`);
});
