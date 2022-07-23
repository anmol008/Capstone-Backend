const db = require("../models");
const Order = db.orders;

exports.createOrder = (req, res) => {
    if (!req.body.address || !req.body.product || !req.body.quantity || !req.body.user || !req.headers.token) {
        res.status(400).send({
            message: "Cannot be Empty"
        });
        return;
    }

    const order = new Order({
        address: req.body.address,
        product: req.body.product,
        quantity: req.body.quantity,
    })

    order.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: "some error occurred while creating Order", err
        });
    });
}