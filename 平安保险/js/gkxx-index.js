function $(id){
    return document.getElementById(id);
}

var headul=document.getElementsByClassName("head-0")[0];
var headfirst=$("heads");
headul.onmouseover=function(){
    this.style.background="while";
    this.style.borderTop="2px solid #FF6200";
    this.style.borderLeft="1px solid #cccccc";
    this.style.borderRight="1px solid #cccccc";
    headfirst.style.display="block";
}
headul.onmouseout=function(){
    this.style.background="";
    this.style.borderTop="";
    this.style.borderLeft="";
    this.style.borderRight="";
    headfirst.style.display="";
}
headfirst.onmouseover=function(){
    headul.style.background="while";
    headul.style.borderTop="2px solid #FF6200";
    headul.style.borderLeft="1px solid #cccccc";
    headul.style.borderRight="1px solid #cccccc";
    this.style.display="block";
}
headfirst.onmouseout=function(){
    headul.style.background="";
    headul.style.borderTop="";
    headul.style.borderLeft="";
    headul.style.borderRight="";
    this.style.display="";
}


var lastli=document.getElementsByClassName("ul1-1")[0];
var headDenglu=$("head-denglu");
lastli.onmouseover=function(){
    this.style.background="while";
    headDenglu.style.display="block";
}
lastli.onmouseout=function(){
    this.style.background="";
    headDenglu.style.display="";
}
headDenglu.onmouseover=function(){
    lastli.style.background="while";
    this.style.display="block";
}
headDenglu.onmouseout=function(){
    lastli.style.background="";
    this.style.display="";
}


var mateli=document.getElementsByClassName("mate-2")[0];
var navFirst=$("nav-1");
mateli.onmouseover=function(){
    this.style.background="while";
    navFirst.style.display="block";
}
mateli.onmouseout=function(){
    this.style.background="";
    navFirst.style.display="";
}
navFirst.onmouseover=function(){
    mateli.style.background="while";
    this.style.display="block";
}
navFirst.onmouseout=function(){
    mateli.style.background="";
    this.style.display="";
}


var matelis=document.getElementsByClassName("mate-3")[0];
var navSecond=$("nav-2");
matelis.onmouseover=function(){
    this.style.background="while";
    navSecond.style.display="block";
}
matelis.onmouseout=function(){
    this.style.background="";
    navSecond.style.display="";
}
navSecond.onmouseover=function(){
    matelis.style.background="while";
    this.style.display="block";
}
navSecond.onmouseout=function(){
    matelis.style.background="";
    this.style.display="";
}

var matelithird=document.getElementsByClassName("mate-4")[0];
var navthird=$("nav-3");
matelithird.onmouseover=function(){
    this.style.background="while";
    navthird.style.display="block";
}
matelithird.onmouseout=function(){
    this.style.background="";
    navthird.style.display="";
}
navthird.onmouseover=function(){
    matelithird.style.background="while";
    this.style.display="block";
}
navthird.onmouseout=function(){
    matelithird.style.background="";
    this.style.display="";
}

var mateliforth=document.getElementsByClassName("mate-5")[0];
var navforth=$("nav-4");
mateliforth.onmouseover=function(){
    this.style.background="while";
    // this.style.borderTop="2px solid blue";
    navforth.style.display="block";
}
mateliforth.onmouseout=function(){
    this.style.background="";
    //this.style.borderTop="";
    navforth.style.display="";
}
navforth.onmouseover=function(){
    mateliforth.style.background="while";
    // lastli.style.borderTop="2px solid blue";
    this.style.display="block";
}
navforth.onmouseout=function(){
    mateliforth.style.background="";
    // lastli.style.borderTop="";
    this.style.display="";
}

var matelififth=document.getElementsByClassName("mate-6")[0];
var navfifth=$("nav-5");
matelififth.onmouseover=function(){
    this.style.background="while";
    navfifth.style.display="block";
}
matelififth.onmouseout=function(){
    this.style.background="";
    navfifth.style.display="";
}
navfifth.onmouseover=function(){
    matelififth.style.background="while";
    this.style.display="block";
}
navfifth.onmouseout=function(){
    matelififth.style.background="";
    this.style.display="";
}

var h3s=document.getElementsByTagName("h3");
var uls=document.getElementsByClassName("ul");
for(var i=0;i<h3s.length;i++){
    h3s[i].onoff=true;
    h3s[i].index=i;
    h3s[i].onclick=function(){
        for(var i=0;i<h3s.length;i++){
            //除了点击的h3之外的所有h3
            if(i !=this.index){
                h3s[i].className="";
                h3s[i].onoff=true;
                uls[i].style.display="none";
            }
        }
        if(this.onoff){
            //   this.className="active";
            uls[this.index].style.display="block";
        }else {
            //  this.className="";
            uls[this.index].style.display="none";
        }
        this.onoff=!this.onoff;
    }
}