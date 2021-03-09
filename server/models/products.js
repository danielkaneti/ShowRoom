const mongoose = require('mongoose');
// const cachegoose = require('cachegoose');
// cachegoose(mongoose);
const Schema = mongoose.Schema;


const Products = new Schema({
    title: {type:String, unique: true},
    year: Number,
    genre: String,
    description: String,
    image_url: String,
    reviews: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Reviews'
        }
    ]
});

module.exports = mongoose.model('Products', Products);