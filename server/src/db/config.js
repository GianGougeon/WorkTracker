const mongoose = require("mongoose");
require("dotenv").config();

let MONGOURL = process.env.MONGOURL || "mongodb://127.0.0.1:27017/worktracker";
//mongoose
mongoose
    .connect(MONGOURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((db) => console.log("Base de datos conectada"))
    .catch((err) => console.error(err));
