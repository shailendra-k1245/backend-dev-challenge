const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.get('/list',async(req,res)=>{
    try {
        const page = req.query.page ||1;
        const size = req.query.size || 3;
        const skip = (page-1)*size;
        const products = await Product.find({},{id:1,item_name:1,item_image:1,item_price:1}).skip(skip).limit(size).lean().exec()
        return res.status(200).send(products);
    } catch (err) {
        return res.status(500).send(err.message)
    }
})

module.exports = router;