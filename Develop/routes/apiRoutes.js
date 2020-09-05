var db = require("../models");

module.exports = function (app) {
  app.get("/api/workouts", function (req, res) {
    db.Workout.find({})
      .then(function (dbWorkout) {
        res.json(dbWorkout);
      })
      .catch((err) => res.json(err));
  });

  app.put("/api/workouts/:id", function (req, res) {
    console.log(req.body);
    db.Workout.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true }
    ).then(function (dbWorkout) {
      res.json(dbWorkout);
    });
  });

  app.get("/api/workouts/range", (req, res) => {
    console.log("range");
    db.Workout.find()
      .then((dbWorkout) => {
        res.json(dbWorkout);
      })
      .catch((err) => {
        res.json(err);
      });
  });

  app.post("/api/workouts", (req, res) => {
    console.log(req.body);
    db.Workout.create(req.body)
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => {
        res.json(err);
      });
  });
};
