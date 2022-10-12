

var s=document.getElementById("mensaje__texto");
var letr= "A way to track your finance";

var i=0;
var su=letr.split('');
var inter=setInterval(function(){
    s.innerHTML += su[i];
    i++;
    if (i === su.length){
        clearInterval(inter)
    }
}, 200);





