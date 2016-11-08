var field = document.getElementById('numField');

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
    $("header").slideToggle(800);
 });
