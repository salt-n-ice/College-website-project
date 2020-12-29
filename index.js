var header = $(".header");
var nav = $(".navbar")
var mid = $(".middle");
function inViewport($el) {
    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}
setInterval(function(){
  console.log(inViewport(header));
  if(inViewport(header)==0){
    nav.addClass("fixed-top");
    mid.css("top", "245px"); //245
  }
  else{
    nav.removeClass("fixed-top");
    mid.css("top", "245px");  //89+8+40+8+100
  }
}, 10);
