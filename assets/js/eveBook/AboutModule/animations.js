(function(){
	'use strict';

	angular.module('eveBook.animations')
		.animation('.aboutAnimation', function () {

				var definitionObject  = {};
				var photo;

				definitionObject.enter = function(element, doneFn){
					photo = document.querySelector('.dottedLine');
				
				var tl = new TimelineMax();
					tl
						.to(photo, 2, {left:0, opacity: .9, delay: 1, ease:Circ.easeOut})
						.to(photo, 1,{height: 213, ease:Power1.easeOut})
						.to('#realPhoto', 1.5 ,{ rotation: 45, scale: 1.5, ease: Circ.easeOut}, "photo")
						.to(photo, 1.5, {rotation: -45, ease:Circ.easeOut}, "photo")
						.to('.description', 1, {opacity: 1, ease: Power2.easeOut, onComplete: doneFn});
					
					TweenMax.to('#about', 4, {opacity: 1, delay: .5, ease: Circ.easeOut});
				};

				definitionObject.leave = function(element, doneFn){
					TweenMax.to('#about', 1, {opacity:0, ease: Circ.easeOut, onComplete: doneFn});
				};

				return definitionObject;

			});
})();	