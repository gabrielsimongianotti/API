const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogPost = new Schema({
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Custumer'
    },
    number: {
        type: String,
        required: true
    },
    createDate: {
        type: String,
        required: true,
        default: Date.now
    },
    status:{
        type: String,
        required: true,
        enum:['created','done'],
        default: 'created'
    },
    items: [{
        quantity: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Custumer'
        },
    }]
});

module.exports = mongoose.model('Order',BlogPost);