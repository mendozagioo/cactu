/*
** A little interaction with some Cactu's componenets
** this components is just a way for use them
** ------------------------------------------------------
*/

(function () {
  function $(selector) {
    return document.querySelector(selector);
  };
  function $$(selector) {
    return document.querySelectorAll(selector);
  };

  var Cactu = {
    init: function () {
      // Global interactions
      this.noLinks();
      this.rightNavigation();
      this.submenu();

      // Componenets
      this.alerts();
      this.collapse();
      this.dropDowns();
      this.modals();
      this.navbars();

      // Clipboard
      this.clipboard();
    },

    noLinks: function () {
      var href = $('[href="#"]');

      if (!href) return; // Stop the function if href is null
      href.addEventListener('click', function (e) {
        e.preventDefault();
      });
    },

    rightNavigation: function () {
      // Create the navigation of right
      if ($('#documentation-contents')) {
        $$('#documentation-contents h2, #documentation-contents h3').forEach(function (el) {
          var additionalClass = (el.localName === 'h3') ? 'sub-sub' : '';
          var anchor = document.createElement('a');

          anchor.className = additionalClass;
          anchor.href = "#" + el.id;
          anchor.innerText = el.innerText;

          $('.sidebar-secondary > nav').appendChild(anchor);
        });
      }

      setTimeout(function () {
        // Interaction with the navigation of right
        $$('.section-nav a').forEach(function (element) {
          element.addEventListener('click', function (e) {
            e.preventDefault();

            window.scroll({
              top: $(this.attributes.href.value).offsetTop - 70,
              behavior: 'smooth'
            });
          });
        });
      }, 0);
    },

    submenu: function () {
      var $submenu = $('.submenu-toggle');
      var $navbarToggler = $('.navbar-toggler');

      if ($submenu) {
        $submenu.addEventListener('click', function () {
          $('.sidebar').classList.toggle('dropped');
          $('.submenu-toggle span').textContent = $('.submenu-toggle span').textContent === "Submenu" ? "Close" : "Submenu";
          $('html').classList.toggle('clipped');
          if (!$navbarToggler) return;
          $navbarToggler.classList.toggle('hidden');
        });
      }

      if ($navbarToggler && $submenu) {
        $navbarToggler.addEventListener('click', function () {
          $submenu.classList.toggle('hidden');
        });
      }
    },

    alerts: function() {
      if ($('.alert-dismissible')) {
        $$('.alert-dismissible').forEach(function(el) {
          el.querySelector('.close').addEventListener('click', function () { el.classList.add('hidden') });
        });
      }
    },

    collapse: function () {
      if ($('#basic-collapse > button')) {
        $('#basic-collapse > button').addEventListener('click', function () {
          $('#basic-collapse > .collapse-container').classList.toggle('collapsed');
        });
      }

      if ($('#accordion-js .header')) {
        $$('#accordion-js .header').forEach(function(el) {
          el.addEventListener('click', function() {
            // Remove the same element clicked
            if (el.parentNode.querySelector('.collapse-container').classList.contains('collapsed')) {
              el.parentNode.querySelector('.collapse-container').classList.remove('collapsed');
            // Remove another element clicked
            } else {
              $$('#accordion-js .collapse-container').forEach(function (elem) {
                elem.classList.remove('collapsed');
              });
              el.parentNode.querySelector('.collapse-container').classList.add('collapsed');
            }
          });
        });
      }
    },

    dropDowns: function () {
      if ($('.toggle')) {
        $$('.toggle').forEach(function(el) {
          el.addEventListener('click', function() {
            el.parentNode.classList.toggle('dropped')
          });
        });
      }
    },

    modals: function () {
      var self = this;
      var scrollbarWidth = self._getScrollbarWidth();
      var overflowing = self._isOverflowing();

      // // Ensures that scrollbarWidth do not come with decimals
      scrollbarWidth = scrollbarWidth > 1 ? scrollbarWidth : '';

      window.onresize = function () {
        overflowing = self._isOverflowing();
      }

      if ($('.modal-launcher')) {
        $$('.modal-launcher').forEach(function(el) {
          el.addEventListener('click', function () {
            var modalTarget = el.dataset.target;
            $(modalTarget).classList.add('active');
            $('html').classList.add('clipped');
            $('html').style.paddingRight = overflowing ? scrollbarWidth : '';
          });
        });
      }

      if ($('.modal, .modal-center, .modal .close, .modal-center .close')) {
        $$('.modal, .modal-center, .modal .close, .modal-center .close').forEach(function(el) {
          el.addEventListener('click', function () {
            if (el.className === 'close') {
              $$('.modal, .modal-center').forEach(function (elem) { elem.classList.remove('active') });
            } else { el.classList.remove('active'); }
            
            setTimeout(function () {
              $('html').removeAttribute('style');
              $('html').classList.remove('clipped');
            }, 200);
          });
        });

        $$('.modal-content').forEach(function(el) {
          el.addEventListener('click', function (e) { e.stopPropagation() });
        });
      }
    },

    navbars: function () {
      if ($('.navbar-toggler')) {
        $$('.navbar-toggler').forEach(function(el) {
          el.addEventListener('click', function () {
            el.querySelector('i').classList.toggle('close-icon');
            el.parentNode.querySelector('nav').classList.toggle('show-menu');
          });
        });
      }
    },

    _getScrollbarWidth: function () {
      var $html = $('html');
      return window.innerWidth - $html.getBoundingClientRect().width;
    },

    _isOverflowing: function () {
      var rect = $('body').getBoundingClientRect();
      return rect.width < window.innerWidth;
    },

    _returnCopyText: function (e) {
      setTimeout(function () {
        e.trigger.textContent = 'copy';
      }, 700);
    },

    clipboard: function () {
      var self = this;
      // Insert clipboard button before .highlight
      if ($('.highlight')) {
        $$('.highlight').forEach(function(el) {
          var buttonClipboardHTML = '<div class="clipboard"><button class="button-clipboard">copy</button></div>';
          el.insertAdjacentHTML('beforebegin', buttonClipboardHTML);
        });

        var clipboardButtons = $$('.button-clipboard');
        var clipboard = new ClipboardJS(clipboardButtons, {
          target: function (trigger) {
            return trigger.parentNode.nextElementSibling
          }
        });

        clipboard.on('success', function (e) {
          e.trigger.textContent = 'Copied!';

          e.clearSelection();
          self._returnCopyText(e);
        });

        clipboard.on('error', function (e) {
          var comandOrCtrl = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl';
          var errorMessage = 'Press ' + comandOrCtrl + ' + C to copy';

          e.trigger.textContent = errorMessage;
          self._returnCopyText(e);
        });
      }
    }
  }

  document.addEventListener('DOMContentLoaded', Cactu.init());
})();