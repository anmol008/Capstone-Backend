const chai = require("chai");
const chaiHttp = require("chai-http");

const address = require("../controllers/Auth.controller");

// Assertion Style
chai.should();
chai.use(chaiHttp);

describe("Auth Api", () => {
    /*
    post /users
    */
    describe("Post /users", () => {
        it("Adding the Address", (done) => {
            chai.request(address).post("/users").end((err, response) => {
                response.should.have.status(200);
                done();
            });
        })

        it("Cannot add new users", (done) => {
            chai.request(address).post("/users").end((err, response) => {
                response.should.have.status(401);
                done();
            });
        })
    })

    /*
   post /auth
   */
    describe("Post /auth", () => {
        it("Getting logged in", (done) => {
            chai.request(address).post("/auth").end((err, response) => {
                response.should.have.status(200);
                done();
            });
        })

        it("Cannot Getting logg in", (done) => {
            chai.request(address).post("/auth").end((err, response) => {
                response.should.have.status(400);
                done();
            });
        })
    })
})