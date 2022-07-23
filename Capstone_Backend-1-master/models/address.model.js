module.exports = (mongoose) => {
    const Address = mongoose.model(
        "address",
        mongoose.Schema({
            id: Number,
            name: String,
            city: String,
            landmark: String,
            state: String,
            street: String,
            contactNumber: String,
            zipCode: String,
            user_id: String,
        }, { timestamps: true })
    );
    return Address;
};