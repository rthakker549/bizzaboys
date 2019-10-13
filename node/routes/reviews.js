var express = require('express');
var router = express.Router();
let bc = require('badcube');
import {mean} from 'mathjs'

/* GET description review and points based on pizza */
router.get('/getAllForPizza', function (req, res) {
    let review = bc.Review.findAll({
      pizza: req.query.pizza
    });

    res.json(review);
});

/* GET mean points based on pizza */
router.get('/getPointsForPizza', function (req, res) {
    let review = bc.Review.findAll({
      pizza: req.query.pizza
    });

    let pointsArray = review.map(x => x.rating);
    let meanPoints = Math.round(mean(pointsArray))

    res.json({points: meanPoints});
});

/* POST review to database */
router.post('/postReview', function(req, res) {
    let pizza = req.query.pizza;
    let rating = req.query.rating;
    let description = req.query.description;

    bc.Reviews.insert({
        pizza: pizza,
        rating: rating,
        description: description
    })

    res.send("Review Added")
})

/* Delete a review*/
router.delete('/deleteReview', function(req,res) {
    let idName = req.query.id;
    bc.Reviews.delete({id:idName});

    res.send("Review Deleted")
})

module.exports = router;
