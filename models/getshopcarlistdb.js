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
var shopcarSchema = new Schema({
  cou: Number,
  id: Number,
  title: String,
  sell_price: Number,
  thumb_path: String
});

module.exports = mongoose.model("shopcar", shopcarSchema);
