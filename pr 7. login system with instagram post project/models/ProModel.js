const mongoose = require('mongoose');

const userDetailsSchema = mongoose.Schema({
    pname: {
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

    pid: {
        type: String,
        required: true,
    },

    slocation: {
        type: String,
        required: true,
    },

    unit: {
        type: String,
        required: true,
    },

    sqty: {
        type: String,
        required: true,
    },


});
const UserDetails = mongoose.model('UserDetails', userDetailsSchema);
module.exports = UserDetails;