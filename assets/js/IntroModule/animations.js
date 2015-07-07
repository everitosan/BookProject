(function(){
	'use strict';

	angular.module('eveBook.animations')
		.animation('.introAnimation', 
			[function () {
				var definitionObject = {}

				definitionObject.enter = function(element,doneFn){
					//console.log('ala');
					//TweenMax.to('#intro', 1,{'opacity':1, ease: Circ.easOut, onComplete: doneFn});
				};

				definitionObject.leave = function(element,doneFn){
					TweenMax.to('#intro', 1,{'opacity':0, ease: Circ.easOut, onComplete: doneFn});
				};
				return definitionObject;
			}]);
})();