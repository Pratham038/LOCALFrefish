const mongoose = require('mongoose')
const Product = require("../models/ProductsModel");

// create a new workout
const createProduct = async(req,res) => {
    const { id, name, image,price, description,stock, colors,category, featured } = req.body;

    try {
      const product = await Product.create({
        id,
        image,
        colors,
        stock,
        name,
        price,
        description,
        category,
        featured,
      });
      res.status(200).json(product);
    } catch (error) {
      console.log(error);
    }
}

//get all products
const getProducts = async (req,res)=>{
    const product = await Product.find({}).sort({createdAt:-1})
    res.status(200).json(product)
}


//get single product
const getProduct = async(req,res) =>{
  // const {id} = req.params

  // if(!mongoose.Types.ObjectId.isValid({id:'id'})){
  //     return res.status(404).json({error:'NO such PRODUCT'})
  // }

  const product = await Product.findOne({id:req.params.id})
  if (!product){
      return res.status(404).json({error:'No such PRODUCT'})
  }
  res.status(200).json(product)

}


module.exports = {
    getProducts,
    createProduct,
    getProduct

  }

// '/upload', upload.single('image'), (req, res) => {});