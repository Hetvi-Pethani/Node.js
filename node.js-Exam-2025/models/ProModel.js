const mongoose = require('mongoose');

const userDetailsSchema = mongoose.Schema({
    pname: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },

    qty: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },


});
const UserDetails = mongoose.model('UserDetails', userDetailsSchema);
module.exports = UserDetails;