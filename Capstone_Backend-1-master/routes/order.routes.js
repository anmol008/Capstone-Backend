module.exports = (app) =>{
    var router = require("express").Router();

    var order = require("../controllers/order.controller");

    router.post("/orders", order.createOrder);

    app.use("/", router);
}