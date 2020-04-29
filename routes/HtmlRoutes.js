var path = require('path');

const exercisePath = path.join(__dirname, '../public/exercise.html');
const statsPath = path.join(__dirname, '../public/stats.html')

module.exports = function (app) {

    app.get("/exercise", function (req, res) {
        res.sendFile(exercisePath)
    })

    app.get("/stats", function (req, res) {
        res.sendFile(statsPath)
    })
}