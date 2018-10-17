var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.json({
    status: "0",
    message: [
      {
        id: 13,
        title: "aa",
        img: "wwww"
      }
    ]
  });
});

module.exports = router;
