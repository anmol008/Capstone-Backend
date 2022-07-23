module.exports  = (mongoose) => {
    const Order = mongoose.model(
        "order",
        mongoose.Schema({
            address: String,
            product: String,
            quantity: String,
            user: String,
        }, { timestamps: true })
    );
    return Order;
};