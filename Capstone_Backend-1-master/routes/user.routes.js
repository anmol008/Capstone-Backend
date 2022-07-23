module.exports = (app) => {
    var router = require("express").Router();
    var user = require("../controllers/Auth.controller");

    router.post("/users", user.signup);

    router.post("/auth", user.login);

    app.use("/api", router);

}