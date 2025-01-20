const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    bookname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    authorname: {
        type: String,
        required: true
    }
    
})

const u = mongoose.model('user', userSchema);
module.exports = u;