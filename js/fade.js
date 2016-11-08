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
  
  var toFade = ["One", "Two", "Three"];

  for( i = 0; i <toFade.length; i ++)
    {
  if(windowScrollTop>$("#"+toFade[i]).position().top -47 && !( $("#"+toFade[i]).children().children().children(".col-md-6").hasClass("Viewed")))
 {
   $("#"+toFade[i]).children().children().children(".col-md-6").addClass("Viewed");
   $("#"+toFade[i]).children().children().children(".col-md-6").fadeToggle();
 }
    }
 
 
                
 
});