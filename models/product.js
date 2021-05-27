const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;



const productSchema = new mongoose.Schema(
    {
        product_name: {
            type: String,
            trim: true,
            require: true
        },
        price: {
            type: Number,
        },
        quantity: {
            type: Number
        },
        category_id: {
            type: ObjectId,
            ref: "Category",
            required: true
        },
    }
);
module.exports = mongoose.model("Product", productSchema)