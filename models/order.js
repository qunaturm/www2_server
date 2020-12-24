const mongoose = require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Order = mongoose.Schema({
    date: Date,
    customerName: String,
    customerAdress: String,
    customerEmail: String,
    customerPhone: String, 
    pizzaId: Number,   
    selectedAdditionals: [Number]
})

Order.plugin(AutoIncrement, {id:'Order_counter', inc_field: 'id'});

module.exports = mongoose.model("Order", Order)

Order.save(function (err, Order) {
    if(err) return console.error(err);
    Order.speak();
});
