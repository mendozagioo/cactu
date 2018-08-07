$(document).ready(function() {
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
});