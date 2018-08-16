$(document).ready(function() {
  // Right navigation
  //
  $('.section-nav a').on('click', function(e) {
    e.preventDefault();
    var scrollTo = $($(this).attr('href')).offset().top - 70;
    
    $('html, body').animate({
      scrollTop: scrollTo
    }, 300);
  });

  // None links
  //
  $('[href="#"]').on('click', function(e) {
    e.preventDefault();
  });

  // Dropdowns
  //
  $('.toggle').on('click', function() {
    $(this).parent().toggleClass('dropped');
  });

  // Modals
  //
  function isOverflowing() {
    var rect = $('html')[0].getBoundingClientRect();
    return rect.left + rect.right < window.innerWidth;
  }
  var overflowing = isOverflowing();

  $(window).on('resize', function() {
    overflowing = isOverflowing();
  });

  $('.modal-launcher').on('click', function() {
    var modalTarget = $(this).data('target');
    $(modalTarget).addClass('active');
    $('html').addClass('clipped').css({
      'padding-right': overflowing ? '15px' : ''
    });
  });
  $('.modal, .modal-center, .modal .close, .modal-center .close').on('click', function() {
    $('.modal, .modal-center').removeClass('active');
    setTimeout(function() {
      $('html').removeAttr('style');
      $('html').removeClass('clipped');
    }, 200);
  });
  $('.modal-content').on('click', function(e) {
    e.stopPropagation();
  });

  // Collapse component
  //
  $('#basic-collapse > button').on('click', function() {
    $('#basic-collapse > .collapse-container').toggleClass('collapsed');
  });

  $('#accordion-js .header').on('click', function() {
    if ($(this).parent().find('.collapse-container').hasClass('collapsed')) {
      console.log("yes");
      $('#accordion-js .collapse-container').removeClass('collapsed');
    } else {
      $('#accordion-js .collapse-container').removeClass('collapsed');
      $(this).parent().find('.collapse-container').addClass('collapsed');
    }
  });

  // Navbars
  //
  $('.navbar-toggler').on('click', function() {
    $(this).find('i').toggleClass('close-icon');
    $(this).parent().find('nav').toggleClass('show-menu');
  });
});