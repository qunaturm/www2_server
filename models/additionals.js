const mongoose = require("mongoose")
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Additionals = mongoose.Schema({
    price: Number,
	name: String
})

Additionals.plugin(AutoIncrement, {id:'Additionals_counter', inc_field: 'id'});

module.exports = mongoose.model("Additionals", Additionals)

