const mongoose = require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Order = mongoose.Schema({
    customerName: String,
    customerAddress: String,
    customerEmail: String,
    customerPhone: String, 
    pizzaId: Number,
    review: String,   
    selectedAdditions: [Number]
})

Order.plugin(AutoIncrement, {id:'Order_counter', inc_field: 'id'});

module.exports = mongoose.model("Order", Order)
