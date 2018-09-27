
function $(id){
    return document.getElementById(id);
}

var firstli=document.getElementsByClassName("nav-2-2")[0];
var headfirst=$("from");
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