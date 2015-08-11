(function wrapper() {
    'use strict';

    angular.module('eveBook.services')
        .factory('animationSrv', ['$location', function ($location) {

            var data = {};

            data.enterSection = function () {
            	if(!isMobile()) {
    				playSound('myste');
    				pauseVideo('vide0');
    			}

    			videoGoTo('vide0', 33);

    			playSound('clicked');
    			this.showMenu();
                selectNav();
            };
        		
    		data.showMenu = function () {
				TweenMax.to('#sub-wrapper', 1, { width: '75%', ease: Power0.easeNone});
				TweenMax.to('#menu', 1, { width: '25%', ease: Power0.easeNone});
				TweenMax.to('#menu nav', 1, { opacity: 1, ease: Power0.easeNone});
    		};


            function selectNav() {
                var selector = $location.path().replace('/', '#') + 'Link';
                console.log(selector);
                var $el = $(selector)
                var top = parseInt($el.position().top) + (parseInt($el.parent().css('height'))*.08 );

                $('#menu nav ul li').removeClass('menuActive');
                $el.addClass('menuActive');
                $('#selectedImg').css('top', top);
            }

            return data;
        }]);
})();