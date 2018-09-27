function $(id){
    return document.getElementById(id);
}
window.onload=function(){
    var myip1=document.getElementsByClassName("myip1")[0];
    var myip2=document.getElementsByClassName("myip2")[0];
    var myul=document.getElementsByClassName("ul")[0];
    var shopcar=document.getElementsByClassName("shopcar")[0];

    myip1.onmouseover=function(){
        myul.style.display="block";
        myip1.style.backgroundColor="white";
    }
    myip1.onmouseout=function(){
        myul.style.display="none";
    }
    myip2.onmouseover=function move(){
        shopcar.style.display="block";
        shopcar.style.backgroundColor="white";
        shopcar.style.borderColor="#FF5C02";
    }
    myip2.onmouseout=function() {
        shopcar.style.display = "none";
    }
    shopcar.onmouseover=function move2(){
        shopcar.style.display="block";
        myip2.style.borderColor="#FF5C02";
    }
    shopcar.onmouseout=function(){
        shopcar.style.display = "none";
        myip2.style.borderColor="#e5e5e5";
    }

    var menu1=document.getElementsByClassName("menu1")[0];
    var XL=document.getElementsByClassName("XL")[0];
    var XL2=document.getElementsByClassName("XL2")[0];
    var xialas=document.querySelectorAll(".xiala");

    menu1.onmouseover=function(){
        XL.style.display="block";
        $("XLS").style.height="490px";
    }
    menu1.onmouseout=function(){
        XL.style.display="none";

    }
    XL.onmouseover=function(){

        XL.style.display="block";
        XL2.style.display="block";
    }
    XL.onmouseout=function(){
        XL.style.display="none";
    }
    XL2.onmouseover=function(){
        XL2.style.display="block";
        XL.style.display="block";
    }
    XL2.onmouseout=function(){
        XL2.style.display="none";
    }
    $("XLS").onmouseout=function(){
        XL2.style.display="none";
        XL.style.display="none";
        $("XLS").style.height="0px";

    }
    for(var i=0;i<6;i++){
        (function(i){
            xialas[i].onmouseover=function(){
                $("right" + (i+1)).style.display="block";
            }
            xialas[i].onmouseout=function(){
                $("right" + (i+1)).style.display="none";
            }
            $("right" + (i+1)).onmouseover=function(){
                $("right" + (i+1)).style.display="block";
            }

            $("right" + (i+1)).onmouseout=function(){
                $("right" + (i+1)).style.display="none";
            }
        })(i);
    }

    var alllis=document.querySelectorAll(".all li");
    var show=document.getElementsByClassName("show")[0];

    /*alllis的循环*/
    for(var i=0;i<4;i++){
        (function(i){
            alllis[i].onclick=function(){
                for(var j=0;j<4;j++) {
                    if (j == i) {
                        alllis[j].style.borderBottom = "1px solid #ff8a00";
                        alllis[j].style.backgroundImage = "url('../images/jiantou.png')";
                        alllis[j].style.backgroundPosition = "45px 42px";
                        alllis[j].style.backgroundRepeat = "no-repeat";
                        $("page"+(j+1)).style.display="block";
                    } else {
                        alllis[j].style.borderBottom = "none";
                        alllis[j].style.backgroundImage = "none";
                        alllis[j].style.backgroundPosition = "none";
                        alllis[j].style.backgroundRepeat = "none";
                        $("page"+(j+1)).style.display="none";
                    }

                }
                if(i==1 ||i==2 ||i==3){
                    dboxs.style.height="920px";
                    $("content").style.height="1050px";
                    $("page"+(i+1)).style.height="920px";
                }else{
                    dboxs.style.height="1200px";
                    $("content").style.height="1450px";
                    $("page"+(i+1)).style.height="1200px";
                }
            }
        })(i) ;
    }

    /*dbox的循环*/
    for(var i=1;i<8;i++) {
        (function (i) {
            var dboxs=document.getElementsByClassName("boxs");
            var dqian = $("box" + i).getElementsByClassName("d1")[0];
            var dhou = $("box" + i).getElementsByClassName("d1-2")[0];
            $("box" + i).onmouseover = function () {
                dqian.style.display = "none";
                dhou.style.display = "block";
            }
            $("box" + i).onmouseout = function () {
                dqian.style.display = "block";
                dhou.style.display = "none";
            }
        })(i);
    }

    var updownlis=$("updown1").querySelectorAll("li");
    var dboxs=document.getElementsByClassName("dboxs")[0];





    /* 全部的上下页*/
    for(var j=0;j<4;j++){
        (function(j){
            switch(j)
            {
                case 0:
                    updownlis[j].onclick=function(){
                        if( updownlis[2].style.backgroundColor="#FF6633"){
                            updownlis[1].onclick();
                        }
                    }
                    break;
                case 1:
                    updownlis[j].onclick=function(){
                        updownlis[0].style.display="none";
                        updownlis[3].style.display="block";
                        dboxs.style.height="1200px";
                        $("content").style.height="1450px";
                        $("page1").style.height="1200px";
                        for (var i=1;i<3;i++) {
                            if(i == j){
                                updownlis[i].style.backgroundColor="#FF6633";
                                updownlis[i].style.color="#FFFFFF";
                                $("pageup"+ i).style.display="block";
                            } else {
                                updownlis[i].style.backgroundColor="#FFFFFF";
                                updownlis[i].style.color="black";
                                $("pageup"+ i).style.display="none";
                            }
                        }
                    }
                    break;
                case 2:
                    updownlis[j].onclick=function(){
                        updownlis[3].style.display="none";
                        updownlis[0].style.display="block";
                        dboxs.style.height="920px";
                        $("content").style.height="1050px";
                        $("page1").style.height="920px";
                        for (var i=1;i<3;i++) {
                            if(i == j){
                                updownlis[i].style.backgroundColor="#FF6633";
                                updownlis[i].style.color="#FFFFFF";
                                $("pageup"+ i).style.display="block";
                            } else {
                                updownlis[i].style.backgroundColor="#FFFFFF";
                                updownlis[i].style.color="black";
                                $("pageup"+ i).style.display="none";
                            }
                        }
                    }
                    break;
                case 3:
                    updownlis[j].onclick=function(){
                        if( updownlis[1].style.backgroundColor="#FF6633"){
                            updownlis[2].onclick();
                        }
                    }
                    break;
            }
        })(j);
    }

}




















