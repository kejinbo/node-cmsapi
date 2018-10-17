var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/goodsdb",
  { useNewUrlParser: true }
); //连接数据库

var db = mongoose.connection;
db.on("error", function callback() {
  console.log("connect error");
});

db.once("open", function callback() {
  console.log("connected!");
});

var Schema = mongoose.Schema;
var imagesinfoSchema = new Schema({
  "id": Number,
  "title": String,
  "click": Number,
  "add_time": {
    type: Date,
    default: Date.now
  },
  "content": String
});

module.exports = mongoose.model("imagesinfo", imagesinfoSchema);
