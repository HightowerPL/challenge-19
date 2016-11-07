var cities = ["components/img/ny.jpg", "components/img/ny1.jpg", "components/img/ny2.jpg"];
var x = 0;
var y=23;

$('.modalNextImg').on('click', function(){
    x++;
    if (x === cities.length){
      x = 0;
      $(".cityPhoto").css("background-image", "url('" + cities[x] + "')");
    }
    else {
      $(".cityPhoto").css("background-image", "url('" + cities[x] + "')");
    }
});

$('.modalPrevImg').on('click', function(){
    x--;
    if (x < 0){
      x = cities.length-1;
      $(".cityPhoto").css("background-image", "url('" + cities[x] + "')");
    }
    else {
      $(".cityPhoto").css("background-image", "url('" + cities[x] + "')");
    }
});
