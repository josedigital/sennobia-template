$(document).ready(function() {

//add some smooth for scroll
  $('.top-nav ul li a').on('click', function() {
    $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true});
    return false;
  });
  $('.js-button').on('click', function() {
    $(window).stop(true).scrollTo(this.hash, {duration:1000, interrupt:true});
    return false;
  });

});