<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <link rel="stylesheet" type="text/css" href="css/mobile.css">
    <title>数钱数到手抽经v1.0.0</title>
</head>
<body>
    <div id="wrap">
        <section id="prepare">
            <img src="images/index.png" width="320" height="504" usemap="indexMap" />
            <map name="indexMap">
                <area shape="rect" coords="81,360,240,420"  id="show_notice" onclick="javascript:game_start()">
            </map>
        </section>
        <section id="game">
            <div id="money_pipe">
                <img src="images/rmb.png" width="192" />
                <article id="score">0</article>
                <article id="time">0</article>
            </div>
        </section>
        <section id="result">
            <footer>
                <span id="final_score">0</span>
                <img src="images/close.png" id="close" width="41" height="37" onclick="game_init()" />
            </footer>
        </section>
    </div>
</body>
<script src="js/jquery-2.0.3.min.js" type="text/javascript"></script>
<script src="js/slide.js" type="text/javascript"></script>
<script src="js/animate.js" type="text/javascript"></script>
<script>
    var total_money = 0;
    var slide;
    var total_time = 0;
    var start_time = 0;
    var shareLink = window.location.href;;
    var _share_text ="［会点网请你来数钱！］";

    var lhref=window.location.href.split('/');
    lhref[lhref.length-1] = '';
    var shref=lhref.join('/');
    var imgUrl  = shref + 'images/icon.png';
    $(document).ready(function(){
        slide = new Slide("game");
        slide.init();
        game_init();
    })



    var got_money = function(){
        total_money += 1;
        $("<img>").attr("src","images/rmb.png").width(192).appendTo($("#money_pipe"))
                .animate({bottom:800},200,function(){
                    $("#money_pipe").remove($(this));
                });
        $("#score").html(total_money);
    }

    var game_over = function(){
        $("#wrap > section").hide();
        $("#final_score").html(total_money * 100)
        $("#result").show();

        if(total_money < 10){
            _share_text = "呜呜呜，我只数了" + (total_money * 100) +"元，你也来帮我数吧";
        }else if(total_money < 30){
            _share_text = "哈哈哈，轻松数了" + (total_money * 100) +"元，你也来挑战吧！";
        }else if(total_money < 50){
            _share_text = "我在[会点网(HUI.net)请我来数钱]中数了" + (total_money * 100) +"元，快来挑战吧！";
        }else{
            _share_text = "我在[会点网(HUI.net)请我来数钱]中数了" + (total_money * 100) +"元，快来挑战吧！";
        }
    }
    var _interval;
    var game_start = function(){
        $("#wrap > section").hide();
        $("#game").show();
        start_time = new Date().getTime();
        clearInterval(_interval);
        _interval = setInterval(function(){
            var cur_time = new Date().getTime();
            total_time = cur_time - start_time;
            if(total_time < 29000) {
                $("#time").html(parseInt(30 - total_time / 1000));
            }else{
                clearInterval(_interval);
                game_over();
            }
        },300);
    }

    var game_init = function(){
        total_money = 0;
        $("#score").html(total_money);
        $("#wrap > section").hide();
        $("#prepare").show();
        //event.preventDefault();
    }


    document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
        WeixinJSBridge.on('menu:share:appmessage', function(argv){
            WeixinJSBridge.invoke('sendAppMessage',{
                "link":shareLink,
                "img_url":imgUrl,
                "desc": "［会点网(HUI.net)请你来数钱！］",
                "title":_share_text
            }, function(res) {})
        });
        WeixinJSBridge.on('menu:share:timeline', function(argv){
            WeixinJSBridge.invoke('shareTimeline',{
                "link":shareLink,
                "img_url":imgUrl,
                "desc": "［会点网(HUI.net)请你来数钱！］",
                "title":_share_text
            }, function(res) {
            });
        });
    }, false)
</script>
</html>