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
var thumimagesSchema = new Schema({
  "id": Number,
  "img_Array":Array
});

module.exports = mongoose.model("thumimage", thumimagesSchema);
