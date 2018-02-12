"use strict";

$("h1").click(function() {
    $(this).css("background-color", "purple"); //event.target can also be used instead of this, selector can also be used
});

$("p").dblclick(function() {
    $(this).css("font-size", "18px");
});

$("li").hover(
    function() {
        $(this).css("color", "red");
    },
    function() {
        $(this).css("color", "black");
    }
);