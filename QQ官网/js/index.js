$(function () {
    var scrollTop = $(window).scrollTop();
    var firstHeight = 805;
    var winHeight = $(window).height();
    var bodyheight = $("body").height();
    $(window).resize(function () {
        winHeight = $(window).height();
        bodyheight = $("body").height()
    });
    $(window).scroll(function () {
        scrollTop = $(window).scrollTop();
        if (scrollTop >= firstHeight) {
            $("#header").addClass("headcip")
        } else {
            if ($("#header").hasClass("headcip")) {
                $("#header").removeClass("headcip")
            }
        }
    });

    $("#logonav li").mousemove(function(){
        //去掉样式
        $("#logonav li").attr("class","");
        //自己这个对应的div显示，自己的颜色变化
        $(this).attr("class","topnav");
        });

    $(".circle span").mousemove(function() {
        //去掉样式
        $(".circle span").attr("class", "");
        //隐藏div
        $(".circle .a").css("display","none");
        //自己这个对应的div显示，自己的颜色变化
        $(this).attr("class", "on");
        //在这里面的索引，换句话说，就是第几个
        $(".circle .a").eq($(this).index()).css("display","block");
    });
});
function coo(){
    $("#content").show();
    $("#timbg").hide();
}
function doo(){
    $("#timbg").show();
    $("#content").hide();
}