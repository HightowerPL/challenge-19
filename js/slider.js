$(document).ready(function(){
  var slideImg = ["components/img/slide1.jpg","components/img/slide2.jpg","components/img/slide3.jpg"];
  var slideQuote = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Ut enim ad minim veniam, quis nostrud."]
  var slideAvatar = ["components/img/avatar1.jpg", "components/img/avatar2.jpg", "components/img/avatar3.jpg"]
  var i = 1;

  $('.slidePrev').on('click', function(event) {
    i--;
    if(i<0){
      i= slideImg.length - 1;
     }
     switch(i) {
       case 0:
           $('.prevBackImg').attr("src", slideImg[slideImg.length-1]);
           $('.mainBackImg').attr("src", slideImg[i]);
           $('.nextBackImg').attr("src", slideImg[i+1]);
           $('.quoteAvatar').attr("src", slideAvatar[i]);
           $('.quote').text(slideQuote[i]);
           break;

      case slideImg.length - 1:
          $('.prevBackImg').attr("src", slideImg[i-1]);
          $('.mainBackImg').attr("src", slideImg[i]);
          $('.quoteAvatar').attr("src", slideAvatar[i]);
          $('.nextBackImg').attr("src", slideImg[0]);
          $('.quote').text(slideQuote[i]);
          break;

      default:
          $('.prevBackImg').attr("src", slideImg[i-1]);
          $('.mainBackImg').attr("src", slideImg[i]);
          $('.quoteAvatar').attr("src", slideAvatar[i]);
          $('.nextBackImg').attr("src", slideImg[i+1]);
          $('.quote').text(slideQuote[i]);
    }
  });


 $('.slideNext').on('click', function(event) {
   i++;
   if(i>= slideImg.length){
     i= 0;
    }

    switch(i){
      case 0:
        $('.prevBackImg').attr("src", slideImg[slideImg.length-1]);
        $('.mainBackImg').attr("src", slideImg[i]);
        $('.quoteAvatar').attr("src", slideAvatar[i]);
        $('.nextBackImg').attr("src", slideImg[i+1]);
        $('.quote').text(slideQuote[i]);
        break;

      case slideImg.length - 1:
         $('.prevBackImg').attr("src", slideImg[i-1]);
         $('.mainBackImg').attr("src", slideImg[i]);
         $('.quoteAvatar').attr("src", slideAvatar[i]);
         $('.nextBackImg').attr("src", slideImg[0]);
         $('.quote').text(slideQuote[i]);
         break;

      default:
         $('.prevBackImg').attr("src", slideImg[i-1]);
         $('.mainBackImg').attr("src", slideImg[i]);
         $('.quoteAvatar').attr("src", slideAvatar[i]);
         $('.nextBackImg').attr("src", slideImg[i+1]);
         $('.quote').text(slideQuote[i]);
  }
 });

});
