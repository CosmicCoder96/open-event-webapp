(function () {
  'use strict';
  var tabs = function(options) {
    var i;
    var el = document.querySelector(options.el);
    var tabNavigationLinks = el.querySelectorAll(options.tabNavigationLinks);
    var tabContentContainers = el.querySelectorAll(options.tabContentContainers);
    var activeIndex = 0;
    var initCalled = false;

    var goToTab = function(index) {
        if (index !== activeIndex && index >= 0 && index <= tabNavigationLinks.length) {
            tabNavigationLinks[activeIndex].classList.remove('is-active');
            tabNavigationLinks[index].classList.add('is-active');
            tabContentContainers[activeIndex].classList.remove('is-active');
            tabContentContainers[index].classList.add('is-active');
            activeIndex = index;
        }
    };
    var handleClick = function(link, index) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            goToTab(index);
        });
    };
    var init = function() {
        var link;

        if (!initCalled) {
            initCalled = true;
            el.classList.remove('no-js');
            for (i = 0; i < tabNavigationLinks.length; i++) {
                link = tabNavigationLinks[i];
                handleClick(link, i);
            }
        }
    };

    return {
        init: init,
        goToTab: goToTab
    };

  };
  window.tabs = tabs;
})();
var myTabs = tabs({
  el: '#tabs',
  tabNavigationLinks: '.tabs-nav__link',
  tabContentContainers: '.tab'

});
document.getElementsByClassName('tabs-nav__link')[0].className += ' is-active';
document.getElementsByClassName('tab')[0].className += ' is-active';
myTabs.init();