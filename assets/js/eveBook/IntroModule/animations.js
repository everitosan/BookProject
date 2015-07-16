(function(){
	'use strict';

	angular.module('eveBook.animations')
		.animation('.introAnimation', 
			[function () {
				var definitionObject = {}

				definitionObject.enter = function(element,doneFn){
					TweenMax.to('#logo', 4,{ delay: 4, 'opacity':1, "filter": "blur(0)" ,ease: Circ.easeOut, onComplete: doneFn});
					
					//console.log('ala');
				};

				definitionObject.leave = function(element,doneFn){
					TweenMax.to('#intro', 1,{'opacity':0, ease: Circ.easOut, onComplete: doneFn});
				};
				return definitionObject;
			}]);
})();