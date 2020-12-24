var express = require('express');
var Pizza = require('../models/pizza')
const fetch = require("node-fetch");
var router = express.Router();

router.post("/", async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    var pizza = new Pizza(
      {
        price: req.body.price,
        name: req.body.name,
        description: req.body.description,
        picture: req.body.picture,
        additionals: req.body.additionals,
        sostav: req.body.sostav
      }
    );
    await pizza.save();

    res.json(pizza);
  });

router.get("/init", async (req, res, next) => {
  var Pizzas = [
    { description: "Пикантная пицца с ананасами и кинзой", name: "Пикантная", price: 490, picture: "https://i.pinimg.com/736x/62/65/e3/6265e34e8d19fb6d16c85fa439a8ed14.jpg", sostav: "Тесто, томатный соус, ананасы, кинза, куриное филе", additionals: [1, 2, 3, 4, 5] },
    { description: "Эти грибочки вас не увеселят, но точно насытят!", name: "Грибная", price: 410, picture: "https://i.ytimg.com/vi/kT2tiDWNsF8/hqdefault.jpg", sostav: "Тесто, сливочный соус, шампиньоны, лук, укроп, сыр", additionals: [1, 2, 3, 5] },
    { description: "Как от мамы, только лучше", name: "Бабулина", price: 430, picture: "https://i.pinimg.com/736x/62/65/e3/6265e34e8d19fb6d16c85fa439a8ed14.jpg", sostav: "Тесто, малосольные огурцы, карбонад, майонезный соус, перец, укропчик", additionals: [1, 2, 5] },
    { description: "Vegan friendly(можно также в пост)", name: "Вегетарианская", price: 390, picture: "https://w7.pngwing.com/pngs/857/917/png-transparent-pizza-calzone-take-out-doner-kebab-vegetarian-food-recipe-pizza-delivery-thumbnail.png", sostav: "Тесто и куча травы", additionals: [1, 2, 3, 5] },
    { description: "С привкусом незакрытой сессии и выдохшегося пива", 380: "Студенческая", price: 380, picture: "https://cheetay-prod-media.s3.amazonaws.com/production/media/images/partners/2020/03/Buy_Pizza_Online_Cheetay.pk_QEQfOPK.PNG", sostav: "Тесто, чесночный соус, акционные сосиски, грибы, сыр, маслины", additionals: [3, 4, 5] },
    { description: "Anti-vegan(не халяль)", name: "Мясная бомба", price: 570, picture: "https://w7.pngwing.com/pngs/813/968/png-transparent-seafood-pizza-barbecue-italian-cuisine-gyro-pizza-barbecue-food-seafood-thumbnail.png", sostav: "Тесто, куча мяса", additionals: [1, 4, 5] },
    { description: "Для самой толстой мохнатой попки", name: "сЫЫЫЫЫЫЫрная", price: 470, picture: "https://imgcdn.wangyeyixia.com/aHR0cDovL3BuZ2ltZy5jb20vdXBsb2Fkcy9waXp6YS9waXp6YV9QTkc0NDA3Ny5wbmc%3D.png?w=400", sostav: "Тесто, куча сыра", additionals: [1, 2] },
    { description: "С четырьмя видами колбасок", name: "Баварская", price: 510, picture: "https://c7.uihere.com/files/998/177/226/5bbdd41d663be-thumb.jpg", sostav: "Тесто, охотничьи колбачки, горчичный соус, сыр, острый перец", additionals: [2, 4, 5] },
    { description: "Тритон отобрал самых отпетых морских гадов для этой пиццы", name: "Весёлая креветка", price: 610, picture: "https://1d18a198-c235-4dd4-9cfa-834b14ea4d13.selcdn.net/web/menu/xs/1596512931_3680_xs.jpg", sostav: "Тесто, сливочный соус, креветки, мидии, осьминоги, кальмары, русалки", additionals: [1, 2, 5] },
    { description: "Оригинальная пицца от нашего шеф-повара(N.B. - просто из обрезков продуктов)", name: "От шефа", price: 999, picture: "https://www.highgradelab.com/sage/pizza/wp-content/uploads/sites/3/2013/06/product6-300x300.jpeg", sostav: "Секрет", additionals: [2, 5] },
]
  Pizzas.forEach(function(pizza) {
    fetch('http://localhost:3001/api/pizza', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify({...pizza})
    }).then(res => {
      if (res.status >= 400) 
        throw new Error("Bad response from server");
  })});
  res.json({ok: true});
});

router.get("/", async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    var pizzas = await Pizza.find()
    res.json(pizzas);
});

router.get("/:id", async (req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    var pizza = await Pizza.findOne({id: req.params.id})
    res.json(pizza);
});

module.exports = router;
