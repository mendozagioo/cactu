/*
** A little interaction with some Cactu's componenets
** this components is just a way for use them
** ------------------------------------------------------
*/

(function() {
  var Cactu = {
    init: function () {
      // Global interactions
      this.noLinks();
      this.rightNavigation();
      this.submenu();

      // Componenets
      this.collapse();
      this.dropDowns();
      this.modals();
      this.navbars();

      // Clipboard
      this.clipboard();
    },

    noLinks: function () {
      $('[href="#"]').on('click', function (e) {
        e.preventDefault();
      });
    },

    rightNavigation: function () {
      $('.section-nav a').on('click', function (e) {
        e.preventDefault();
        var scrollTo = $($(this).attr('href')).offset().top - 70;

        $('html, body').animate({
          scrollTop: scrollTo
        }, 300);
      });
    },

    submenu: function () {
      var $submenu = $('.submenu-toggle');
      var $navbarToggler = $('.navbar-toggler');

      $submenu.on('click', function () {
        $('.submenu-toggle span').toggle(100);
        $('.sidebar').toggleClass('dropped');
        $navbarToggler.toggle(100);
        $('html').toggleClass('clipped');
      });

      $navbarToggler.on('click', function () {
        $submenu.toggle(100);
      });
    },

    collapse: function () {
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

    dropDowns: function () {
      $('.toggle').on('click', function () {
        $(this).parent().toggleClass('dropped');
      });
    },

    modals: function () {
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

    navbars: function () {
      $('.navbar-toggler').on('click', function () {
        $(this).find('i').toggleClass('close-icon');
        $(this).parent().find('nav').toggleClass('show-menu');
      });
    },

    _getScrollbarWidth: function () {
      var $html = $('html')[0];
      return window.innerWidth - $html.getBoundingClientRect().width;
    },

    _isOverflowing: function () {
      var rect = $('body')[0].getBoundingClientRect();
      return rect.width < window.innerWidth;
    },

    _returnCopyText: function (e) {
      setTimeout(function () {
        $(e.trigger).text('copy');
      }, 700);
    },

    clipboard: function () {
      var self = this;
      // Insert clipboard button before .highlight
      $('.highlight').each(function () {
        var buttonClipboardHTML = '<div class="clipboard"><button class="button-clipboard">copy</button></div>';
        $(this).before(buttonClipboardHTML);
      })

      var clipboard = new ClipboardJS('.button-clipboard', {
        target: function (trigger) {
          return trigger.parentNode.nextElementSibling
        }
      });

      clipboard.on('success', function (e) {
        $(e.trigger).text('Copied!');

        e.clearSelection();
        self._returnCopyText(e);
      })

      clipboard.on('error', function (e) {
        var comandOrCtrl = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl';
        var errorMessage = 'Press ' + comandOrCtrl + ' + C to copy';

        $(e.trigger).text(errorMessage);
        self._returnCopyText(e);
      });
    }
  }

  $(document).ready(Cactu.init());
})();