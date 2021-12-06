$(function () {
    $(".Menu").hide();
    $("#header > div.s3 > ul > li:nth-child(2) > a").toggle(function () {
        $(".Menu").animate({
            //width: "show",
            opacity: "show",
            left: "75%"
        });
        $(this).text("✕");
    }, function () {
        $(".Menu").animate({
            //width: "hide",
            opacity: "hide",
            left: "100%"
        });
        $(this).text("☰");
    });
});