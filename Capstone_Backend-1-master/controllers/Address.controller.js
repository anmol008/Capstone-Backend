const db = require("../models");
const Address = db.addresses;



exports.addAddress = (req, res) => {
    if (!req.body.name || !req.body.contactNumber || !req.body.zipCode || !req.body.state || !req.body.city || !req.headers.token) {
        res.status(400).send({
            message: "Cannot be Empty"
        });
        return;
    }

    if (req.body.zipCode.length < 6 || req.body.zipCode.length > 6) {
        res.status(400).send({
            message: "Invalid zip code!"
        });
        return;
    }

    if (typeof(req.body.contactNumber) ==! Number || req.body.contactNumber.length < 10 || req.body.contactNumber.length > 10) {
        res.status(400).send({
            message: "Invalid contact number!"
        });
        return;
    }

    const address = new Address({
        name: req.body.name,
        city: req.body.city,
        landmark: req.body.landmark,
        state: req.body.state,
        street: req.body.street,
        contactNumber: req.body.contactNumber,
        zipCode: req.body.zipCode,
    });

    address.save().then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: "some error occurred while creating the Address", err
        });
    });
}