const MongoClient = require("mongodb").MongoClient;
require('dotenv').config();

let connection = null;

const open = function () {
    if (get() == null){
        MongoClient.connect(process.env.DB_CONN_STRING,function (err, client) {
            if(err){
                console.error("problem connecting", err);
            }
            else{
                console.log("connected to database mongo");
                connection = client.db(process.env.DB_NAME)
            }
        });
    }
}
const get = function () {
    return connection;
}
module.exports= {
    open : open,
    get : get
};