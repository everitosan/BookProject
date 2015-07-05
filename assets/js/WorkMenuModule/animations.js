(function wrapper() {
    'use strict';

    angular.module('eveBook.animations')
        .animation('.catContainerLink', [function () {
            var definitionObject = {};
            var tl = new TimelineMax();

            definitionObject.enter = function(ele, doneFn) {
            	var child = ele[0].firstChild;
            	tl.to(ele, .4, {width: '100%', position:'relative', ease: Power2.easeOut})
            		.to( child, .3, {opacity: 1, padding: '0 1em', onComplete:doneFn}, "-=0.25");
            };
            definitionObject.leave = function(ele, doneFn) {
            	var child = ele[0].firstChild;
            	tl.to( child, .2, {opacity: 0, padding: '0', ease: Power2.easeOut})
            	.to(ele, .4, {width: 2, position:'absolute', ease: Power2.easeOut, onComplete:doneFn}, "-=0.25");
            };

            return definitionObject;
        }]);
})();