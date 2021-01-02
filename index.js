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
var logo = $(".mnit-logo");
setInterval(function(){
  var h = logo.height();
  h/=2;
  h*=-1;
  h+="px";
  logo.css("margin-top", h);

}, 500);

// Language Selector Button Code Currently Unused
// $(function(){
//   $('.selectpicker').selectpicker();
// });

// Changes the institute name to english and hindi every 5 seconds
var instituteName = ['Malaviya National Institute of Technology, Jaipur', 'मालवीय राष्ट्रीय प्रौद्योगिकी संस्थान, जयपुर'];
var i = 0;
var intervalId = setInterval(function() {
  document.getElementById('instituteName').innerHTML = instituteName[i];
  if (i == (instituteName.length - 1)) {
    i = 0;
    //we can even clear interval here to make heading stay as last one in array
    //cleanInterval(intervalId);

  } else {
    i++;
  }
}, 5000)