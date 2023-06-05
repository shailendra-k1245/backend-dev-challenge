const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    id:Number,
    item_name:String,
    item_image:String,
    import_date:String,
    expiration_data:String,
    item_price:Number,
    item_quantity:Number,
    item_weight:Number,
    item_tax:Number,
    item_availability:Boolean
})