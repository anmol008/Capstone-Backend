module.exports = (mongoose) => {
    const Product = mongoose.model(
        "product",
        mongoose.Schema({
            name: String,
            category: String,
            manufacturer: String,
            availableItems: Number,
            price: Number,
            imageURL: String,
            description: String,
        }, { timestamps: true})
    );
    return Product;
}