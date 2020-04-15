const {Schema, model} = require('mongoose');

const orderSchema = Schema({
    order: {
        items: [
            {
                productType: String,
                name: String,
                size: String,
                value: Number,
                img: String,
                kind:String,
                nutrients: [{type:String}]

            }],
        price: {
            type: Number,
            required: true
        },
        date: {
            type: Date,
            default: Date.now()
        }

    }
})


module.exports = model('Order', orderSchema)
