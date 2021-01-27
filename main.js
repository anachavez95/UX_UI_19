$(document).ready(function(){

    $(window).on("load", function(){
        setTimeout(function () {    
         $("#about").addClass("about");
         $(".caseStudies").css("background-color", "pink");
        }, 3000);


$(".name").hover(function(){
    $(this).css("color", "pink");

}, function(){
    $(this).css("color", "brown");
});

    });
});