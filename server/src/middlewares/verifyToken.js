const jwt = require("jsonwebtoken");
// funcion para verificar el token
function verifyToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(403);
    jwt.verify(token, "secret_key", (err, user) => {
        if (err) return res.sendStatus(404);
        req.user = user;
        next();
    });
}

// exporto la funcion verifyToken
module.exports = { verifyToken };
