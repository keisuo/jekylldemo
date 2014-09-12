var config = {
    // // 如果是正常的网页分享，则不要添加。否则会出现未审核应用
    // appid: 'APP_ID', // 公共账号ID？
     img_url: $('.slides li img')[0]['src'],
    // img_width: 'IMG_WIDTH', // 可不设
    // img_height: 'IMG_HEIGHT', // 可不设
    link: location.href,
    desc:  $('meta[name="description"]').attr('content'),
    title: $('title').text()
};

// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function() {
    var WJ = WeixinJSBridge;
    // 发送给好友
    WJ.on('menu:share:appmessage', function() {
        WJ.invoke('sendAppMessage', config, function(res) {
            // _report('sendAppMessage', res.err_msg);
        });
    });
    // 发送到朋友圈
    WJ.on('menu:share:timeline', function() {
        WJ.invoke('shareTimeline', config, function(res) {
            // _report('shareTimeline', res.err_msg);
        });
    });

    // 发送到微博
    WJ.on('menu:share:weibo', function() {
        WJ.invoke('shareWeibo', config, function(res) {
            // _report('shareWeibo', res.err_msg);
        });
    });
});