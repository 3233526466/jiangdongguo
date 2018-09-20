$(function () {

    $(".nav a").mousemove(function(){
        //去掉样式
        $(".nav a").attr("class","");
        //自己这个对应的div显示，自己的颜色变化
        $(this).attr("class","active");
    });

});