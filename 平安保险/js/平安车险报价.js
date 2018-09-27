function $(id){
    return document.getElementById(id);
}

var firstli=document.getElementsByClassName("firstli")[0];
var headfirst=$("head-1");
firstli.onmouseover=function(){
    this.style.background="while";
    headfirst.style.display="block";
}
firstli.onmouseout=function(){
    this.style.background="";
    headfirst.style.display="";
}
headfirst.onmouseover=function(){
    firstli.style.background="while";
    this.style.display="block";
}
headfirst.onmouseout=function(){
    firstli.style.background="";
    this.style.display="";
}
var secondli=document.getElementsByClassName("secondli")[0];
var headsecond=$("head-2");
secondli.onmouseover=function(){
    this.style.background="while";
    headsecond.style.display="block";
}
secondli.onmouseout=function(){
    this.style.background="";
    headsecond.style.display="";
}
headsecond.onmouseover=function(){
    secondli.style.background="while";
    this.style.display="block";
}
headsecond.onmouseout=function(){
    secondli.style.background="";
    this.style.display="";
}

var aboutli=document.getElementsByClassName("about")[0];
var headabout=$("from-0");
aboutli.onmouseover=function(){
    this.style.background="while";
    headabout.style.display="block";
}
aboutli.onmouseout=function(){
    this.style.background="";
    headabout.style.display="";
}
headabout.onmouseover=function(){
    aboutli.style.background="while";
    this.style.display="block";
}
headabout.onmouseout=function(){
    aboutli.style.background="";
    this.style.display="";
}
var aboutli=document.getElementsByClassName("text")[0];
var headabout=$("from-0");
aboutli.onmouseover=function(){
    this.style.background="while";
    headabout.style.display="block";
}
aboutli.onmouseout=function(){
    this.style.background="";
    headabout.style.display="";
}
headabout.onmouseover=function(){
    aboutli.style.background="while";
    this.style.display="block";
}
headabout.onmouseout=function(){
    aboutli.style.background="";
    this.style.display="";
}


var lastli=document.getElementsByClassName("lastli")[0];
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
