const jwt = require("jsonwebtoken");

module.exports = function(req, res, next) {
    const token = req.headers["authorization"];

    if(!token) return res.status(401).send({
        message: "Access Denied No token Provided"
    });
    try{
        jwt.verify(token, "myprivatekey");
        next();
    }catch(ex){
        res.status(401).send("Invalid token");
    }
};
