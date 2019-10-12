var express = require('express');
var router = express.Router();
let bc = require('badcube');

/* GET customer based on phoneNumber */
router.get('/', function (req, res, next) {
    let customer = bc.Customer.find({
      phoneNumber: req.phoneNumber
    });
    res.json(customer);
});

/*POST customer data to database */
router.post('/customer', function(req,res) {
    let phoneNumber = req.phoneNumber;
    let rewardsPoints = req.rewardsPoints;
    let organization = req.organization;

    Customer.insert({
        phoneNumber: phoneNumber,
        rewardsPoints: rewardsPoints,
        organization: organization,
    })

    res.send("Customer Completed")
})


module.exports = router;
