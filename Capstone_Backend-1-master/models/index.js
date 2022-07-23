const dbConfigUrl = require("../config/db.config");
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfigUrl.url;
db.addresses = require("./address.model")(mongoose);
db.users = require("./user.model")(mongoose);
db.orders = require("./order.model")(mongoose);
db.products = require("./product.model")(mongoose);

module.exports = db;