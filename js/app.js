var field = document.getElementById('numField');

$(document).ready(function(){
  $(".menu, .menuSrc").hide();
  $(window).on('resize', function(){
    if ($(window).width() >= 640) {
      $(".menu, .menuSrc").show();
    }
  });
});

$('#up').on('click', function(){
   field.stepUp(1);
   return false;
 });

$('#down').on('click', function(){
   field.stepDown(1);
   return false;
 });
/*
$(document).ready(function(){
  if ($(window).width() <= 640) {
    $("header").hide();
  }
});
*/
 $(".smallMenuButton").click(function(){
    $(".menu, .menuSrc").slideToggle(800);
 });
