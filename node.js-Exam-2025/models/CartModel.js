const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({

    informationId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Product', required: true 
    },

    qty: { type: Number, required: true, default: 1 }
});

module.exports = mongoose.model('Cart', cartSchema);