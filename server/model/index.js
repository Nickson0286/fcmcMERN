const dbConfig = require("../db/db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.staffs = require("./staff.model")(mongoose);

module.exports = db;
