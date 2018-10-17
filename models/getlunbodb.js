var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost/goodsdb",
  { useNewUrlParser: true }
);

var db = mongoose.connection;
db.on("error", function callback() {
  console.log("connect error");
});

db.once("open", function callback() {
  console.log("connected!");
});

var Schema = mongoose.Schema;
var lunboSchema = new Schema({
  id: Number,
  title: String,
  img_url: String
});

module.exports = mongoose.model("lunbo",lunboSchema)
