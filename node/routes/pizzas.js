var express = require('express');
var router = express.Router();
let bc = require('badcube');

/* GET all pizzas. */
router.get('/', function (req, res, next) {
    let allPizzas = bc.Pizzas.findAll({});
    res.json(allPizzas);
});

/* GET all available pizzas. */
router.get('/', function (req, res, next) {
    let allPizzas = bc.Pizzas.findAll({});
    let availablePizzas = allPizzas.filter(x => x.inventory > 0);
    res.json(availablePizzas);
});

/* POST new pizza to database. */
router.post('/pizza', function(req,res) {
    let pizzaName = req.pizzaName;
    let description = req.description;
    let price = req.price;
    let review = req.review;
    let inventory = req.inventory;

    bc.Pizzas.insert({
      pizzaName: pizzaName,
      description: description,
      price: price,
      review: review,
      inventory: inventory
    })

    res.send("Pizza Completed")
})

/* PUT pizza inventory. */
router.put('/decreasePizzaInventory', function(req,res) {
    let pizzaName = req.query.pizzaName;
    let pizza = bc.Pizzas.find({pizzaName:pizzaName})
    let inventory = pizza.inventory;
    inventory--;
    bc.Pizzas.update({pizzaName:pizzaName},{inventory:inventory});
    res.send("Pizza Inventory Update Completed")
})


/* Delete a 'zza */
router.put('/deletePizza', function(req,res) {
    let pizzaName = req.query.pizzaName;
    let pizza = bc.Pizzas.find({pizzaName:pizzaName})
    bc.Pizzas.delete({pizzaName:pizzaName});
    res.send("Pizza Inventory Update Completed")
})

module.exports = router;
