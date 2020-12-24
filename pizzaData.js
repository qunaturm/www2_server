  
var Pizzas = [
    { description: "Пикантная пицца с ананасами и кинзой", name: "Пикантная", price: 490, picture: "https://i.pinimg.com/736x/62/65/e3/6265e34e8d19fb6d16c85fa439a8ed14.jpg" },
    { description: "Эти грибочки вас не увеселят, но точно насытят!", name: "Грибная", price: 410, picture: "https://i.ytimg.com/vi/kT2tiDWNsF8/hqdefault.jpg" },
    { description: "Как от мамы, только лучше", name: "Бабулина", price: 430, picture: "https://i.pinimg.com/736x/62/65/e3/6265e34e8d19fb6d16c85fa439a8ed14.jpg" },
    { description: "Vegan friendly(можно также в пост)", name: "Вегетарианская", price: 390, picture: "https://w7.pngwing.com/pngs/857/917/png-transparent-pizza-calzone-take-out-doner-kebab-vegetarian-food-recipe-pizza-delivery-thumbnail.png" },
    { description: "С привкусом незакрытой сессии и выдохшегося пива", 380: "Студенческая", price: 380, picture: "https://cheetay-prod-media.s3.amazonaws.com/production/media/images/partners/2020/03/Buy_Pizza_Online_Cheetay.pk_QEQfOPK.PNG" },
    { description: "Anti-vegan(не халяль)", name: "Мясная бомба", price: 570, picture: "https://w7.pngwing.com/pngs/813/968/png-transparent-seafood-pizza-barbecue-italian-cuisine-gyro-pizza-barbecue-food-seafood-thumbnail.png" },
    { description: "Для самой толстой мохнатой попки", name: "сЫЫЫЫЫЫЫрная", price: 470, picture: "https://imgcdn.wangyeyixia.com/aHR0cDovL3BuZ2ltZy5jb20vdXBsb2Fkcy9waXp6YS9waXp6YV9QTkc0NDA3Ny5wbmc%3D.png?w=400" },
    { description: "С четырьмя видами колбасок", name: "Баварская", price: 510, picture: "https://c7.uihere.com/files/998/177/226/5bbdd41d663be-thumb.jpg" },
    { description: "Тритон отобрал самых отпетых морских гадов для этой пиццы", name: "Весёлая креветка", price: 600, picture: "https://1d18a198-c235-4dd4-9cfa-834b14ea4d13.selcdn.net/web/menu/xs/1596512931_3680_xs.jpg" },
    { description: "Оригинальная пицца от нашего шеф-повара(N.B. - просто из обрезков продуктов)", name: "От шефа", price: 999, picture: "https://www.highgradelab.com/sage/pizza/wp-content/uploads/sites/3/2013/06/product6-300x300.jpeg" },
]

function getPizzas() {
    return Pizzas;
}

function getPizza(id){
    var pizza = Pizzas.find(x => x.id == id);
    return pizza;
}

module.exports = {getPizza, getPizzas}