const chai = require("chai");
const chaiHttp = require("chai-http");

const address = require("../controllers/order.controller");

// Assertion Style
chai.should();
chai.use(chaiHttp);

describe("Order Api", () => {
    /*
    Post /orders
    */
    describe("Post /orders", () => {
        it("Adding the Orders", (done) => {
            chai.request(address).post("/orders").end((err, response) => {
                response.should.have.status(200);
                done();
            });
        })

        it("Cannot add new Orders", (done) => {
            chai.request(address).post("/orders").end((err, response) => {
                response.should.have.status(401);
                done();
            });
        })
    })
})