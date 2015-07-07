(function(){
	'use strict';

	angular.module('eveBook.animations')
		.animation('.workAnimation', [ function () {

				var definitionObject = {};
				var tl = new TimelineMax();

				definitionObject.enter = function(element, doneFn) {
					TweenMax.to('#work',1, {opacity: 1, ease: Circ.easeOut, delay: 1, onComplete: doneFn} );
				};
				definitionObject.leave = function(element, doneFn) {
					TweenMax.to('#work',1, {opacity: 0, ease: Circ.easeOut, onComplete: doneFn} );
				};

				return definitionObject;
			}]);
})();