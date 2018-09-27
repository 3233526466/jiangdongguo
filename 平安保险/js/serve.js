function $(id){
    return document.getElementById(id);
}
window.onload=function() {
    var myip1 = document.getElementsByClassName("myip1")[0];
    var myip2 = document.getElementsByClassName("myip2")[0];
    var myul = document.getElementsByClassName("ul")[0];
    var shopcar = document.getElementsByClassName("shopcar")[0];

    myip1.onmouseover = function () {
        myul.style.display = "block";
        myip1.style.backgroundColor = "white";
    }
    myip1.onmouseout = function () {
        myul.style.display = "none";
    }
    myip2.onmouseover = function move() {
        shopcar.style.display = "block";
        shopcar.style.backgroundColor = "white";
        shopcar.style.borderColor = "#FF5C02";
    }
    myip2.onmouseout = function () {
        shopcar.style.display = "none";
    }
    shopcar.onmouseover = function move2() {
        shopcar.style.display = "block";
        myip2.style.borderColor = "#FF5C02";
    }
    shopcar.onmouseout = function () {
        shopcar.style.display = "none";
        myip2.style.borderColor = "#e5e5e5";
    }

    var menu1 = document.getElementsByClassName("menu1")[0];
    var XL = document.getElementsByClassName("XL")[0];
    var XL2 = document.getElementsByClassName("XL2")[0];
    var xialas = document.querySelectorAll(".xiala");

    menu1.onmouseover = function () {
        XL.style.display = "block";
        $("XLS").style.height = "490px";
    }
    menu1.onmouseout = function () {
        XL.style.display = "none";
    }
    XL.onmouseover = function () {
        XL.style.display = "block";
        XL2.style.display = "block";
    }
    XL.onmouseout = function () {
        XL.style.display = "none";
    }
    XL2.onmouseover = function () {
        XL2.style.display = "block";
        XL.style.display = "block";
    }
    XL2.onmouseout = function () {
        XL2.style.display = "none";
    }

    $("XLS").onmouseout = function () {
        XL2.style.display = "none";
        XL.style.display = "none";
        $("XLS").style.height = "0px";

    }


    for (var i = 0; i < 6; i++) {
        (function (i) {
            xialas[i].onmouseover = function () {
                $("right" + (i + 1)).style.display = "block";
            }
            xialas[i].onmouseout = function () {
                $("right" + (i + 1)).style.display = "none";
            }
            $("right" + (i + 1)).onmouseover = function () {
                $("right" + (i + 1)).style.display = "block";
            }

            $("right" + (i + 1)).onmouseout = function () {
                $("right" + (i + 1)).style.display = "none";
            }
        })(i);
    }

}
    for(var i=1;i<5;i++){
        var fenZhu1=document.getElementsByClassName("fenZhu1");
        (function(i){
            $("fz" +i).onclick=function() {
                for(var j=1;j<5;j++){
                    if(j==i){
                        $("fenZ" +j).style.display="block";
                        $("fz"+ j).style.display="none";
                        $("f"+ j).style.height="0px";

                    }else {
                        $("fenZ" + j).style.display="none";
                        $("f"+ j).style.height="37px";
                        $("fz"+ j).style.display="block";

                    }
                }
            }
        })(i);
    }

    for(var i=1;i<5;i++){
        (function(i){
            $("went" + i).onmouseover=function(){
                $("ws" + i).style.display="block";
            }
            $("went" + i).onmouseout=function(){
                $("ws" + i).style.display="none";
            }
            var flag=true;
            $("went" + i).onclick=function(){
                if(flag){
                    $("wd" + i).style.display="block";
                    $("went" + i).style.backgroundColor="#FFF9F3";
                    $("ws" + i).innerHTML="收起";
                    $("wi" +i).style.backgroundPosition="-214px -87px";
                }else {
                    $("wd" + i).style.display="none";
                    $("went" + i).style.backgroundColor="white";
                    $("ws" + i).innerHTML="展开";
                    $("wi" +i).style.backgroundPosition="-214px -47px";
                }
                flag=!flag;
               }
        })(i);
    }
var flag1=false;

$("bta").onclick=function(){
    if(flag1==false){
        $("bta").style.backgroundPosition="3px -24px";

        $("wd1").style.display="block";
        $("went1").style.backgroundColor="#FFF9F3";
        $("ws1").innerHTML="收起";
        $("wi1").style.backgroundPosition="-214px -87px";

        $("wd2").style.display="block";
        $("went2").style.backgroundColor="#FFF9F3";
        $("ws2").innerHTML="收起";
        $("wi2").style.backgroundPosition="-214px -87px";

        $("wd3").style.display="block";
        $("went3").style.backgroundColor="#FFF9F3";
        $("ws3").innerHTML="收起";
        $("wi3").style.backgroundPosition="-214px -87px";

        $("wd4").style.display="block";
        $("went4").style.backgroundColor="#FFF9F3";
        $("ws4").innerHTML="收起";
        $("wi4").style.backgroundPosition="-214px -87px";



    }else{
        $("bta").style.backgroundPosition = "3px 3px";
        $("wd1").style.display="none";
        $("went1").style.backgroundColor="white";
        $("ws1").innerHTML="展开";
        $("wi1").style.backgroundPosition="-214px -47px";

        $("wd2").style.display="none";
        $("went2").style.backgroundColor="white";
        $("ws2").innerHTML="展开";
        $("wi2").style.backgroundPosition="-214px -47px";

        $("wd3").style.display="none";
        $("went3").style.backgroundColor="white";
        $("ws3").innerHTML="展开";
        $("wi3").style.backgroundPosition="-214px -47px";

        $("wd4").style.display="none";
        $("went4").style.backgroundColor="white";
        $("ws4").innerHTML="展开";
        $("wi4").style.backgroundPosition="-214px -47px";




    }
    flag1=!flag1;
}


















































