/**
 * Created by LENOVO on 2018/6/7.
 */
function $(id){
    return document.getElementById(id);
}         //封装获取ID的方法

window.onload=function(){

    var nav1Li=document.querySelectorAll(".nav1 li");
    var xiaLa=document.getElementsByClassName("xiaLa");

    for(var i=1;i<6;i++){
        (function (i){
            nav1Li[i].onmouseover=function(){
                $("nav" + (i+1)).style.display ="block";
            }
            nav1Li[i].onmouseout=function(){
                $("nav" + (i+1)).style.display ="none";
            }

            xiaLa[i-1].onmouseover=function(){
                $("nav" + (i+1)).style.display ="block";
            }
            xiaLa[i-1].onmouseout=function(){
                $("nav" + (i+1)).style.display ="none";
            }
        })(i);

    }


        var myip1=document.getElementsByClassName("myip1")[0];
        var myip2=document.getElementsByClassName("myip2")[0];
        var myul=document.getElementsByClassName("ul")[0];
        var shopcar=document.getElementsByClassName("shopcar")[0];

         myip1 .onmouseover=function(){
             myul.style.display="block";
             myip1.style.backgroundColor="white";
         }
        myip1 .onmouseout=function(){
            myul.style.display="none";
        }

        myip2.onmouseover=function move(){
            shopcar.style.display="block";
            shopcar.style.backgroundColor="white";
            shopcar.style.borderColor="#FF5C02";
        }
        myip2 .onmouseout=function() {
            shopcar.style.display = "none";
        }

        shopcar .onmouseover=function move2(){
            shopcar.style.display="block";
            myip2.style.borderColor="#FF5C02";
        }
        shopcar .onmouseout=function(){
            shopcar.style.display = "none";
            myip2.style.borderColor="#e5e5e5";
        }

        for(var i=1;i<7;i++){
            var listlis=document.querySelectorAll(".menu li");

            (function(i){
                listlis[i-1].onmouseover=function(){
                    $("right" + i).style.display="block";
                }
                listlis[i-1].onmouseout=function(){
                        $("right" + i).style.display="none";

                }
                $("right" + i).onmouseover=function(){
                    $("right" + i).style.display="block";

                }
                $("right" + i).onmouseout=function(){
                    $("right" + i).style.display="none";
                }
            })(i);
        }


/*大图切换*/
var  bigtu=document.getElementsByClassName("bigtu")[0];

            var mybigtu = setInterval(function(){
                autoPlay();
            }, 4000)
    var j=4;

 function autoPlay(){
     bigtu.style.backgroundImage = "url(../images/banner" + j + ".jpg)";

     j++;
     if(j>4){
         j=1;
     }
 }



    /*上下滚动*/
    var i=0;
    var k=1;
        $("jiant1").onclick=function(){
        var myup=window.setInterval(function(){   /*点击向上滚一次耗时10毫秒*/
            i++;
            $("upd").style.top="-"+i+"%";
            if(i==(100*k)){
                clearInterval(myup);
                k++;
                if(k==4){
                    k=1;
                    i=0;
                    $("upd").style.top="0px";
                }
            }
        },10);
            var time=window.setTimeout(myupd(),7010);   /* 点击滚动之后，启动自动滚动*/
    }
        $("jiant2").onclick=function(){

        var myup=window.setInterval(function(){ /*点击向下滚一次耗时10毫秒*/
            i++;
            $("upd").style.top=(-300+i)+"%";
            if(i==(100*k)){
                clearInterval(myup);
                k++;
                if(k==4){
                    k=1;
                    i=0;
                    $("upd").style.top="-300%";
                }
            }
        },10);
            var time2=window.setTimeout(myupd(),7010)  /* 点击滚动之后，启动自动滚动*/
    }

    /*自动滚动*/
    var myupd=window.setInterval(function(){
        var myup2=window.setInterval(function(){
            i++;
            $("upd").style.top="-"+i+"%";
            if(i==(100*k)){
                clearInterval(myup2);
                k++;
                if(k==4){
                    k=1;
                    i=0;
                    $("upd").style.top="0px";
                }
            }
        },10)

    },7000);





}
