/* input ��ı� value*/
var oInput = document.getElementById("Input");
oInput.onfocus = function () {
    if (this.value == this.defaultValue) {
        this.value = "";
    }
    this.parentNode.style.background = "url(top_img/frame_bg.png) -233px -161px";

};
oInput.onblur = function () {
    if (this.value == "") {
        this.value = this.defaultValue;
    }
    this.parentNode.style.background = "url(top_img/frame_bg.png) 0 -161px"
};


$(".gps #GPS .nav_hua").mouseover(function (){
    $(this).find(".nav_home_div")[0].style.display="block" ;
})
$(".gps #GPS .nav_hua1").mouseover(function (){
    $(".gps #GPS .nav_hua .nav_home_div")[0].style.display="none";
    $(this).find(".nav_home_div1")[0].style.display="block";

}).mouseout(function(){
    $(this).find(".nav_home_div1")[0].style.display="none";
    $(".gps #GPS .nav_hua .nav_home_div")[0].style.display="block"
});

$(".gps #GPS .nav_hua2").mouseover(function (){
    $(".gps #GPS .nav_hua .nav_home_div")[0].style.display="none";
    $(this).find(".nav_home_div2")[0].style.display="block";
}).mouseout(function(){
    $(this).find(".nav_home_div2")[0].style.display="none";
    $(".gps #GPS .nav_hua .nav_home_div")[0].style.display="block"
});

//$(".gps #GPS .navdown").mousemove(function (){
//    $(".gps #GPS .nav_hua .nav_home_div")[0].style.display="none";
//    $(".gps #GPS .nav_hua1 .nav_home_div1")[0].style.display="none";
//    $(".gps #GPS .nav_hua2 .nav_home_div2")[0].style.display="none";
//}).mouseout(function(){
//    $(".gps #GPS .nav_hua .nav_home_div")[0].style.display="block";
//})

(function(){
    var bigBanner=document.getElementById("bigBanner");
    var oLis=bigBanner.getElementsByTagName("li")[0];
    var oAs=document.getElementById("click").getElementsByTagName("a");

    bigBanner.appendChild(oLis.cloneNode(true));
    bigBanner.style.width=bigBanner.offsetWidth+oLis.offsetWidth+"px";
    for(var i=0;i<oAs.length;i++){
        oAs.item(i).n=i;
        oAs.item(i).onmouseover=function(){
            animate(bigBanner,{left:this.n*-700},800);
            step=this.n;
            current(step);
            clearTimeout(autoTimer);

            autoTimer=window.setInterval(autoMove,2000);

        }
    }
    var step=0;
    function autoMove(){
        step++;
        if(step>=11){
            bigBanner.style.left=0;
            step=1;
        }
        if(step==10){
            current(0)
        }else{
            current(step);
        }
        animate(bigBanner,{left:step*-700},800);
    }
    autoTimer=window.setInterval(autoMove,2000);
    function current(n){
        for(var i=0;i<oAs.length;i++){
            oAs[i].className=""
        }
        oAs[n].className="promoted";
    }
})();





(function(){
    var bigBanner=document.getElementById("small_bannar");
    var oLis=bigBanner.getElementsByTagName("li")[0];
    var oAs=document.getElementById("small_dian").getElementsByTagName("a");

    bigBanner.appendChild(oLis.cloneNode(true));
    bigBanner.style.width=bigBanner.offsetWidth+oLis.offsetWidth+"px";
    for(var i=0;i<oAs.length;i++){
        oAs.item(i).n=i;
        oAs.item(i).onmouseover=function(){
            animate(bigBanner,{left:this.n*-220 },400);
            step=this.n;
            current(step);
            clearTimeout(autoTimer);

            autoTimer=window.setInterval(autoMove,5000);

        }
    }
    var step=0;
    function autoMove(){
        step++;
        if(step>=6){
            bigBanner.style.left=0;
            step=1;
        }
        if(step==5){
            current(0)
        }else{
            current(step);
        }
        animate(bigBanner,{left:step*-220},400);
    }
    autoTimer=window.setInterval(autoMove,5000);
    function current(n){
        for(var i=0;i<oAs.length;i++){
            oAs[i].className=""
        }
        oAs[n].className="promoted";
    }
})()

;(function(){
    var btn=document.getElementById("down");
    var colse=document.getElementById("colse");
    colse.onclick=function(){
        btn.style.display="none";
    }

})();


