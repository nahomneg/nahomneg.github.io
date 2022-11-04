const dbConnection = require("../data/mongodb.js");


module.exports.getAll = function (req, res) {
    const db = dbConnection.get();
    const gamesCollection= db.collection("games");
    let offset= 0;
    let count= 5;
    if (req.query && req.query.offset) {
        offset= parseInt(req.query.offset, 10);
    }
    if (req.query && req.query.count) {
        if (req.query.count > 7){
            req.query.count = 7;
        }
        count= parseInt(req.query.count, 10);
    }

    gamesCollection.find().skip(offset).limit(count).toArray(function(err, games) {
        res.status(200).json(games);
    });
}

module.exports.getOne = function (req,res) {
    res.status(process.env.STATUS_OK).json(games[req.params.id]);
}