const express = require("express");
const fs = require("fs");
const { verifyToken } = require("../middlewares/verifyToken.js");

const info = express.Router();

// Estructura de datos
let data = {
    years: [],
};

info.post("/",  (req, res) => {
    // obtener el id del usuario de mongodb
    // Obtener los datos del cuerpo de la petición
    const {
        year,
        month,
        day,
        date,
        time,
        normal_hours,
        extra_hours,
        location,
        information,
    } = req.body;

    // Validar que se hayan enviado todos los campos necesarios
    if (
        !year ||
        !month ||
        !day ||
        !date ||
        !time ||
        !normal_hours ||
        !extra_hours ||
        !location ||
        !information
    ) {
        // Si faltan datos, enviar un mensaje de error
        res.status(400).send("Faltan datos en la petición");
        return;
    }

    // Buscar el año correspondiente en la estructura de datos
    let yearIndex = data.years.findIndex((y) => y.year === year);
    if (yearIndex === -1) {
        // Si el año no existe, se agrega a la estructura de datos
        data.years.push({ year, months: [] });
        yearIndex = data.years.length - 1;
    }

    // Buscar el mes correspondiente en la estructura de datos
    let monthIndex = data.years[yearIndex].months.findIndex(
        (m) => m.month === month
    );
    if (monthIndex === -1) {
        // Si el mes no existe, se agrega a la estructura de datos
        data.years[yearIndex].months.push({ month, data: [] });
        monthIndex = data.years[yearIndex].months.length - 1;
    }

    // Agregar los datos a la estructura de datos correspondiente
    data.years[yearIndex].months[monthIndex].data.push({
        day,
        date,
        time,
        normal_hours,
        extra_hours,
        location,
        information,
    });

    // Responder con un mensaje indicando que los datos se han guardado correctamente
    res.status(200).send("Los datos se han guardado correctamente");
    console.log(data);
    // Exporta los datos en un archivo de texto
    fs.writeFile("data.txt", JSON.stringify(data), "utf8", (err) => {
        if (err) {
            console.log(err);
        }
    });
});

info.get("/", (req, res) => {
    // Enviar la estructura de datos
    res.status(200).send(data);
});

module.exports = info;

