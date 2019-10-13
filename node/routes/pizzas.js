var express = require('express');
var router = express.Router();
let bc = require('badcube');

/* GET all pizzas. */
router.get('/', function (req, res, next) {
    let allPizzas = bc.Pizzas.findAll({});
    res.json(allPizzas);
});

/* GET all available pizzas. */
router.get('/available', function (req, res, next) {
    let allPizzas = bc.Pizzas.findAll({});
    let availablePizzas = allPizzas.filter(x => x.inventory > 0);
    res.json(availablePizzas);
});

/* POST new pizza to database. */
router.post('/pizza', function(req,res) {
    let pizzaName = req.body.pizzaName;
    let description = req.body.description;
    let imageurl = req.body.imageurl;
    let price = req.body.price;
    let review = req.body.review;
    let inventory = req.body.inventory;
    console.log(req)

    bc.Pizzas.insert({
      pizzaName: pizzaName,
      description: description,
      imageurl: imageurl,
      price: price,
      review: review,
      inventory: inventory
    })

    res.send("Pizza Completed")
})

/* PUT pizza inventory. */
router.put('/decreasePizzaInventory', function(req,res) {
    let pizzaName = req.body.pizzaName;
    let pizza = bc.Pizzas.find({pizzaName:pizzaName})
    let inventory = pizza.inventory;
    inventory--;
    bc.Pizzas.update({pizzaName:pizzaName},{inventory:inventory});
    res.send("Pizza Inventory Update Completed")
})


/* Delete a 'zza */
router.delete('/deletePizza', function(req,res) {
    let pizzaName = req.body.pizzaName;
    bc.Pizzas.delete({pizzaName:pizzaName});
    res.send("Pizza Inventory Update Completed")
})

module.exports = router;
