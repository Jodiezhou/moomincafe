var temp = -475 * 4 * 2
var dir = -1;
$(function () {
    $(".Menu").hide();

    $("#header > div.s3 > a").toggle(function () {
        $(".Menu").animate({
            //width: "show",
            opacity: "show",
            height: "show"
        });
    }, function () {
        $(".Menu").animate({
            //width: "hide",
            opacity: "hide",
            height: "hide"
        });
    });
    $("#imgList").hover(function () {
        $("#btn_prev,#btn_next").stop(false, true).fadeIn()
    }, function () {
        $("#btn_prev,#btn_next").stop(false, true).fadeOut()
    })
    $("#imgList > ul li").css({
        left: -475 * 4 * 2
    })

    var ObjArr = new Array();
    var a = 11;
    for (var i = 0; i < 4; i++) {
        ObjArr[i] = ($("#imgList >ul >li").eq(a--).clone());
    }
    for (var i = 0; i < 4; i++) {
        $("#imgList >ul").prepend($(ObjArr[i]));
    }
    for (var i = 0; i < 4; i++) {
        var $dtLi = $("#imgList >ul >li").eq(i + 4).clone();
        $("#imgList >ul").append($dtLi);
    }


    $("#imgList > a").eq(0).click(function () {
        dir = 1;
        if (temp == 0) {
            $("#imgList >ul>li").css({
                left: -475 * 12
            });
            temp = -475 * 12;
        }
        $("#imgList > ul li").animate({
            left: temp + (dir * 475)
        });
        temp = temp + (dir * 475);
    });
    $("#imgList > a").eq(1).click(function () {
        dir = -1;
        if (temp == -475 * 16) {
            $("#imgList >ul>li").css({
                left: -475 * 4
            });
            temp = -475 * 4;
        }
        $("#imgList > ul li").animate({
            left: temp + (dir * 475)
        });
        temp = temp + (dir * 475);
    });
    $("#imgList >ul>li").live("click", function () {
        var index = $(this).index();
        if (index > 11) {
            index = index - 12;
        }
        $("#txtList >div:eq(" + index + ")").show().siblings().hide();
        $("#txtList p").show();
    })
});