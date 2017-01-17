      $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var href = $(this).attr('href');
        var link = href.split('#')[1]; 
        var selector = "a[id='" + link + "']";
        var target = $(selector);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

var dbtn = 0;
$('#downButton').hide();
$('#downButton').click(function() {
  $('html, body').animate({scrollTop: 0 }, 2000);
  $('#downButton').fadeOut(1000);
});
window.addEventListener('scroll', function() {
    if(dbtn == 0 && $(window).scrollTop() > 0)
    {
      $("#downButton").fadeIn(1000);
    }
    if($(window).scrollTop()==0) {
       $('#downButton').fadeOut(1000);
    } 
});
