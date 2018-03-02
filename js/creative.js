(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 127)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 127
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-items-1', {
    duration: 600,
    scale: 0.3,
    delay: 100,
    origin: 'left',
    distance: '300px'
  }, 200);
  sr.reveal('.sr-items-2', {
    duration: 600,
    scale: 0.3,
    delay: 150,
    origin: 'left',
    distance: '300px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 600
  });
  sr.reveal('.sr-mainbutton', {
    duration: 1000,
    delay: 1300
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);
  sr.reveal('.sr-text', {
    duration: 600,
    delay: 600,
    origin: 'left',
    distance: '100px'
  }, 300);
  sr.reveal('.sr-about', {
    duration: 600,
    delay: 200,
    origin: 'left',
    distance: '200px'
  }, 300);
  sr.reveal('.sr-button-about', {
    duration: 1000,
    delay: 1300
  });
  sr.reveal('.sr-header', {
    duration: 800,
    delay: 100,
    scale: 1,
    origin: 'left',
    distance: '300px'
  });
  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });



})(jQuery); // End of use strict