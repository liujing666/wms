// TODO 关于我们

var express = require('express');
var router = express.Router();
var request = require('request');

router.param('_id', function (req, res, next, id) {
    console.log('CALLED ONLY ONCE' + id);
    next();
});

/* GET about page. */
router.get('/', function (req, res, next) {
    request({
        method: "POST",
        json: true,
        postData: {
            mimeType: 'application/x-www-form-urlencoded',
            params: {
                draw: 1,
                rkno: "sdfgdsfg",
                status: 1,
                startTimeParam: "2017-3-2 11:31:18",
                endTimeParam: "2017-3-2 11:31:31",
                pageNum: 123,
                pageSize: 1
            }
        },
        data: {
            draw: 1,
            rkno: "sdfgdsfg",
            status: 1,
            startTimeParam: "2017-3-2 11:31:18",
            endTimeParam: "2017-3-2 11:31:31",
            pageNum: 123,
            pageSize: 1
        },
        // url: 'http://192.168.5.29:8080/wms_cg_web/mfunrkDoc',
        url: 'http://127.0.0.1:3000/check/aaa',                      //ceshi/123456
        headers: {"Content-Type": 'application/json'}
    }, function (error, response, json) {
        res.send(response);
        // if (!error && response.statusCode == 200) {
        //     /*<debug>*/
        //     console.log('------接口数据------\n', json);
        //     /*</debug>*/
        // } else {
        //     return res.send({
        //         status: 500,
        //         message: "服务器未响应"
        //     });
        // }
    });
    // request.post({
    //     // url: 'http://192.168.5.29:8080/wms_cg_web/mfunrkDoc',
    //     url: 'http://127.0.0.1:3000/check/aaa',
    //     formData: {
    //         draw: 1,
    //         rkno: "sdfgdsfg",
    //         status: 1,
    //         startTimeParam: "2017-3-2 11:31:18",
    //         endTimeParam: "2017-3-2 11:31:31",
    //         pageNum: 123,
    //         pageSize: 1
    //     }
    // }, function optionalCallback(err, httpResponse, body) {
    //     if (err) {
    //         return console.error('upload failed:', err);
    //     }
    //     console.log(body);
    //     res.send(httpResponse);
    // })
});


module.exports = router;