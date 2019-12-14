// Preloader
$(window).on('load', function () {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut('slow');
});
// OwnerTeam Carousel
$(function () {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    dots: true
  })
})
// Responsive Tabs
$(function () {
  $("#service-tabs").responsiveTabs({
    animation: 'slide'
  })
})
// Portfolio
$(window).on('load', function () {
  $("#isotope-container").isotope({});
  $('#isotope-filters').on('click', 'button', function () {
    var filtervalue = $(this).attr('data-filter');
    $('#isotope-container').isotope({
      filter: filtervalue
    });
    $('#isotope-filters').find('.active').removeClass('active');
    $(this).addClass('active');
  })
})
// Magnifire
$(function () {
  $("#portfolio-wrapper").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  })
})
// NavBar
$(function () {
  // show/hide nav on page load
  showHideNav();
  $(window).scroll(function () {
    // show/hide nav on window's scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 50) {
      // Show white nav
      $("nav").addClass("white-nav-top");
      // Show dark logo
      $(".navbar-brand img").attr("src", "../../../../assets/Tools/logo.png");
      // Show back to top button
      $("#back-to-top").fadeIn();
    } else {
      // Hide white nav
      $("nav").removeClass("white-nav-top");
      // Show logo
      $(".navbar-brand img").attr("src", "../../../../assets/Tools/logo.png");
      // Hide back to top button
      $("#back-to-top").fadeOut();
    }
  }
});
$(function () {
  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();
    // get section id like #about, #servcies, #work, #team and etc.
    var section_id = $(this).attr("href");
    $("html, body").animate({
      scrollTop: $(section_id).offset().top - 64
    }, 1250, "easeInOutExpo");
  });
});
$(function () {

  // Show mobile nav
  $("#mobile-nav-open-btn").click(function () {
    $("#mobile-nav").css("height", "100%");
  });

  // Hide mobile nav
  $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
    $("#mobile-nav").css("height", "0%");
  });

});
// Animation With Scrtolling
$(function () {
  new WOW().init();
});
$(window).on('load', function () {
  $('#home-heading-1').addClass("animated fadeInDown");
  $('#home-heading-2').addClass("animated fadeInLeft");
  $('#home-text').addClass("animated zoomIn");
  $('#home-btn').addClass("animated zoomIn");
  $('#arrow-down i').addClass("animated fadeInDown infinite");
});

