
const express = require("express")
const router = express.Router()

const { getlatestCategory, createCategory, removeCategory, getCategoryById, getAllCategory } = require("../controllers/category")

//param
router.param("categoryId", getCategoryById);


router.get("/category/:categoryId", getlatestCategory)//get product category with latest 3 product details

router.get("/Allcategory", getAllCategory)
router.post("/category/create", createCategory)
router.delete("/removeCategory/:categoryId/", removeCategory);

module.exports = router