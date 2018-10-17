var express = require("express");
var router = express.Router();
var info = require("../../models/getnewdb");

router.get("/:id", function(req, res, next) {
  // 获取用户传过来的id  console.log(req.params.id)
  info.findOne({ id: req.params.id }, function(err, data) {
    if (err) return next(err);
    res.status(200).json({
      status: 0,
      message: data
    });
  });
});

module.exports = router;
