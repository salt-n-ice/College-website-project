var header = $(".header"); // first navbar
var nav = $(".sticky"); //second navbar
var car = $(".car"); //carousal
function inViewport($el) {
    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}
setInterval(function(){
  var h = nav.height().toString();
  if(inViewport(header)==0){
    nav.addClass("fixed-top");
    car.css("padding-top", h+"px");
  }
  else{
    nav.removeClass("fixed-top");
    car.css("padding-top", "0px"); //padding of car = 0
  }
}, 10);
