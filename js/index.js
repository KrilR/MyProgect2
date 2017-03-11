var i=10;
setInterval(changeText,2000);
function changeText(){
    $("#target").fadeIn(1000);     
    $("#target").fadeOut(1000);
 var arr = ["safe","quick","style","fancy"];
    target.innerHTML=arr[i%4];
    i++;

}


