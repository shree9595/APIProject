const mongoose = require("mongoose");

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
        
    },
    { timestamps: true }
);

const categorySchema = new mongoose.Schema(
    {
        category_name: {
            type: String,
            trim: true,
            required: true,
            unique: true
        },
        status: {
            type: String,
            trim: true,
        },
        category_details: [productSchema]

    },
    { timestamps: true }
);


module.exports = mongoose.model("Category", categorySchema);
