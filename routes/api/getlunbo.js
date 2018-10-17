var express = require('express');
var router = express.Router();
var lunbo = require("../../models/getlunbodb")

router.get('/',function(req,res,next){
    lunbo.find(function(err,data){
        if(err) return next(err)
        res.status(200).json({
            status:0,
            message: data
        })
    })
})

module.exports = router