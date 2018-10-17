var express = require("express");
var router = express.Router();

var shopcar = require("../../models/getshopcarlistdb");

router.get("/:idArr", function(req, res, next) {
  var idArry = req.params.idArr.split(",");
  var arrLen = idArry.length;
  var o = [];

  //使用 一个大的promise 嵌套循环里面的每个promise 在处理所有嵌套promise 
  //实现 循环里面的异步请求，并且获取数据
  var promise = new Promise(function(resolve, reject) {
    idArry.forEach(element => {
      var test = new Promise(function(resolve, reject) {
        shopcar.find({ id: element }, function(err, data) {
          if (err) {
            return reject(err);
          } else {
            resolve(data);
          }
        });
      });

      Promise.all([test]).then(function(result) {
        o.push(result[0]);
        if(o.length === arrLen){
          resolve()
        }
      });
    });
  });
  promise.then(function(){
    var final = [];
    o.forEach(el => {
      final.push(el[0])
    })
    res.status(200).json({
      status: 0,
      data:final
    })
  })
});

module.exports = router;
