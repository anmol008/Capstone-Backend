const chai = require("chai");
const chaiHttp = require("chai-http");

const address = require("../controllers/Address.controller");

// Assertion Style
chai.should();
chai.use(chaiHttp);

describe("Address Api", () => {
    /*
    Test Post /addresses
    */
    describe("Post /addresses", () => {
        it("Adding the Address", (done) => {
            chai.request(address).post("/addresses").end((err, response) => {
                response.should.have.status(200);
                done();
            });
        })

        it("Cannot add new address", (done) => {
            chai.request(address).post("/addresses").end((err, response) => {
                response.should.have.status(401);
                done();
            });
        })
    })
})