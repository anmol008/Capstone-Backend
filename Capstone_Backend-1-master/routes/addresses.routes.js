module.exports = (app) =>{
    var router = require("express").Router();
    var address = require("../controllers/Address.controller");

    router.post("/addresses", address.addAddress);

    app.use("/", router);
}