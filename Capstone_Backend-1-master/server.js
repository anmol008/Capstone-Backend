const express = require("express");
const app = express();

const port = 4000;
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");

    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.get("/", (req, res) => {
    res.status(200);
    res.json({ messaage: "welcome to Capstone Project" });
})

require("./routes/user.routes")(app);
require("./routes/addresses.routes")(app);
require("./routes/product.routes")(app);
require("./routes/order.routes")(app);

app.listen(port, () => {
    console.log(`Connection Established on Port ${port}`);
});