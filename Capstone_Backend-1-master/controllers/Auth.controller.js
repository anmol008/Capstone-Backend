const db = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = db.users;

exports.signup = (req, res) => {
    // Validate Api call
    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "Please provide a valid email and password"
        });
        return;
    }


    const filter = { email: req.body.email };

    if (User.email === filter) {
        res.send(400).send({
            message: "Try any other email, this email is already registered!"
        });
        return;
    }


    User.findOne(filter, (err, user) => {
        if (!err && user === null) {

            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);


            //Add user to the DB

            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hashedPassword,
                // role: req.body.role ? req.body.role : "user",
                // isLoggedIn: false,
                isAdmin: req.body.isAdmin ? true : false,
                isAuthenticated: false,
            });
            user.save(user).then((data) => {
                res.status(200).send(data);
            })
                .catch((err) => {
                    res.status(500).send({
                        message: "Something went wrong"
                    });
                })

        }
        else {
            res.status(400).send({
                message: "User Already exist"
            });
        }
    })
};

exports.login = (req, res) => {
    // Validate Api call
    if (!req.body.email || !req.body.password) {
        res.status(400).send({
            message: "Please provide a valid email and password"
        });
        return;
    }

    const filter = { email: req.body.email };

    User.findOne(filter, (err, user) => {
        if (user === null) {
            res.status(401).send({
                message: "This email has not been registered"
            });
            return;
        }
        else {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                user.isAuthenticated = true;
                User.findOneAndUpdate(filter, user).then((data) => {
                   
                    const token = jwt.sign({ _id: data._id }, "myprivatekey");
                    
                    data.token = token;
                   
                    // console.log("token::", token);

                    res.send(data);
                }).catch((err) => {
                    res.status(500).send({
                        message: "Some error Occured",
                    });
                })
            }
            else {
                res.status(401).send({
                    message: "Invalid Credentials"
                })
            }

        }
    });

};