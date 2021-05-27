
const express = require("express")
const router = express.Router()

const { deleteProduct, getAllProducts, creatProduct, pushProductToCategory } = require("../controllers/product")




router.get("/getAllProducts", getAllProducts)
router.post("/create/product", pushProductToCategory, creatProduct)




module.exports = router