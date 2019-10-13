var express = require('express');
var router = express.Router();
let bc = require('badcube');

/* GET all Orders. */
router.get('/', function (req, res, next) {
    let allPizzas = bc.Pizzas.findAll({});
    res.json(allPizzas);
});

router.post('/pizza', function(req,res) {
    let pizzaName = req.pizzaName;
    let crust = req.crust;
    let sauce = req.sauce;
    let cheese = req.cheese;
    let veggies = req.veggies;
    let meat = req.meat;
    let price = req.price;
    let review = req.review;
    let inventory = req.inventory;

    bc.Pizzas.insert({
      pizzaName: pizzaName,
      crust: crust,
      sauce: sauce,
      cheese: cheese,
      veggies: veggies,
      meat: meat,
      price: price,
      review: review,
      inventory: inventory
    })

    res.send("Pizza Completed")
})


module.exports = router;
