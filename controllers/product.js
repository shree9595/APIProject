
const Product = require("../models/product")
const Category = require("../models/category")



exports.creatProduct = (req, res) => {
    product = new Product(req.body)
    product.save((err, product) => {
        if (err) {
            res.status(400).json({
                error: "product able to save"
            })
        }
    })
    res.json({ product })
}

exports.pushProductToCategory = (req, res, next) => {
    console.log(req.body);
    let purchases = [];
    // let {  } = req.body;
    let { category_id } = req.body

    let ok = ["shree"]
    console.log(category_id);


    //store thi in DB
    Category.findOneAndUpdate(
        { _id: category_id },
        { $push: { category_details: req.body } },
        { new: true },
        (err, purchases) => {
            if (err) {
                return res.status(400).json({
                    error: "Unable to save purchase list"
                });
            }
            next();
        }
    );
}


//get all product
exports.getAllProducts = (req, res) => {
    Product.find()
        .exec((err, products) => {
            if (err) {
                return res.status(400).json({
                    error: "NO product FOUND",
                });
            }
            res.json(products);
        });
};


