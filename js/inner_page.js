$(window).scroll(function() {
    if ($(this).scrollTop() > 20) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

  if ($(window).scrollTop() > 20) {
    $('#header').addClass('header-scrolled');
  }