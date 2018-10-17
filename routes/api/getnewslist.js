var express = require("express");
var router = express.Router();

var newlist = require("../../models/getnewslistdb");

// for (var i = 0; i < 20; i++) {
//   var kk = new newl({
//     id: i+1,
//     title: "哈哈哈哈"+i,
//     click: i,
//     img_url: 'https://avatars0.githubusercontent.com/u/25916649?s=40&v=4'
//   });
//   kk.save()
// }

router.get("/", function(req, res, next) {
  newlist.find(function(err, data) {
    if (err) return next(err);
    res.status(200).json({
      status: 0,
      message: data
    });
  });
});

module.exports = router;
