$(document).ready(function(){
  var slideImg = ["components/img/slide1.jpg","components/img/slide2.jpg","components/img/slide3.jpg"];
  var slideQuote = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Ut enim ad minim veniam, quis nostrud."]
  var slideAvatar = ["components/img/avatar1.jpg", "components/img/avatar2.jpg", "components/img/avatar3.jpg"]
  var i = 1;
  var markBegin = "<span class='markBegin'>,,</span>"
  var markEnd = "<span class='markEnd'>,,</span>"
  var avatar = "<img class='quoteAvatar' src='' alt='avatar'/>"

  $('.slidePrev').on('click', function(event) {
    i--;
    if(i<0){
      i= slideImg.length - 1;
     }
     switch(i) {
       case 0:
           $('.slidePrev').css("background", "url('" + slideImg[slideImg.length-1] + "') no-repeat center center");
           $('.slideMain').css("background", "url('" + slideImg[i] + "') no-repeat center center");
           $('.slideNext').css("background", "url('" + slideImg[i+1] + "') no-repeat center center");
           $('.quote').text(slideQuote[i]);
           $('.quote').prepend(markBegin);
           $('.quote').append(markEnd);
           $('.quote').prepend(avatar);
           $('.quoteAvatar').attr("src", slideAvatar[i]);
           break;

      case slideImg.length - 1:
          $('.slidePrev').css("background", "url('" + slideImg[i-1] + "') no-repeat center center");
          $('.slideMain').css("background", "url('" + slideImg[i] + "') no-repeat center center");
          $('.slideNext').css("background", "url('" + slideImg[0] + "') no-repeat center center");
          $('.quote').text(slideQuote[i]);
          $('.quote').prepend(markBegin);
          $('.quote').append(markEnd);
          $('.quote').prepend(avatar);
          $('.quoteAvatar').attr("src", slideAvatar[i]);
          break;

      default:
          $('.slidePrev').css("background", "url('" + slideImg[i-1] + "') no-repeat center center");
          $('.slideMain').css("background", "url('" + slideImg[i] + "') no-repeat center center");
          $('.slideNext').css("background", "url('" + slideImg[i+1] + "') no-repeat center center");
          $('.quote').text(slideQuote[i]);
          $('.quote').prepend(markBegin);
          $('.quote').append(markEnd);
          $('.quote').prepend(avatar);
          $('.quoteAvatar').attr("src", slideAvatar[i]);
    }
  });


 $('.slideNext').on('click', function(event) {
   i++;
   if(i>= slideImg.length){
     i= 0;
    }

    switch(i){
      case 0:
        $('.slidePrev').css("background", "url('" + slideImg[slideImg.length-1] + "') no-repeat center center");
        $('.slideMain').css("background", "url('" + slideImg[i] + "') no-repeat center center");
        $('.slideNext').css("background", "url('" + slideImg[i+1] + "') no-repeat center center");
        $('.quote').text(slideQuote[i]);
        $('.quote').prepend(markBegin);
        $('.quote').append(markEnd);
        $('.quote').prepend(avatar);
        $('.quoteAvatar').attr("src", slideAvatar[i]);
        break;

      case slideImg.length - 1:
          $('.slidePrev').css("background", "url('" + slideImg[i-1] + "') no-repeat center center");
          $('.slideMain').css("background", "url('" + slideImg[i] + "') no-repeat center center");
          $('.slideNext').css("background", "url('" + slideImg[0] + "') no-repeat center center");
          $('.quote').text(slideQuote[i]);
          $('.quote').prepend(markBegin);
          $('.quote').append(markEnd);
          $('.quote').prepend(avatar);
          $('.quoteAvatar').attr("src", slideAvatar[i]);
         break;

      default:
         $('.slidePrev').css("background", "url('" + slideImg[i-1] + "') no-repeat center center");
         $('.slideMain').css("background", "url('" + slideImg[i] + "') no-repeat center center");
         $('.slideNext').css("background", "url('" + slideImg[i+1] + "') no-repeat center center");
         $('.quote').text(slideQuote[i]);
         $('.quote').prepend(markBegin);
         $('.quote').append(markEnd);
         $('.quote').prepend(avatar);
         $('.quoteAvatar').attr("src", slideAvatar[i]);
  }
 });

});
