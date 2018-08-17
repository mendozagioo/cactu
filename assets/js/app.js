/*
** A little interaction with some Cactu's componenets
** this components is just a way for use them
** ------------------------------------------------------
*/

var Cactu = {
  init: function() {
    // Global interactions
    this.noLinks();
    this.rightNavigation();
    // Componenets
    this.collapse();
    this.dropDowns();
    this.modals();
    this.navbars();
  },

  noLinks: function() {
    $('[href="#"]').on('click', function (e) {
      e.preventDefault();
    });
  },

  rightNavigation: function() {
    $('.section-nav a').on('click', function (e) {
      e.preventDefault();
      var scrollTo = $($(this).attr('href')).offset().top - 70;

      $('html, body').animate({
        scrollTop: scrollTo
      }, 300);
    });
  },

  collapse: function() {
    $('#basic-collapse > button').on('click', function () {
      $('#basic-collapse > .collapse-container').toggleClass('collapsed');
    });

    $('#accordion-js .header').on('click', function () {
      if ($(this).parent().find('.collapse-container').hasClass('collapsed')) {
        console.log("yes");
        $('#accordion-js .collapse-container').removeClass('collapsed');
      } else {
        $('#accordion-js .collapse-container').removeClass('collapsed');
        $(this).parent().find('.collapse-container').addClass('collapsed');
      }
    });
  },

  dropDowns: function() {
    $('.toggle').on('click', function () {
      $(this).parent().toggleClass('dropped');
    });
  },

  modals: function() {
    var self = this;
    var scrollbarWidth = self._getScrollbarWidth();
    var overflowing = self._isOverflowing();

    // Ensures that scrollbarWidth do not come with decimals
    scrollbarWidth = scrollbarWidth > 1 ? scrollbarWidth : '';

    $(window).on('resize', function () {
      overflowing = self._isOverflowing();
    });

    $('.modal-launcher').on('click', function () {
      var modalTarget = $(this).data('target');
      $(modalTarget).addClass('active');
      $('html').addClass('clipped').css({
        'padding-right': overflowing ? scrollbarWidth : ''
      });
    });
    $('.modal, .modal-center, .modal .close, .modal-center .close').on('click', function () {
      $('.modal, .modal-center').removeClass('active');
      setTimeout(function () {
        $('html').removeAttr('style');
        $('html').removeClass('clipped');
      }, 200);
    });
    $('.modal-content').on('click', function (e) {
      e.stopPropagation();
    });
  },

  navbars: function() {
    $('.navbar-toggler').on('click', function () {
      $(this).find('i').toggleClass('close-icon');
      $(this).parent().find('nav').toggleClass('show-menu');
    });
  },

  _getScrollbarWidth: function() {
    var $html = $('html')[0];
    return window.innerWidth - $html.getBoundingClientRect().width;
  },

  _isOverflowing: function() {
    var rect = $('body')[0].getBoundingClientRect();
    return rect.width < window.innerWidth;
  }
}

$(document).ready(Cactu.init());