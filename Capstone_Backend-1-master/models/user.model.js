let validator = require("validator");
module.exports = (mongoose) => {
    const User = mongoose.model(
        "user",
        mongoose.Schema({
            isAdmin: { type: Boolean, default: false },
            name: String,
            email: { 
                type: String,
                unique: true,
                validate: (value) =>{
                    return validator.isEmail(value)
                },
            },
            password: String,
            isAuthenticated: { type: Boolean, default: false },
        })
    );
    return User;
};