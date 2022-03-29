const mongoose = require("mongoose");

const product = mongoose.model(
    "Product",
    mongoose.Schema(
        {
            productName: {
                type: String,
                required: true,
                unique: true,
            },
            category: {
                type: mongoose.Schema.Types.ObjectId,
                required: "Category",
            },
            productShortDescription: {
                type: String,
                require: true
            },
            productDescription: {
                type: String,
                require: false
            },
            productPrice: {
                type: Number,
                require: true
            },
            productSalePrice: {
                type: Number,
                require: true,
                default: 0
            },
            productImage: {
                type: String,
            },
            productSKU: {
                type: String,
                required: false
            },
            productType: {
                type: String,
                required: true,
                default: "simple"
            },
            stockStatus: {
                type: String,
                default: "IN"
            }

        },
        {
            toJSON: {
                transform: function(doc, ret) {
                    ret.productId = ret._id.toString();
                    delete ret._id;
                    delete ret.__v;
                },
            }
        }
    )
);

module.exports = {
    product
}