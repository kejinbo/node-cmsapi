var express = require("express");
var router = express.Router();

var thumimage = require("../../models/getthumimagesdb");

router.get("/:id", function(req, res, next) {
  thumimage.findOne({ id: req.params.id }, function(err, data) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      status: 0,
      imgArr: data
    });
  });
});

module.exports = router;
