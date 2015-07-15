(function wrapper() {
    'use strict';

    angular.module('eveBook.animations')
        .animation('.contactAnimation', [function () {
            var definitionObject = {};
            var tLine = new TimelineMax();

            definitionObject.enter = function(element, doneFn) {
            	tLine.to('#contact', 1, {opacity: 1, ease: Circ.easeOut, onComplete: doneFn});
            	console.log('ala');
            };
            definitionObject.leave = function(element, doneFn) {
            	tLine.to('#contact', 1, {opacity: 0, ease: Bounce.easeOut, onComplete: doneFn});

            };

            return definitionObject;
        }]);
})();