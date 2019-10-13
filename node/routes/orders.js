var express = require('express');
var router = express.Router();
let bc = require('badcube');

/* GET all Orders. */
router.get('/', function (req, res) {
    let allOrders = bc.Orders.findAll({});
    res.json(allOrders);
});

router.post('/order', function(req,res) {
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

router.put('/completed', function(req,res) {
    let id = req.query.id;
    bc.Orders.update({id:id},{completed:true});

    res.send("Pizza Complete")
})

router.get('/points',function(req,res) {
   res.json(bc.Points.findAll({}));
})

router.get('/userPoints',function(req,res){
    let phoneNumber = req.query.phoneNumber;
    let points = bc.Points.find({phoneNumber:phoneNumber})
    res.send(points);
})

router.put('/addPoints',function(req,res) {
    let phoneNumber = req.query.phoneNumber;
    let user = bc.Points.find({phoneNumber:phoneNumber});
    if(user) {
        let points = user.points;
        points++;
        bc.Points.update({phoneNumber:phoneNumber},{points:points});
        res.send("Points Updated");
    } else {
        bc.Points.insert({
            phoneNumber: phoneNumber,
            points: 1
        })

        res.send("New User Points Updated")
    }
})




module.exports = router;
