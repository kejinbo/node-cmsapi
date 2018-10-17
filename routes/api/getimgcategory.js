var express = require("express");
var router = express.Router();

var getimagcategory = require("../../models/getimgcategorydb")

router.get("/", function(req, res, next) {
    getimagcategory.find(function(err, data) {
    if (err) throw next(err);
    res.status(200).json({
      status: 0,
      data: data
    });
  });
});

module.exports = router;
