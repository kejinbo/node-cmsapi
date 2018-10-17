var express = require("express");
var router = express.Router();

var photolist = require("../../models/getimagedb");

router.get("/:cateId", function(req, res, next) {
    //这里要走分支语句，如果没有加else 会发送两条res 同时报Can't set headers after they are sent错误
  if (req.params.cateId == "0") {
    getphoto({}, req, res, next);
  } else {
    getphoto({ cateId: req.params.cateId }, req, res, next);
  }
});
function getphoto(obj, req, res, next) {
  photolist.find(obj, function(err, data) {
    if (err) {
      return next(err);
    }
    res.status(200).json({
      status: 0,
      data: data
    });
  });
}
module.exports = router;
