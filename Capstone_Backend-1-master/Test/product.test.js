const chai = require("chai");
const chaiHttp = require("chai-http");

const address = require("../controllers/Product.controller");

// Assertion Style
chai.should();
chai.use(chaiHttp);

describe("Product Api", () => {
    /*
    Post /products
    */
    describe("Post /products", () => {
        it("Adding the Products", (done) => {
            chai.request(address).post("/products").end((err, response) => {
                response.should.have.status(200);
                done();
            });
        })

        it("Cannot add new products", (done) => {
            chai.request(address).post("/products").end((err, response) => {
                response.should.have.status(401);
                done();
            });
        })
    })
})