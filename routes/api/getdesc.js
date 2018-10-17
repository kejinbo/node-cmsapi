var express = require("express");
var router = express.Router();

var goods = require("../../models/getdescdb");
// for (var i = 0; i < 20; i++) {
//   var kk = new goods({
//     id: i+1,
//     title: "华为(HUAWEI)荣耀6plus 16G",
//     content: `
//     <div id="kindPicture-10086100716467">
// 			    		<p><img src="https://res.vmallres.com/pimages/detailImg/2018/05/20/201805201459307432483.jpg" alt="1920xN.JPG" title="undefined"><br></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/04/02/201804021628311051368.jpg" alt="商详-美图.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516058788086.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/20180704151605906661.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/08/18/201808181625434546892.jpg" title="undefined" alt="201807041516054706543.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516062302353.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516068319251.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516072768177.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516071881436.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516076930141.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516083061587.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516085519116.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516091418829.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516093704826.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/20180704151610811870.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516104622035.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516104418636.jpg"></p><p><img title="undefined" alt="GPU_TubroP20-(1920).jpg" src="https://res.vmallres.com/pimages/detailImg/2018/07/20/201807201517332873512.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516112439616.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516116868854.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/20180704151612535351.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516124737982.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516132992600.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516137224600.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516139456868.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516143939605.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516147651179.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516162310372.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516162912800.jpg"></p><p><img src="https://res.vmallres.com/pimages/detailImg/2018/07/04/201807041516168652618.jpg"></p><p><a href="https://v.youku.com/v_show/id_XMzQ5NTQyMDYzNg==.html? f=51627683" target="_blank"><img alt="华为商城-HUAWEI P20-1920版本.jpg" src="https://res.vmallres.com/pimages/detailImg/2018/04/13/201804130857035262891.jpg"></a><br></p>
// 			    	</div>
    
//     `
//   });
//   kk.save()
// }

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
