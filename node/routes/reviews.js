var express = require('express');
var router = express.Router();
let bc = require('badcube');

/* GET reviews based on pizza */
router.get('/getAllForPizza', function (req, res) {
    let review = bc.Review.findAll({
      phoneNumber: req.pizza
    });

    res.json(review);
});

router.get('/getPointsForPizza', function (req, res) {
    let review = bc.Review.findAll({
      pizza: req.pizza
    });

    let pointsArray = review.map(x=>{x.rating})
    let meanPoints = Math.mean(pointsArray)

    res.json(meanPoints);
});

/*POST review to database */
router.post('/review', function(req, res) {
    let pizza = req.pizza;
    let rating = req.rating;
    let description = req.description;

    bc.Reviews.insert({
        pizza: pizza,
        rating: rating,
        description: description,
    })

    res.send("Customer Completed")
})


module.exports = router;
