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
    $('#instituteName').html(instituteName[j]);
    j++;
    j%=2;
  }, 5000);
}, 2000);



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
