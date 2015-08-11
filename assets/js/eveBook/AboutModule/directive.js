(function(){

	'use strict';

	angular.module('eveBook.directives')
	.directive('aboutDirective', ['animationSrv' ,function(animationSrv){

		function link(scope, element) {
			var photo = document.querySelector('.dottedLine');
			var tl = new TimelineMax();

			animationSrv.enterSection();

			tl
				.to(photo, 2, {left:0, opacity: .9, delay: 1, ease:Circ.easeOut})
				.to(photo, 1,{height: 213, ease:Power1.easeOut})
				.to('#realPhoto', 1.5 ,{ rotation: 45, scale: 1.5, ease: Circ.easeOut}, "photo")
				.to(photo, 1.5, {rotation: -45, ease:Circ.easeOut}, "photo")
				.to('.description', 1, {opacity: 1, ease: Power2.easeOut});
				
				TweenMax.to('#about', 4, {opacity: 1, delay: .5, ease: Circ.easeOut});
			}

		var definitionObject = {
	      restrict: 'E',
				link: link,
				templateUrl : 'templates/eveBook/AboutModule/template.html'
	    };

	    return definitionObject;

		}]);
})();