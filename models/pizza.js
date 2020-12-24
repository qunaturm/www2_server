const mongoose = require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Pizza = mongoose.Schema({
    price: Number,
	name: String,
    description: String,
    picture: String,
    additionals: [Number],
    sostav: String
})

Pizza.plugin(AutoIncrement, {id:'Pizza_counter', inc_field: 'id'});

module.exports = mongoose.model("Pizza", Pizza)