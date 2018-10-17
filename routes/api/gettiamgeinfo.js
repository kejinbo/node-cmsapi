var express = require("express");
var router = express.Router();

var getimageinfo = require("../../models/getimageinfodb");

router.get("/:id", function(req, res, next) {
  getimageinfo.find({ id: req.params.id }, function(err, data) {
    if (err) {
      return next(err);
    } else {
      res.status(200).json({
        status: 0,
        data: data
      });
    }
  });
});

module.exports = router;
