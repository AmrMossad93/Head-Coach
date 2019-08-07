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
$(function(){
  $("#portfolio-wrapper").magnificPopup({
    delegate:'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  })
})
