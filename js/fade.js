$("document").ready(function(){
	
	
    //arrange blocks in a circle
	arrangeSkills();
});

$('*[class^="col"]').not('*[class^="collapse"]').css('display','none');
//$(".btn").css('display','none');
$("#title h1").css('display','none');

$("#title h1").slideToggle(1000);   
//$(".btn").slideToggle();
$(window).scroll(function(){
	var windowWidth = $(this).width();
	var windowHeight = $(this).height();
	var windowScrollTop = $(this).scrollTop();
	
	var toFade = ["One","Two" , "Three","Four","Five"];
	
	for( i = 0; i <toFade.length; i ++)
    {
		if(windowScrollTop>$("#"+toFade[i]).position().top -(windowHeight/2) && !( $("#"+toFade[i]).children().children().children(".col-md-6").hasClass("Viewed")))
		{
			$("#"+toFade[i]).children().children().children('*[class^="col"]').addClass("Viewed");
			if ($("#"+toFade[i]).children().children().children('*[class^="col"]').is(":visible") == false) {
				if(toFade[i] == "Two"){
					$("#"+toFade[i]).children().children().children('*[class^="col"]').fadeToggle(1000);
					$("#"+toFade[i]).children().children().children('*[class^="col"]').attr('id','rotatorInner');
					$("#"+toFade[i]).children().children().attr('id','rotatorOuter');
					
				}
				else
				{
					$("#"+toFade[i]).children().children().children('*[class^="col"]').fadeToggle(1500);
				}
			}
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



$(window).resize(function(){
	//$('*[class^="col"]').not('*[class^="collapse"]').css('display','none');
    arrangeSkills();
	
});

var arrangeSkills = function(){
	if($(this).width() >= 768){
		var block = $("#rotator div").get(),
		increase = Math.PI * 2 / block.length,
		x = 0, y = 0, angle = 0;
		
		for (var i = 0; i < block.length; i++) {
			var elem = block[i];
			x = Math.round(300 * Math.cos(angle) + 270);
			y = Math.round(300 * Math.sin(angle) + 270);
			elem.style.position = 'absolute';
			elem.style.left = x + 'px';
			elem.style.top = y + 'px';
			var rot = 60 + (i * (360 / block.length));        
			angle += increase;
		}
	}
	else
	{
		var block = $("#rotator div").get();
		for (var i = 0; i < block.length; i++) {
			var elem = block[i];
			$(elem).attr('style','');
		}
		
	}
};



$(function() {
	
    $('a.page-scroll').bind('click', function(event) {
	
		var toFade = ["One","Two" , "Three","Four","Five"];
	
	for( i = 0; i <toFade.length; i ++)
    {
		
			$("#"+toFade[i]).children().children().children('*[class^="col"]').addClass("Viewed");
			if ($("#"+toFade[i]).children().children().children('*[class^="col"]').is(":visible") == false) {
				if(toFade[i] == "Two"){
					$("#"+toFade[i]).children().children().children('*[class^="col"]').fadeToggle(1000);
					$("#"+toFade[i]).children().children().children('*[class^="col"]').attr('id','rotatorInner');
					$("#"+toFade[i]).children().children().attr('id','rotatorOuter');
					
				}
				else
				{
					$("#"+toFade[i]).children().children().children('*[class^="col"]').fadeToggle(1500);
				}
			}
		 
	}
	
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
		}, 2000, 'easeInOutExpo');
        event.preventDefault();
		});
	});
	
	
	$("#rotator").children('*[class^="col"]').hover(function()
	{
		$(this).toggleClass("rotatorCenter");
	});
	
	$(".portfolioItem").hover(function()
	{
		$(this).find("h3").fadeOut(500);
		}, function() {
		$( this ).find("h3").fadeIn(500);
	});
	
	
	
	
	
	
	
	
