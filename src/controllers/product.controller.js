const express = require('express');
const router = express.Router();
const Product = require('../models/product.model');

router.get('/list',async(req,res)=>{
    try {
        const page = req.query.page ||1;
        const size = req.query.size || 10;
        const skip = (page-1)*size;
        const products = await Product.find({},{id:1,item_name:1,item_image:1,item_price:1,_id:0}).skip(skip).limit(size);
        return res.status(200).send(products);
    } catch (err) {
        return res.status(500).send(err.message)
    }
});

router.get('/:id',async(req,res)=>{
    try {
        const product = await Product.find({id:req.params.id},{_id:0});
        return res.status(200).send(product);
    } catch (err) {
        return res.status(404).send(err.message)
    }
})

module.exports = router;