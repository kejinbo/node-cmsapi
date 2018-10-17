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
var goodsinfoSchema = new Schema({
  "id": Number,
  "title": String,
  "add_time": {
    type: Date,
    default: Date.now
  },
  "goods_no": String,
  "stock_quantity": Number,
  "market_price": Number,
  "sell_price":Number
});

module.exports = mongoose.model("goodsinfo", goodsinfoSchema);
