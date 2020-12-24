var express = require('express');
var Order = require('../models/order')
var router = express.Router();

router.post("/", async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  var order = new Order(
    {
      customerName: req.body.customerName,
      customerAddress: req.body.customerAddress,
      customerEmail: req.body.customerEmail,
      customerPhone: req.body.customerPhone, 
      pizzaId: req.body.pizzaId,   
      selectedAdditions: req.body.selectedAdditions,
      review: req.body.review
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

router.put("/:id/review", (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');
  var rent = Order.findOneAndUpdate({id: req.params.id}, {review: req.body.review}, {new: true, useFindAndModify: true}, (err, doc) => {
        if (err) {
            console.log("Something wrong when updating data!");
        }

        res.json(doc);
    });
});

module.exports = router;
