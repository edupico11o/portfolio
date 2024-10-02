$(document).ready(function(){
    $("#ul-menu > li > a").hover(function(){
        $(this).parent().animate({top: '-15px', left : '15px'},500);
        console.log("allo");
    },function(){
        $(this).parent().animate({top: '0px', left : '0px'},500);
    });
});
