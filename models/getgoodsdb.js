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
var goodsSchema = new Schema({
  id: Number,
  title: String,
  add_time: {
    type: Date,
    default: Date.now
  },
  summary: String,
  click: Number,
  ima_url: String,
  sell_price: Number,
  market_price: Number,
  strock_quantity: Number
});

module.exports = mongoose.model("goods", goodsSchema);
