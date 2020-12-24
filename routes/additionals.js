var express = require('express');
var Additionals = require('../models/additionals')
var router = express.Router();

router.post("/", async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    var additionals = new Additionals(
      {
        price: req.body.price,
        name: req.body.name
      }
    );
    await additionals.save();
    res.json(additionals);
  });

router.get("/", async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    var additionals = await Additionals.find()
    res.json(additionals);
});

router.get("/:id", async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    var additional = await Additionals.findOne({id: req.params.id})
    res.json(additional);
});

module.exports = router;
