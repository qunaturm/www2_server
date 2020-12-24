var express = require('express');
var Order = require('../models/order')
var router = express.Router();

router.post("/", async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  var order = new Order(
    {
      date: req.body.date,
      customerName: req.body.customerName,
      customerAdress: req.body.customerAdress,
      customerEmail: req.body.customerEmail,
      customerPhone: req.body.customerPhone, 
      pizzaId: req.body.pizzaId,   
      selectedAdditionals: req.body.selectedAdditionals
    }
  );
  await order.save();
  res.json(order);
});

router.get("/:id", async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  var order = await Order.findOne({id: req.params.id})
  res.json(order);
});

module.exports = router;
