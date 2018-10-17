var express = require("express");
var router = express.Router();

var goods = require("../../models/getgoodsdb");

router.get("/", function(req, res, next) {
  //console.log(req.query)
  var pageindex = parseInt(req.query.pageindex) * 10;
  goods
    .find(function(err, data) {
      if (err) {
        return next(err);
      } else {
        res.status(200).json({
          status: 0,
          data: data
        });
      }
    })
    .limit(10)
    .skip(pageindex);
});

module.exports = router;
