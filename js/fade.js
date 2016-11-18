$("document").ready(function(){
    //arrange blocks in a circle
    var block = $("#rotator div").get(),
    increase = Math.PI * 2 / block.length,
    x = 0, y = 0, angle = 0;

    for (var i = 0; i < block.length; i++) {
        var elem = block[i];
        x = 300 * Math.cos(angle) + 270;
        y = 300 * Math.sin(angle) + 270;
        elem.style.position = 'absolute';
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
        var rot = 90 + (i * (360 / block.length));        
        angle += increase;
    }

});


$(".col-md-6").css('display','none');
$(".btn-primary").css('display','none');
$("h1").css('display','none');
$("nav").css('display','none');

$("h1").slideToggle(2000);  
$("nav").slideToggle(2000); 
$(".btn-primary").slideToggle();
$(window).scroll(function(){
	var windowWidth = $(this).width();
	var windowHeight = $(this).height();
	var windowScrollTop = $(this).scrollTop();
	
	var toFade = ["One", "Two", "Three","Four"];
	
	for( i = 0; i <toFade.length; i ++)
    {
		if(windowScrollTop>$("#"+toFade[i]).position().top -47 && !( $("#"+toFade[i]).children().children().children(".col-md-6").hasClass("Viewed")))
		{
			$("#"+toFade[i]).children().children().children(".col-md-6").addClass("Viewed");
			$("#"+toFade[i]).children().children().children(".col-md-6").fadeToggle();
		} 
	}
	
	
	
	
});

$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
		
		} else {
		$(".navbar-fixed-top").removeClass("top-nav-collapse");
		
	}
});

$(function() {
	
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
        event.preventDefault();
	});
});