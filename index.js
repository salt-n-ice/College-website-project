$("#header").load("header.html");
   $("#footer").load("footer.html");

function inViewport($el) {
    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}

function inViewport($el) {

    var elH = $el.outerHeight(),
        H   = $(window).height(),
        r   = $el[0].getBoundingClientRect(), t=r.top, b=r.bottom;
    return Math.max(0, t>0? Math.min(elH, H-t) : Math.min(b, H));
}
setInterval(function(){
  var header = $(".header"); // first navbar
  var nav = $(".sticky"); //second navbar
  var car = $(".car"); //carousal
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

var instituteMotto = ["Yogah Karmasu Kaushalam", "Diligence leads to Excellence", "योग: कर्मसु कौशलम", "परिश्रम उत्कृष्टता की ओर ले जाता है"]
let j = 0;
let intervalMotto = setInterval(function(){
  $(".instituteMotto-l").html(instituteMotto[j]);
  $(".instituteMotto-r").html(instituteMotto[j+1])
  j+=2;
  j%=4;
}, 5000);

// MODAL
$('a[href$="#Modal1"]').on( "click", function() {
  $('#Modal1').modal('show');
});

$('a[href$="#Modal2"]').on( "click", function() {
  $('#Modal2').modal('show');
});
// MODAL FN ENDS
setTimeout(function(){
  $('.dropdown').on('show.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideDown();
    });


    // Add slideUp animation to Bootstrap dropdown when collapsing.
    $('.dropdown').on('hide.bs.dropdown', function() {
      $(this).find('.dropdown-menu').first().stop(true, true).slideUp();
});
}, 1000);
setTtimeout(function(){
var instituteName = ["Malaviya National Institute of Technology, Jaipur", "मालवीय राष्ट्रीय प्रौद्योगिकी संस्थान जयपुर"];
var i = 0;
var intervalId = setInterval(function() {
  document.getElementById('instituteName').innerHTML = instituteName[i];
  if (i == (instituteName.length - 1)) {
    i = 0;
    //you can even clear interval here to make heading stay as last one in array
    //cleanInterval(intervalId);

  } else {
    i++;
  }
}, 5000);
}, 1000);
