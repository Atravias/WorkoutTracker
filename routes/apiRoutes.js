var db = require("../models")
var mongojs = require("mongojs")

module.exports = function (app) {
    app.get("/api/workouts", function (req, res) {
        db.Workout.find()
            .then(data => {
                // console.log(data)
                res.json(data)
            })
            .catch(err => res.json(err));
    });

    app.post("/api/workouts", ({ body }, res) => {
        db.Workout.create(body)
            .then(data => {
                res.json(data)
            })
            .catch(err => res.json(err));
    });

    app.put("/api/workouts/:id", ({ params, body }, res) => {
        db.Workout.collection.updateOne(
            {
                id: mongojs.ObjectId(params.id)
            },
            {
                $push: { exercises: body }
            })
            .then(data => {
                // console.log(data)
                res.json(data);
            })
            .catch(err => res.json(err));
    });

    app.get("/api/workouts/range", ({ body }, res) => {
        db.Workout.find({})
            .then(data => {
                res.json(data);
            })
            .catch(err => res.json(err));
    })
}