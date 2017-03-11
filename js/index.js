var i=10;
setInterval(changeText,6000);
function changeText(){
 var arr = ["creative","comfortable","brilliant","exlusive","interesting","safe","quick","style","modern","actual"];
    target.innerHTML=arr[i%10];
    $("#target").fadeIn(3000);
    $("#target").fadeOut(3000);
    i++;
}


