$('.whatever').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    navText: ["<img src='img/left.png'>","<img src='img/right.png'>"],
    responsive:{
        0:{
            items:1
        }
    }
})

$('.review-container').owlCarousel({
    loop:true,
    nav:true,
    dots: false,
    navText: ["<img src='img/left.png'>","<img src='img/right.png'>"],
    responsive:{
        0:{
            items:1
        }
    }
})

$("#welcome-btn").click(function(){

    $("body").animate({
        scrollTop: 0
    });

});

$("#what-btn").click(function(){
	var scrollToDiv = $("#what").position().top

    $("body").animate({
        scrollTop: scrollToDiv
    });

});

$("#before-btn").click(function(){
	var scrollToDiv = $("#before").position().top

    $("body").animate({
        scrollTop: scrollToDiv
    });

});

$("#inspiration-btn").click(function(){
	var scrollToDiv = $("#inspiration").position().top

    $("body").animate({
        scrollTop: scrollToDiv
    });

});

$("#meet-btn").click(function(){
	var scrollToDiv = $("#meet").position().top

    $("body").animate({
        scrollTop: scrollToDiv
    });

});

var mapboxDrag = $(".mapbox-drag");
var map = $(".map");
 
mapboxDrag.click(function() {
	if(map.hasClass("active")) {
		map.removeClass("active");
		mapboxDrag.html("Enable<br>Drag");
	} else {
		map.addClass("active");
		mapboxDrag.html("Disable<br>Drag");
	}
})