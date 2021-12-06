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

    $("input").eq(1).focus(function () {
        if ($(this).val() == "name") {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).val("Email");
        }
    })


    $("input").eq(2).focus(function () {
        if ($(this).val() == "Email") {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).val("Phone Number");
        }
    })

    $("input").eq(3).focus(function () {
        if ($(this).val() == "phone Number") {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).val("Your Message");
        }
    })

    $("input").eq(4).focus(function () {
        if ($(this).val() == "Your Message") {
            $(this).val("");
        }
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).val("Your Message");
        }
    })
});
