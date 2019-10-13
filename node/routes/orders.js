var express = require('express');
var router = express.Router();
let bc = require('badcube');

/* GET all Orders. */
router.get('/', function (req, res, next) {
    let allOrders = bc.Orders.findAll({});
    res.json(allOrders);
});

router.post('/order', function(req,res) {
    console.log(req.query);
    let firstName = req.query.firstname;
    let lastName = req.query.lastname;
    let phoneNumber = req.query.phoneNumber;
    let pizza = req.query.pizza;
    let building = req.query.building;
    let room = req.query.room;

    bc.Orders.insert({
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        pizza: pizza,
        building: building,
        room: room,
        completed: false
    })

    res.send("Order Completed");
})




module.exports = router;
