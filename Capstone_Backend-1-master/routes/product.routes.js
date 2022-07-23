module.exports = (app) => {
    var router = require("express").Router();
    const product = require("../controllers/Product.controller");

    router.get("/products?pageNo=0&pageSize=10&direction=DESC&sortBy=id", product.searchProducts);

    router.get("/products/categories", product.getProductCategories);

    router.get("/products/{id}", product.getProductById);

    router.post("/products", product.saveProduct);

    router.put("/products/{id}", product.updateProductDetails);

    router.delete("/products/{id}", product.deleteProductById);

    app.use("/", router);

}