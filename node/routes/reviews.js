var express = require('express');
var router = express.Router();
let bc = require('badcube');
const {mean} = require('mathjs')

/* GET description review and points based on pizza */
router.get('/getAllForPizza', function (req, res) {
    let review = bc.Reviews.findAll({});

    res.json(review);
});

/* GET mean points based on pizza */
router.get('/getPointsForPizza', function (req, res) {
    let review = bc.Reviews.findAll({
      pizza: req.body.pizza
    });

    let pointsArray = review.map(x => x.rating);
    let meanPoints = Math.round(mean(pointsArray))

    res.json({points: meanPoints});
});

/* POST review to database */
router.post('/postReview', function(req, res) {
    let pizza = req.body.pizza;
    let rating = req.body.rating;
    let description = req.body.description;

    bc.Reviews.insert({
        pizza: pizza,
        rating: Number(rating),
        description: description
    })

    res.send("Review Added")
})

/* Delete a review*/
router.delete('/deleteReview', function(req,res) {
    let idName = req.body.id;
    bc.Reviews.delete({_id:idName});

    res.send("Review Deleted")
})

module.exports = router;
