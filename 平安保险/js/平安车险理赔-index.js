
function $(id){
    return document.getElementById(id);
}
var lastli=document.getElementsByClassName("b3")[0];
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


var firstli=document.getElementsByClassName("b4")[0];
var headDengluli=$("head-denglus");
firstli.onmouseover=function(){
    this.style.background="while";
    headDengluli.style.display="block";
}
firstli.onmouseout=function(){
    this.style.background="";
    headDengluli.style.display="";
}
headDengluli.onmouseover=function(){
    firstli.style.background="while";
    this.style.display="block";
}
headDengluli.onmouseout=function(){
    firstli.style.background="";
    this.style.display="";
}
var firstlis=document.getElementsByClassName("d4-6")[0];
var headlis=$("from-1");
firstlis.onmouseover=function(){
    this.style.background="while";
    headlis.style.display="block";
}
firstlis.onmouseout=function(){
    this.style.background="";
    headlis.style.display="";
}
headlis.onmouseover=function(){
    firstlis.style.background="while";
    this.style.display="block";
}
headlis.onmouseout=function(){
    firstlis.style.background="";
    this.style.display="";
}

var minlis=document.getElementsByClassName("d3-3")[0];
var headminlis=$("min");
minlis.onmouseover=function(){
    this.style.background="while";
    headminlis.style.display="block";
}
minlis.onmouseout=function(){
    this.style.background="";
    headminlis.style.display="";
}
headminlis.onmouseover=function(){
    minlis.style.background="while";
    this.style.display="block";
}
headminlis.onmouseout=function(){
    minlis.style.background="";
    this.style.display="";
}

var maxlis=document.getElementsByClassName("d3-4")[0];
var headmaxlis=$("pictrue");
maxlis.onmouseover=function(){
    this.style.background="while";
    headmaxlis.style.display="block";
}
maxlis.onmouseout=function(){
    this.style.background="";
    headmaxlis.style.display="";
}
headmaxlis.onmouseover=function(){
    maxlis.style.background="while";
    this.style.display="block";
}
headmaxlis.onmouseout=function(){
    maxlis.style.background="";
    this.style.display="";
}

