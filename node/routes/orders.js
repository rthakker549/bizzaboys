var express = require('express');
var router = express.Router();
let bc = require('badcube');

/* GET all Orders. */
router.get('/', function (req, res, next) {
    let allOrders = bc.Orders.findAll({});
    res.json(allOrders);
});

router.post('/order', function(req,res) {
    let firstName = req.firstName;
    let lastName = req.lastName;
    let phoneNumber = req.phoneNumber;
    let pizza = req.pizza;
    let building = req.string;
    let room = req.room;
    
    Orders.insert({
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


