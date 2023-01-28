const express = require("express");
const {getProducts,getProduct,createProduct} = require('../controllers/productControllers')
const router = express.Router();

//get all
router.get("/", getProducts);

//get single product
router.get("/:id", getProduct);

//post image
router.post('/',createProduct);

module.exports = router;
