const db = require("../models");
const Product = db.products;

exports.searchProducts = (req, res) => {
    const { category, direction, name, sortBy } = req.query;

    if (category === "undefined") {
        category = "";
    }
    if (direction === "undefined") {
        direction = "DESC";
    }
    if (name === "undefined") {
        name = "";
    }
    if (sortBy === "undefined") {
        sortBy = "productId";
    }

    Product.find({ category: category }).then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.status(500).send({
            message: "some error occurred while fetching the product by categories", err
        });
    });

    Product.find({ name: name }).then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.status(500).send({
            message: "some error occurred while fetching the product by name", err
        });
    });

    Product.find({ name: name }).then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.status(500).send({
            message: "some error occurred while fetching the product by name", err
        });
    });

    Product.find({}).sort({ sortBy: -1 }).then((data) => {
        res.status(200).send(data);
    }).catch((err) => {
        res.status(500).send({
            message: "some error occurred while sorting", err
        });
    });

};

exports.getProductCategories = (req, res) => {
    Product.find({}).select("category").distinct("categories").then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: "some error occurred while fetching the categories", err
        });
    });
}

exports.getProductById = (req, res) => {
    const id = req.params.id;

    Product.findById({ _id: id }).then((data) => {
        if (!data) {
            res.status(404).send({
                message: "No Product found for ID - <id>",
            });
        }
        else {
            res.send(data);
        }
    }).catch((err) => {
        res.status(500).send({
            message: "some error occurred while fetching the Courses", err
        });
    });
}

exports.saveProduct = (req, res) => {
    if (!req.body.name || !req.body.availableItems || !req.body.price || !req.body.category || !req.headers.token) {
        res.status(400).send({
            message: "Cannot be Empty"
        });
        return;
    }

    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        manufacturer: req.body.manufacturer,
        availableItems: req.body.availableItems,
        price: req.body.price,
        imageURL: req.body.imageURL,
        description: req.body.description,

    })

    product.save(product).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: "some error occurred while saving the product", err
        });
    });
}

exports.updateProductDetails = (req, res) =>{
    if (!req.body.name || !req.body.availableItems || !req.body.price || !req.body.category || !req.headers.token) {
        res.status(400).send({
            message: "Cannot be Empty"
        });
        return;
    }

    const product = new Product({
        name: req.body.name,
        category: req.body.category,
        manufacturer: req.body.manufacturer,
        availableItems: req.body.availableItems,
        price: req.body.price,
        imageURL: req.body.imageURL,
        description: req.body.description,

    })

    product.save(product).then((data) => {
        res.send(data);
    }).catch((err) => {
        res.status(500).send({
            message: "No Product found for ID - <id>!", err
        });
    });
}


exports.deleteProductById = (req, res) => {
    const id = req.params.id;

    Product.findOneAndDelete({ _id: id }).then((data) => {
        res.send({ product: data, message: "Product with ID - <id> deleted successfully!" });
    }).catch((err) => {
        res.status(500).send({
            message: "No Product found for ID - <id>!", err
        });
    });
}
