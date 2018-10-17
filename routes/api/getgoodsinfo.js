var express = require("express");
var router = express.Router();

var goods = require("../../models/getgoodsinfodb");

router.get("/:id", function(req, res, next) {
    goods.find({id:req.params.id},function(err,data){
        if(err){
            next(err)
        }else{
            res.status(200).json({
                status:0,
                data:data
            })
        }
    })
});

module.exports = router;
