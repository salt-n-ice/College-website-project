$("#header").load("/College-website-project/header.html");
   $("#footer").load("/College-website-project/footer.html");

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


var instituteName = ["Malaviya National Institute of Technology, Jaipur", "मालवीय  &nbsp राष्ट्रीय &nbsp प्रौद्योगिकी  &nbsp संस्थान &nbsp जयपुर"];
setTimeout(function(){
  let j = 0;
  var intervalId = setInterval(function() {
    $("#instituteName").fadeOut();
    $('#instituteName').html(instituteName[j]);
    setTimeout(function(){
      $("#instituteName").fadeIn();
    }, 500);
    j++;
    j%=2;
  }, 5000);
}, 2000);



var instituteMotto = ["Yogah Karmasu Kaushalam", "Diligence leads to Excellence", "योग: कर्मसु कौशलम", "परिश्रम उत्कृष्टता की ओर ले जाता है"]
let j = 0;
let intervalMotto = setInterval(function(){
  $(".instituteMotto-l").fadeOut();
  $("#instituteMotto-r").fadeOut();
  $(".instituteMotto-l").html(instituteMotto[j]);
  $(".instituteMotto-r").html(instituteMotto[j+1]);
  setTimeout(function(){
    $("#instituteMotto-l").fadeIn();
    $("#instituteMotto-r").fadeIn();
  }, 500);
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


//add footer or header elements here

});
}, 1000);

setTimeout(function(){
  $(".search-button").click(function(){
    alert("This feature will be added in the future!");
  });
  $(".radio-input-1").click(function(){
    alert("This feature will be added in the future!");
  });
  $(".radio-input-2").click(function(){
    alert("This feature will be added in the future!");
  });
  $(".future1").click(function(){
    alert("You can contact to this phone number: 0141 252 9087");
  });
  $(".future2").click(function(){
    alert("You can contact this mail: academy@mnit.ac.in");
  });
}, 3000);


// COUNTER CODE:
// (function(e){"use strict";e.fn.counterUp=function(t){var n=e.extend({time:400,delay:10},t);return this.each(function(){var t=e(this),r=n,i=function(){var e=[],n=r.time/r.delay,i=t.text(),s=/[0-9]+,[0-9]+/.test(i);i=i.replace(/,/g,"");var o=/^[0-9]+$/.test(i),u=/^[0-9]+\.[0-9]+$/.test(i),a=u?(i.split(".")[1]||[]).length:0;for(var f=n;f>=1;f--){var l=parseInt(i/n*f);u&&(l=parseFloat(i/n*f).toFixed(a));if(s)while(/(\d+)(\d{3})/.test(l.toString()))l=l.toString().replace(/(\d+)(\d{3})/,"$1,$2");e.unshift(l)}t.data("counterup-nums",e);t.text("0");var c=function(){t.text(t.data("counterup-nums").shift());if(t.data("counterup-nums").length)setTimeout(t.data("counterup-func"),r.delay);else{delete t.data("counterup-nums");t.data("counterup-nums",null);t.data("counterup-func",null)}};t.data("counterup-func",c);setTimeout(t.data("counterup-func"),r.delay)};t.waypoint(i,{offset:"100%",triggerOnce:!0})})}})(jQuery);

// P fix
$('.counter').counterUp({
  delay: 10,
  time: 1000
  });
