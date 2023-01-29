const express = require("express");
const {getProducts,getProduct,createProduct} = require('../controllers/productControllers')
const router = express.Router();

//get all
router.get("/products", getProducts);

//get single product
router.get("/products/:id", getProduct);

//post info of product
router.post('/',createProduct);

module.exports = router;
