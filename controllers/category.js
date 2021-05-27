
const Category = require("../models/category")




exports.getCategoryById = (req, res, next, id) => {
    Category.findById(id).exec((err, cate) => {
        if (err) {
            return res.status(400).json({
                error: "Category not found in DB",
            });
        }
        req.category = cate;
        next();
    });
};


exports.getlatestCategory = (req, res) => {

    Category.find(req.category._id, { category_details: { $slice: -3 } })
        .select("-status")
        .exec((err, category) => {
            if (err) {
                return res.status(400).send({
                    error: "category not find"
                })
            }
            res.json(category)
        })


    // return res.json(req.product);
};

exports.getAllCategory = (req, res) => {
    Category.find()
        .exec((err, categories) => {
            if (err) {
                return res.status(400).json({
                    error: "NO categories found",
                });
            }
            res.json(categories);
        });
};

exports.createCategory = (req, res) => {
    const category = new Category(req.body);
    category.save((err, category) => {
        if (err) {
            return res.status(400).json({
                error: "NOT able to save category"
            });
        }
        res.json({ category });
    });
};



exports.removeCategory = (req, res) => {
    const category = req.category;
    console.log(category);
    category.remove((err, category) => {
        if (err) {
            return res.status(400).json({
                error: "Failed to delete this category",
            });
        }
        res.json({
            message: "Successfull deleted",
        });
    });
};
