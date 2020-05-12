$(document).ready(function(){
    $("#myDiv").html("<h2>Welcome Please click on buttons</h2>");
    alert($("#myDiv").text());
    $("#btnFadeOut").click(function(){
        $("#firstPara").fadeOut("slow");
        // $("#firstPara").fadeToggle("slow");
    });
    $("#btnFadein").click(function(){
        $("#firstPara").fadeIn();
        // $("#firstPara").fadeToggle("slow");
    });

    $("#btnAppend").click(function(){
        $("#secondPara").append("<li>My name is:</li>");
    });

    $("#changeColor").click(function(){
        $("p#thirdPara").toggleClass("myClass");
    });
     $("#changeColor").click(function(){
        $("li").css("color", "red");
    });
    $("#hideHOne").click(function(){
        $("p").hide("<p>");
    });
    $("#showHOne").click(function(){
        $("p").show("<p>");
        $("p").text("You must refresh the page");
    });
});
