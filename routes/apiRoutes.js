const router = require("express").Router();
const db = require("../models");

//console.log("Workout = ", db.Workout);

router.get("/api/workouts", (req, res) => {
    db.Workout.find().then(data => {
        console.log("/api/workouts get route = ", JSON.stringify(data));
        res.json(data);
    })
});

router.put("/api/workouts/:id", (req, res) => {
    console.log("The req.body = ", )
    db.Workout.update({_id: req.params.id}, {$push: {exercises: req.body}})
        .then(data => {
            console.log("/api/workouts/:id put route = ", JSON.stringify(data));
            res.json(data)
        })
        .catch(err => {
            if(err){
                res.status(500).send(err)
            }
        })
});

router.post("/api/workouts", (req, res) => {
    db.Workout.create(req.body)
        .then(data => {
            console.log("/api/workouts post route = ", JSON.stringify(data));
            res.json(data)
        })
        .catch(err => {
            if(err){
                res.status(500).send(err)
            }
        })
});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({}).limit(7)    
        .then(data => {
            console.log("/api/workouts/range get route = ", JSON.stringify(data));
            res.json(data)
        })
        .catch(err => {
            if(err){
                res.status(500).send(err)
            }
        })
});

module.exports = router;