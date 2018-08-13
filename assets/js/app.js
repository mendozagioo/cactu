$(document).ready(function() {
  // None links
  //
  $('[href="#"]').on('click', function(e) {
    e.preventDefault();
  });

  $('.toggle').on('click', function() {
    $(this).parent().toggleClass('dropped');
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