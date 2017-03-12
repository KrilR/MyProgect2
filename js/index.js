var i=10;
setInterval(changeText,3000);
function changeText(){
    $("#target").fadeIn(1500);     
    $("#target").fadeOut(1500);
 var arr = ["safe","quick","style","fancy"];
    target.innerHTML=arr[i%4];
    i++;
}
   $("#questForm").submit(function(){
      event.preventDefault();
      $("#questForm").hide();
      document.getElementById("thanks").hidden=false;
    });
$(function() {
    new WOW().init();    
});

